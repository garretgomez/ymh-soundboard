import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Strokes from '../Audio/4strokes.mp3';
import Brothers from '../Audio/brothersd.mp3';
import Sensitive from '../Audio/so sensitive.mp3';
import Neurothapy from '../Audio/no neurothapy.mp3';
import Lube from '../Audio/no lube.mp3';
import Smoke from '../Audio/liketoseemesmoke.mp3';
import Gay from '../Audio/gayorstraight.mp3';
import Harder from '../Audio/four-harder and harder.mp3';
import Big from '../Audio/four-how big.mp3';
import More from '../Audio/four-more than ever.mp3';
import Brother from '../Audio/four-my brother.mp3';
import Shoot from '../Audio/four-shoot.mp3';
import Themore from '../Audio/four-the more I smoke.mp3';
import Most from '../Audio/four-the most in his life.mp3';



const audioClips = [
  {sound: Strokes, label: "4 strokes"},
  {sound: Brothers, label: "His dick"},
  {sound: Sensitive, label:"So sensitive"},
  {sound: Neurothapy, label: "No neurothapy"},
  {sound: Lube, label: "Don't need lube"},
  {sound: Smoke, label: "If you like to see me smoke"},
  {sound: Gay, label: "If your gay or straight"},
  {sound: Harder, label: "Harder and harder"},
  {sound: Big, label: "How big his dick was"},
  {sound: More, label: "More cum than ever in my life"},
  {sound: Brother, label: "My brother didn't believe me"},
  {sound: Shoot, label: "Shoot enormous amount"},
  {sound: Themore, label: "The more I smoke the harder"},
  {sound: Most, label: "The most cum in his life"}
]

class Four extends Component {
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
    <div className="Four">
      <h2>Four Strokes</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Four;