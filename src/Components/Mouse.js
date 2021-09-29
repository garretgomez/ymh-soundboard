import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Delta from '../Audio/mousepad-delta white mousepad.mp3';
import Jew from '../Audio/mousepad-Iam a j.mp3';
import Herp from '../Audio/mousepad-her pussy is yummy.mp3';
import Yummy from '../Audio/mousepad-her yummy.mp3';
import Play from '../Audio/mousepad-im gonna be playing with it.mp3';
import Jerk from '../Audio/mousepad-jerk off while scrolling.mp3';
import Mmm from '../Audio/mousepad-mmmmm.mp3';
import Tongue from '../Audio/mousepad-my tongue is kosher.mp3';
import Me from '../Audio/mousepad-oh fuck me.mp3';
import Yeah from '../Audio/mousepad-oh fuck yeah.mp3';
import Kosher from '../Audio/mouspad-my cum is kosher.mp3';





const audioClips = [
  {sound: Delta, label: "Delta White mousepad"},
  {sound: Jew, label: "I am a Jew"},
  {sound: Herp, label:"Her pussy is yummy"},
  {sound: Yummy, label: "Her yummy pussy"},
  {sound: Play, label: "I'm gonna be playing with it"},
  {sound: Jerk, label: "Jerk off while scrolling"},
  {sound: Mmm, label: "Hmmmm"},
  {sound: Tongue, label: "My tongue is kosher"},
  {sound: Me, label: "Oh fuck me"},
  {sound: Yeah, label: "Oh fuck yeah"},
  {sound: Kosher, label: "My cum is kosher"}
]

class Mouse extends Component {
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
    <div className="Mouse">
      <h2>Mousepad Guy</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Mouse;