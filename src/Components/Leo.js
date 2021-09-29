import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Ok from '../Audio/leo-ok you.mp3';
import Stingy from '..//Audio/leo-dont be stingy.mp3'
import Bet from '../Audio/leo-you bet im coming.mp3';
import Hole from '../Audio/leo-thats my hole.mp3';
import Spits from '../Audio/leo-whereitspits.mp3';
import Feel from '../Audio/leo-I can feel it.mp3';
import Swallow from '../Audio/leo-I have no prob swallowing.mp3';
import Need from '../Audio/leo-I need right now.mp3';
import Quick from '../Audio/leo-its gonna be quick.mp3';
import Normal from '../Audio/leo-its normal size.mp3';
import Hard from '../Audio/leo-itsnotgonnagethard.mp3';
import See from '../Audio/leo-let me see.mp3';
import Massage from '../Audio/leo-massage your little.mp3';  
import Hickey from '../Audio/leo-put a hickey.mp3';  
import Suck from '../Audio/leo-suck it dry.mp3';  
import Sweat from '../Audio/leo-sweatin.mp3';  
import Good from '../Audio/leo-thats gonna be good.mp3';  
import Mouth from '../Audio/leo-you got that mouth.mp3';  
import Like from '../Audio/leo-show me that.mp3';
import Gone from '../Audio/leo-after im gone.mp3'

const audioClips = [
  {sound: Ok, label: "Ok you cum"},
  {sound: Stingy, label: "Don't be stingy"},
  {sound: Bet, label: "You bet I'm coming up in May"},
  {sound: Hole, label:"Thats my hole"},
  {sound: Spits, label: "Thats where it spits"},
  {sound: Feel, label: "I can feel it"},
  {sound: Swallow, label: "I have no problem swallowing"},
  {sound: Need, label: "I need it right now"},
  {sound: Quick, label: "Its gonna be quick"},
  {sound: Normal, label: "Its normal size"},
  {sound: Hard, label: "Its not gonna get hard"},
  {sound: See, label: "Let me see"},
  {sound: Massage, label: "Massage your little hole"},
  {sound: Hickey, label: "Put a hickey"},
  {sound: Suck, label: "Suck it dry"},
  {sound: Sweat, label: "Sweatin"},
  {sound: Good, label: "Thats gonna be good"},
  {sound: Mouth, label: "You got that beautiful mouth"},
  {sound: Like, label: "Show me that you like me"},
  {sound: Gone, label: "Aftet I'm gone"}
]

class Leo extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return(
        <button key={index} onClick = {() => this.SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  } 

  render() {
    Howler.volume(1.0)
    return (
    <div className="Leo">
      <h2>Leo "Ed Asner"</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Leo;