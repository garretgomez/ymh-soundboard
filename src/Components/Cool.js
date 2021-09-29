import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Club from '../Audio/cool guy club.mp3';
import Riff from '../Audio/cool guy riff.mp3';
import Women from '../Audio/womenarestupid.mp3';
import Unprompted from '../Audio/unprompted.mp3';
import Water from '../Audio/sparklingwater.mp3';
import Benadryl from '../Audio/1012benadryl.mp3';
import Horny from '../Audio/horny2hours.mp3';
import God from '../Audio/asking god for.mp3';
import Lady from '../Audio/go away lady.mp3';
import Polite from '../Audio/ivebeenpolite.mp3';
import Nookie from '../Audio/cool-nookie.mp3'
import Makeyou from '../Audio/illmakeyou.mp3';
import Daddy from '../Audio/make daddy cum.mp3';
import Action from '../Audio/lookin for some action.mp3';
import Telescope from '../Audio/cool guy-ITurnIntoATelescope.mp3';
import Right from '../Audio/cool-rightnow.mp3';
import Eighteen from '../Audio/cool-eighteenbig.mp3';




const audioClips = [
  {sound: Club, label: "Cool guy club"},
  {sound: Riff, label: "Cool guy riff"},
  {sound: Women, label:"Women are stupid"},
  {sound: Unprompted, label: "Unprompted"},
  {sound: Water, label: "Sparkling water"},
  {sound: Benadryl, label: "Take 10 to 12 Benadryl"},
  {sound: Horny, label: "Horny for 2 hours"},
  {sound: God, label: "Asking God for"},
  {sound: Lady, label: "Go away lady"},
  {sound: Polite, label: "I've been polite"},
  {sound: Nookie, label: "I want some nookie"},
  {sound: Makeyou, label: "I'll make you cum"},
  {sound: Daddy, label: "Make daddy cum"},
  {sound: Action, label: "Lookin for some action"},
  {sound: Telescope, label: "I turn into a telescope"},
  {sound: Right, label: "Right now right now"},
  {sound: Eighteen, label: "Eighteen and big tits"},

]

class Cool extends Component {
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
    <div className="Cool">
      <h2>Cool Guys</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Cool;