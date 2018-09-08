import React, { Component } from 'react'
import YoutubeEmbedVideo from "youtube-embed-video";

const playerStyle = {
        width: '90vw', /* 90% of viewport vidth */
        height: '50.625vw', /* ratio = 9/16 * 90 = 50.625 */
        background: 'pink',
        maxHeight: '90vh',
        maxWidth: '160vh', /* 16/9 * 90 = 160 */
        margin: 'auto',
        position: 'absolute',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0'
}

export default class Youtube extends Component {

  render() {
    return (
      <div position='absolute' align='center' top='0' bottom='0'>
        <YoutubeEmbedVideo 
        videoId='MMUBEkaZVa8' 
        autoplay={true} 
        suggestions={false} 
        showInfo={false} 
        width='100%'
        height='720px'
        />
      </div>
    )
  }
}
