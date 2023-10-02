'use client';

import ReactPlayer from 'react-player';
import React from 'react';
import VideoControls from '@/components/Video/VideoControls.jsx';

export default class VideoLesson extends React.Component {
	constructor(props) {
		super(props);
    
    this.player = React.createRef();
    this.controls = React.createRef();

		this.state = {
			hasWindow: false,
      playing: false,
		};
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			this.setState({ hasWindow: true });
		}
	}

  handleVideoProgress(percentage) {
    this.controls.current.setPercentage(percentage);
  }

	render() {
		return (
			<section className="lesson-wrapper">
				<div className="lesson-sidebar">Sidebar placeholder</div>
				<div className="player-wrapper">
					{this.state.hasWindow && (
            <div className="react-player-wrapper">
              <ReactPlayer
                ref={this.player}
                className="react-player"
                url="/videos/testVideoLesson.mp4"
                controls={false}
                onProgress={(progress) => this.handleVideoProgress(progress.played * 100)}
                progressInterval={10}
                playing={this.state.playing}
              />
              <VideoControls
                ref={this.controls}
                onVideoPlay={() => {
                  this.setState({ playing: true });
                }}
                onVideoPause={() => {
                  this.setState({ playing: false });
                }}
                onDragged={(percentage) => {
                  this.player.current.seekTo(percentage, "fraction");
                }}
              />
            </div>
					)}
					<div className="video-questions">questions</div>
					<div className="quiz-wrapper">quiz</div>
				</div>
			</section>
		);
	}
}
