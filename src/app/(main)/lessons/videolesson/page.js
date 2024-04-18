'use client';
import React from 'react';
import Err404 from '@/app/(main)/[...not-found]/page';

export default function VideoLesson() {
  return <Err404 />;
}
/*
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

	handleVideoProgress(progress) {
		this.controls.current.setProgress(progress);
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
								onProgress={(progress) => this.handleVideoProgress(progress)}
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
									this.player.current.seekTo(percentage, 'fraction');
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
*/