import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Story from '../Audio/story time.mp3';
import Seven from '../Audio/7inchwong.mp3';
import Chicka from '../Audio/chickawong.mp3';
import Gay from '../Audio/tok-im not gay.mp3';
import Public from '../Audio/tok-this public announcement.mp3';
import Call from '../Audio/tok-call me out.mp3';
import Wreck from '../Audio/tok-dont work no wreck.mp3';
import Worry from '../Audio/tok-do you ever worry.mp3';
import True from '../Audio/tok-well its true.mp3';
import Lunch from '../Audio/tok-waiting for my lunch.mp3';
import Beautiful from '../Audio/tok-that shit beautiful.mp3';
import Racist from '../Audio/tok-im not a racist.mp3';
import Nword from '../Audio/tok-just beacause I say the n word.mp3';
import Princess from '../Audio/tok-hey princess.mp3';
import Marcel from '../Audio/tok-captain marcel.mp3';




const audioClips = [
  {sound: Story, label: "Story time"},
  {sound: Seven, label: "7 inch wong"},
  {sound: Chicka, label:"Chickawawong"},
  {sound: Gay, label:"I'm not gay"},
  {sound: Public, label: "This public announcement"},
  {sound: Call, label: "Call me out"},
  {sound: Wreck, label: "Don't work no wreck"},
  {sound: Worry, label: "Do you ever worry"},
  {sound: True, label: "Well its true"},
  {sound: Lunch, label: "Waiting for my lunch"},
  {sound: Beautiful, label: "That shit beautiful"},
  {sound: Racist, label: "I'm not a racist"},
  {sound: Nword, label: "Just beacause I say the n word"},
  {sound: Princess, label: "Hey princess"},
  {sound: Marcel, label: "Captain Marcel"}
]

class Toks extends Component {
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
    <div className="Toks">
      <h2>Toks</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Toks;