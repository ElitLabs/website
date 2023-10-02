'use client';

import React from 'react';
import PropTypes from 'prop-types';

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

  handleMouseUp(evt) {
    if (this.state.dragging) {
      this.handleDraggingStop(evt);
    }
  }

  handleMouseMove(evt) {
    var leftOffset = evt.pageX - this.bar.current.offsetLeft;

    if (this.state.dragging) {
      this.setState({
        sliderPos: leftOffset / this.bar.current.clientWidth * 100
      }, () => {
        let maxRightBound = 100 - this.slider.current.clientWidth / this.bar.current.clientWidth * 100;
        console.log(maxRightBound)

        if (this.state.sliderPos > maxRightBound) {
          this.setState({
            sliderPos: maxRightBound
          });
        }
        if (this.state.sliderPos < 0) {
          this.setState({
            sliderPos: 0
          });
        }
        //this.props.onDraggedRight(this.state.sliderPos);
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

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', (evt) => this.handleMouseMove(evt));
    document.body.removeEventListener('mouseup', (evt) => this.handleMouseUp(evt));
  }

	render() {
		return (
      <section className="video-controls">
        <div ref={this.bar} className="progress-bar">
          <div style={{ position: "relative"}}>
            <div style={{ position: "absolute", left: `${this.state.sliderPos}%` }} onMouseDown={(evt) => this.handleDragging(evt)}>
              <div ref={this.slider} style={{ width: '7px', height: '14px', backgroundColor: 'gray' }}></div>
            </div>
          </div>
        </div>
        <div className="play-button"></div>
        <div className="video-time">0:00</div>
        <div className="controls-inbetween"></div>
			</section>
		);
	}
}

VideoControls.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number
};