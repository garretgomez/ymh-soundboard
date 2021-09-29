import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Ta from '../Audio/fed-Ta-Ta There.mp3';
import Chomo from '../Audio/fed-chomo.mp3';
import Proto1 from '../Audio/fed-didnt follow proto.mp3';
import Agent from '../Audio/fed-double agent.mp3';
import Featherin from '../Audio/fed-featherin it.mp3';
import Bud from '../Audio/fed-get going bud.mp3';
import Job from '../Audio/fed-how do you geta job.mp3';
import Camera from '../Audio/fed-camera through fence.mp3';
import Life from '../Audio/fed-just lost your life.mp3';
import Proto from '../Audio/fed-proto.mp3';
import America from '../Audio/fed-this is america.mp3';
import Fired from '../Audio/fed-your fired.mp3';

const audioClips = [
  {sound: Ta, label: "Ta ta there"},
  {sound: Chomo, label: "Chomo"},
  {sound: Proto1, label:"You didn't follow proto, you're done"},
  {sound: Agent, label: "Retired double agent"},
  {sound: Featherin, label: "Featherin it"},
  {sound: Bud, label: "Gotta get it going bud"},
  {sound: Job, label: "How do you get a job here"},
  {sound: Camera, label: "Touch my camera through the fence"},
  {sound: Life, label: "You just lost your life"},
  {sound: Proto, label: "You didn't follow proto"},
  {sound: America, label: "This is America"},
  {sound: Fired, label: "You're fired"}
]

class Board extends Component {
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
    <div className="Board">
      <h2>Fed Smoker</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Board;