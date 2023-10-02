'use client';

import ReactPlayer from 'react-player';
import React from 'react';
import VideoControls from '@/components/Video/VideoControls.jsx';

export default class VideoLesson extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasWindow: false,
		};
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			this.setState({ hasWindow: true });
		}
	}

  handleVideoProgress(seconds) {
    console.log(seconds)
  }

	render() {
		return (
			<section className="lesson-wrapper">
				<div className="lesson-sidebar">Sidebar placeholder</div>
				<div className="player-wrapper">
					{this.state.hasWindow && (
            <div className="react-player-wrapper">
              <ReactPlayer
                className="react-player"
                url="/videos/testVideoLesson.mp4"
                controls={false}
                onProgress={(progress) => this.handleVideoProgress(progress.playedSeconds)}
              />
              <VideoControls></VideoControls>
            </div>
					)}
					<div className="video-questions">questions</div>
					<div className="quiz-wrapper">quiz</div>
				</div>
			</section>
		);
	}
}
