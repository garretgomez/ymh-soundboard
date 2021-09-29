import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import Garage from '../Audio/mechanicgarage.mp3';
import Bakura from '../Audio/horrible-bakura.mp3'
import Garden from '../Audio/horrible-lady hit by car.mp3';






const audioClips = [
  {sound: Garage, label: "Mechanic garage"},
  {sound: Bakura, label: "Bakura"},
  {sound: Garden, label: "Lady gardening hit by car"},
 
]

class Horrible extends Component {
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
    <div className="Horrible">
      <h2>Horrible or Hilarous</h2>
      {this.RenderButtonAndSound( )}
    </div>
  )}
}

export default Horrible;