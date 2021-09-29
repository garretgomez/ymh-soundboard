
import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Different from '../Audio/king-different.mp3';
import What from '../Audio/king-what.mp3';
import Morning from '../Audio/king-good morning my queen.mp3';
import Hang from '../Audio/king-let them hang.mp3';
import Videos from '../Audio/king-lets make some videos.mp3';
import Boobs from '../Audio/king-very nice boobs.mp3';
import Coffee from '../Audio/king-coffee and breakfast.mp3';
import Haters from '../Audio/king-haters.mp3';
import Make from '../Audio/king-make some videos.mp3';
import Havefun from '../Audio/king-having fun with it.mp3';
import Hotshower from '../Audio/king-hot shower.mp3';
import Shower from '../Audio/king-see you in the shower.mp3';
import Wash from '../Audio/king-wash your body.mp3';
import Violated from '../Audio/king-I was violated.mp3';
import Kings from '../Audio/king-kings and queens.mp3';
import Queens from '../Audio/king-my queens above 18.mp3';
import Eyes from '../Audio/king-open them eyes up.mp3';
import Covers from '../Audio/king-pull them covers off.mp3';
import Kiss from '../Audio/king-kiss that ass.mp3';
import Myqueen from '../Audio/king-you are my queen.mp3';
import Work from '../Audio/king-you gotta go to work.mp3';
import When from '../Audio/king-when are you gonna let me.mp3';
import Shelaugh from '../Audio/king-shes gonna start laughing.mp3';

const audioClips = [
  {sound: Different, label: "Different"},
  {sound: What, label: "What"},
  {sound: Morning, label:"Good morning my queen"},
  {sound: Hang, label: "Let them boobs hang"},
  {sound: Videos, label: "Lets make some videos, I wanna laugh"},
  {sound: Make, label: "Come on make some videos"},
  {sound: Boobs, label: "Very nice boobs"},
  {sound: Haters, label: "Haters"},
  {sound: Coffee, label: "Coffee on breakfast on"},
  {sound: Havefun, label: "Having fun with it"},
  {sound: Hotshower, label: "Hot shower"},
  {sound: Shower, label: "See you in the shower"},
  {sound: Wash, label: "Wash that beautiful body"},
  {sound: Violated, label: "I was violated"},
  {sound: Kings, label: "Kings and queens above 18"},
  {sound: Queens, label: "My queens above 18"},
  {sound: Eyes, label: "Open them eyes up"},
  {sound: Covers, label: "Pull them covers off"},
  {sound: Kiss, label: "Kiss that beautiful ass"},
  {sound: Myqueen, label: "You are my queen"},
  {sound: Work, label: "You gotta go to work"},
  {sound: When, label:"When are you gonna let me take you out"},
  {sound: Shelaugh, label: "Shes gonna start laughing"}
]

class Card extends Component {
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
    <div className="Card">
      <h2>The King</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Card;