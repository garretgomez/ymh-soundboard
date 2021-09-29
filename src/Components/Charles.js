import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Hey from '../Audio/charles-its charles.mp3';
import Video from '../Audio/charles-video instead of text.mp3';
import Eight from '../Audio/charles-eigth.mp3';
import Kersher from '../Audio/bert-bert kersher.mp3';
import Krishna from '../Audio/bert-bert krishna.mp3';
import Bruce from '../Audio/bert-bruce kerisher.mp3';
import Krishenger from '../Audio/bert-bert krishenger.mp3';





const audioClips = [
  {sound: Hey, label: "Its Charles"},
  {sound: Video, label: "Do a video"},
  {sound: Eight, label: "8:00 8:15"},
  {sound: Kersher, label: "Bert Kersher"},
  {sound: Krishna, label: "Bert Krishna"},
  {sound: Bruce, label: "Bruce Kreischer"},
  {sound: Krishenger, label: "Bert Krishenger"},
]

class Charles extends Component {
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
    <div className="Charles">
      <h2>Charles</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Charles;