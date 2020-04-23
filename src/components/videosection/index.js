import React from 'react';
import YouTube from 'react-youtube';
//317777769 163791611
const VideoSection = props => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };
  // function _onReady(event) {
  //     event.target.pauseVideo();
  // }
  const { videoId } = props;

  return (
    <YouTube
      videoId={videoId}
      className="iframe-wrapper"
      opts={opts}
      //onReady={_onReady}
    />
  );
};

export default VideoSection;
