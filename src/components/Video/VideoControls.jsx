'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

export default class VideoControls extends React.Component {
	constructor(props) {
		super(props);

    this.slider = React.createRef();
    this.bar = React.createRef();

		this.state = {
      sliderPos: 0,
      dragging: false,
		};
	}

  componentDidMount() {
    document.body.addEventListener('mousemove', (evt) => this.handleMouseMove(evt));
    document.body.addEventListener('mouseup', (evt) => this.handleMouseUp(evt));
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', (evt) => this.handleMouseMove(evt));
    document.body.removeEventListener('mouseup', (evt) => this.handleMouseUp(evt));
  }

  handleMouseUp(evt) {
    if (this.state.dragging) {
      this.handleDraggingStop(evt);
    }
  }

  handleMouseMove(evt) {
    let leftOffset = evt.pageX - this.bar.current.offsetLeft;

    if (this.state.dragging) {
      this.setState({
        sliderPos: leftOffset / this.bar.current.clientWidth * 100
      }, () => {
        if (this.state.sliderPos > this.getMaxRightBound()) {
          this.setState({
            sliderPos: this.getMaxRightBound()
          });
        }
        if (this.state.sliderPos < 0) {
          this.setState({
            sliderPos: 0
          });
        }
        this.props.onDragged(this.state.sliderPos/this.getMaxRightBound());
      });
    }

    evt.stopPropagation();
    evt.preventDefault();
  }

  handleDragging(evt) {
    if (evt.button !== 0) return
    this.setState({ dragging: true });
    evt.stopPropagation();
    evt.preventDefault();
  }

  handleDraggingStop(evt) {
    if (evt.button !== 0) return
    this.setState({ dragging: false });
    evt.stopPropagation();
    evt.preventDefault();
  }

  handlePlay() {
    this.setState({playing: true}, () => {
      this.props.onVideoPlay();
    });
  }

  handlePause() {
    this.setState({ playing: false }, () => {
      this.props.onVideoPause();
    });
  }

  handleSeek(evt) {
    let leftOffset = evt.pageX - this.bar.current.offsetLeft;
    this.setState({ sliderPos: leftOffset / this.bar.current.clientWidth * 100 }, () => {
      this.props.onDragged(this.state.sliderPos / this.getMaxRightBound());
    });
  }

  setPercentage(percentage) {
    let adjustment = this.getMaxRightBound()/100;
    percentage *= adjustment
    this.setState({sliderPos: percentage});
  }

  getMaxRightBound() {
    return 100 - this.slider.current.clientWidth / this.bar.current.clientWidth * 100;
  }

	render() {
		return (
      <section className="video-controls">
        <div ref={this.bar} onClick={(evt) => this.handleSeek(evt)} className="progress-bar">
          <div style={{ position: "relative"}}>
            <div style={{ position: "absolute", left: `${this.state.sliderPos}%` }} onMouseDown={(evt) => this.handleDragging(evt)}>
              <div ref={this.slider} className="video-controls-slider"></div>
            </div>
          </div>
        </div>
        <div className="play-button-wrapper">
          <button>
            {this.state.playing ?
              <FaPause onClick={() => this.handlePause()} className="play-button" />
              :
              <FaPlay onClick={() => this.handlePlay()} className="play-button" />
            }
          </button>
        </div>
        <div className="video-time">0:00</div>
        <div className="controls-inbetween"></div>
			</section>
		);
	}
}

VideoControls.propTypes = {
  onVideoPlay: PropTypes.func.isRequired,
  onVideoPause: PropTypes.func.isRequired,
  onDragged: PropTypes.func.isRequired,
};