import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Chrysler from '../Audio/bert-bert chrysler.mp3';
import Chrysler2 from '../Audio/bert-bert kaisler.mp3';
import Kaiser from '../Audio/bert-bert kaiser.mp3';
import Kersher from '../Audio/bert-bert kersher.mp3';
import Krishna from '../Audio/bert-bert krishna.mp3';
import Bruce from '../Audio/bert-bruce kerisher.mp3';
import Krishenger from '../Audio/bert-bert krishenger.mp3';





const audioClips = [
  {sound: Chrysler, label: "Bert Chrysler"},
  {sound: Chrysler2, label: "Bert Chrysler (Adriana)"},
  {sound: Kaiser, label:"Bert Kaiser"},
  {sound: Kersher, label: "Bert Kersher"},
  {sound: Krishna, label: "Bert Krishna"},
  {sound: Bruce, label: "Bruce Kreischer"},
  {sound: Krishenger, label: "Bert Krishenger"},
]

class Bert extends Component {
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
    <div className="Bert">
      <h2>Bert Kreischer</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Bert;