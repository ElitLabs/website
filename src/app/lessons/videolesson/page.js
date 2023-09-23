'use client';

import ReactPlayer from 'react-player';
import React from 'react';

export default class VideoLesson extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hasWindow: false,
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({hasWindow: true});
    }
  }

  render() {
    return (
      <section className='lesson-wrapper'>
        <div className='lesson-sidebar'>
          Sidebar placeholder
        </div>
        <div className='player-wrapper' >
          {this.state.hasWindow &&
            <ReactPlayer
              className='react-player'
              url='/videos/testVideoLesson.mp4'
              controls={true}
            />
          }
          <div className='video-questions'>
            questions
          </div>
          <div className='quiz-wrapper'>
            quiz
          </div>
        </div>
      </section>
    );
  }
  
}
