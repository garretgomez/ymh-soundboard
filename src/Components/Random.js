import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Hardcore from '../Audio/hardcore fun.mp3';
import Completely from '../Audio/you are completely r worded.mp3';
import Wasps from '../Audio/watch for wasps.mp3';
import Rub from '../Audio/rub rub rub.mp3'
import Hey from '../Audio/hey hitler.mp3'
import Homeless from '../Audio/fuck me in my ass man.mp3';
import Ahole from '../Audio/asshole.mp3';






const audioClips = [
  {sound: Hardcore, label: "Hardcore fun"},
  {sound: Completely, label: "You are completely retarded"},
  {sound: Wasps, label: "Watch for wasps"},
  {sound: Rub, label: "Rub rub rub"},
  {sound: Hey, label: "Hey Hitler"},
  {sound: Homeless, label: "Fuck me in my ass man"},
  {sound: Ahole, label: "Assshole"}
 
]

class Random extends Component {
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
    <div className="Random">
      <h2>Random</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Random;