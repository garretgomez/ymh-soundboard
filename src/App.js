import './App.css';
import Board from './Components/Board'
import Card from './Components/Card'
import Leo from './Components/Leo'
import Tony from './Components/Tony'
import Four from './Components/Four'
import Cool from './Components/Cool'
import Toks from './Components/Toks'
import Mouse from './Components/Mouse'
import Bert from './Components/Bert'
import Charles from './Components/Charles'
import Horrible from './Components/Horrible'
import Random from './Components/Random'

import React, {Component} from 'react';
import Try from './Audio/rpc- try it out.mp3';
import Twenty from './Audio/rpc-2395.mp3';
import Wagner from './Audio/rpc-wagner.mp3';
import Home from './Audio/rpc-home here now.mp3';
import Deal from './Audio/rpc-heresthedeal.mp3';
import Hardcore from './Audio/rpc- hardcore guys.mp3';
import Black from './Audio/rpc-black guys.mp3';
import Check from './Audio/rpc-check it out.mp3';
import Food from './Audio/rpc-free food.mp3';
import Rent from './Audio/rpc-free rent.mp3';
import Friend from './Audio/rpc-friend can move.mp3';
import Jail from './Audio/rpc-men from jail.mp3';
import Movein from './Audio/rpc-move in.mp3';
import Piss from './Audio/rpc-piss on me.mp3';
import Trash from './Audio/rpc-white trash.mp3';
import Getoff from './Audio/rpc get off.mp3';
import  Gonna from './Audio/rpc im gonna.mp3';
import Coney from './Audio/rpc-coney island.mp3';
import Fansonly from './Audio/rpc-fansonly.mp3';
import Lair from './Audio/rpc-luciferslair.mp3';
import Wild from './Audio/rpc-mildwild.mp3';
import Robert from './Audio/rpc-robert.mp3';
import Hotb from './Audio/rpc-hotblacklatino.mp3';
import Coach from './Audio/rpc-coach.mp3';

import Banana from './Audio/banana split.mp3';
import Ayyi from './Audio/ayaya.mp3';
import Eatya from './Audio/let me eat ya.mp3'
import Three from './Audio/three days.mp3';
import Cook from './Audio/cook for you.mp3';
import Cry from './Audio/make you cry.mp3';
import Kush from './Audio/kush kush.mp3';
import Nunu from './Audio/nunu.mp3';
import Booty from './Audio/get that booty.mp3';
import Feet from './Audio/feet too.mp3';
import Pecans from './Audio/pecans.mp3';
import Mesleep from './Audio/put me to sleep.mp3';
import Smellit from './Audio/smell it.mp3';
import Tub from './Audio/unk shine-jump in the tub.mp3';
import MyTongue from './Audio/unk shine-let me put my tongue.mp3';
import UseBooty from './Audio/unk shine-were gonna use your booty.mp3';
import Cornflakes from './Audio/unk shine-your booty looks.mp3';
import Apple from './Audio/you got that apple.mp3';
import BigFlat from './Audio/unk shine big or flat booty.mp3';
import HeyC from './Audio/unk shine-hey chrstina.mp3';
import {Howl, Howler} from 'howler';


const audioClips = [
  {sound: Try, label: "Try it out"},
  {sound: Twenty, label: "2395"},
  {sound: Wagner, label: "Address"},
  {sound: Home, label: "Home here now"},
  {sound: Deal, label: "Heres the deal man"},
  {sound: Hardcore, label: "Hardcore guys"},
  {sound: Black, label: "Black guys"},
  {sound: Check, label: "Check it out"},
  {sound: Food, label: "Free food"},
  {sound: Rent, label: "Free rent, lease and a key"},
  {sound: Friend, label: "Your friend can move in"},
  {sound: Jail, label: "Men from jail, homeless, thug"},
  {sound: Movein, label: "Move in"},
  {sound: Piss, label: "Fuck me, piss on me"},
  {sound: Trash, label: "Hot white trash"},
  {sound: Getoff, label: "Get offff"},
  {sound: Gonna, label: "I'm gonna cum"},
  {sound: Coney, label: "Coney island"},
  {sound: Fansonly, label: "Fansonly"},
  {sound: Lair, label: "Lucifers lair"},
  {sound: Wild, label: "From mild to wild to kink"},
  {sound: Robert, label: "Robert Paul Champagne"},
  {sound: Hotb, label: "Are you a hot black or latino guy"},
  {sound: Coach, label: "Coach cum dump"}
]

const unkClips = [
  {sound: Banana, label: "Banana split"},
  {sound: Ayyi, label: "Ay yi yi"}, 
  {sound: Eatya, label: "Let me eat cha"},
  {sound: Three, label: "Sleep for 3 days"},
  {sound: Cook, label: "Cook for you, clean your house"},
  {sound: Cry, label: "Make you cry"},
  {sound: Kush, label: "Gush gush"},
  {sound: Nunu, label: "Nu nu"},
  {sound: Booty, label: "Coming to get that booty"},
  {sound: Feet, label: "Feet too"},
  {sound: Pecans, label: "Some pecans, some ice cream"},
  {sound: Mesleep, label: "Put me to sleep"},
  {sound: Smellit, label: "Smell it"},
  {sound: Tub, label: "Jump in the tub"},
  {sound: MyTongue, label: "Let me put my tongue"},
  {sound: UseBooty, label: "Were gonna use your booty"},
  {sound: Cornflakes, label: "Your booty looks like some cornflakes"},
  {sound: Apple, label: "You got that apple"},
  {sound: BigFlat, label: "Big booty or flat booty"},
  {sound: HeyC, label: "Hey Christina"}
]



class App extends Component {
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

  RenderButton = () => {
    return unkClips.map((soundObj, index) => {
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
    <div className="App">
      <h1>YMH Soundboard</h1>
      <h2>RPC</h2>
      {this.RenderButtonAndSound( )}
      <h2>Uncle Shine</h2>
      {this.RenderButton( )}
      <Board />
      <Card />
      <Leo />
      <Tony />
      <Four />
      <Cool />
      <Toks />
      <Mouse />
      <Bert />
      <Charles />
      <Horrible />
      <Random />
    </div>
  )}
  
  
  
  
}

export default App;
