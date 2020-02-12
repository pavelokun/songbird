import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import './Player.css'

// export default function Player(props) {
  
//   return (
//   // <audio controls src={props.src}></audio>
//   <AudioPlayer
//     ref={c => {player = c}}
//     toplay={props.toplay ? player.audio.pause() : null}
//     autoPlayAfterSrcChange={false}
//     src={props.src}    
//     // other props here
//   />
//   )
// }

class Player extends React.Component {

  handlePlayer = () => {
    if (this.props.toplay) {
      this.player.audio.pause()
    }    
  }

  render() {
    return (
      // <audio controls src={props.src}></audio>
      <AudioPlayer
        ref={c => {this.player = c}}
        toplay={this.handlePlayer()}
        autoPlayAfterSrcChange={false}
        src={this.props.src}    
        // other props here
      />
    )
  }
  
}

export default Player
