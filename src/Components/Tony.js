import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Deadass from '../Audio/deadass.mp3';
import Woo from '../Audio/wooooh.mp3';
import Weup from '../Audio/we up outta here.mp3';
import Uvers from '../Audio/take your uvers.mp3';
import Ladies from '../Audio/ladies man.mp3';
import Dui from '../Audio/dui baby.mp3';
import Bad from '../Audio/dont do it its bad.mp3';
import Community from '../Audio/community service.mp3';
import Young from '../Audio/young buck.mp3';
import Most from '../Audio/most gorgeous.mp3';


const audioClips = [
  {sound: Deadass, label: "Deadass"},
  {sound: Woo, label: "Wooooo"},
  {sound: Weup, label:"We up outta here"},
  {sound: Uvers, label: "Take your uvers"},
  {sound: Ladies, label: "Ladies man"},
  {sound: Dui, label: "DUI baby"},
  {sound: Bad, label: "Don't do it its bad"},
  {sound: Community, label: "Community service"},
  {sound: Young, label: "Young buck"},
  {sound: Most, label: "Most gorgeous"},
]

class Tony extends Component {
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
    <div className="Tony">
      <h2>Tony Johns</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Tony;