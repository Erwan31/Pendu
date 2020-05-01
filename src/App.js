import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Letter from './letter'
import Clavier from './clavier'
import Restart from './restart'

const DICO = [
  "KAYAK", 
  "PENDU",
  "JEUX",
  "EVIDENT",
  "CHIEN",
  "CHAT",
  "FETE",
  "SOLEIL",
  "CHAPEAU",
  "BASKET"
];

const ALPHA = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W",
  "X", "Y", "Z"
];

class App extends React.Component {

  state = {
    mot :  this.getWord(),//this.generateCards(),
    discovered: [],
  }

  getWord() {
    console.log(DICO[Math.floor(Math.random()*DICO.length)])
    return DICO[Math.floor(Math.random()*DICO.length)].split('');
  }

  getFeedBackLetter( input ){
    const {mot, discovered} = this.state;

    for( let index = 0; index < mot.length; index++){
      if(mot[index] === input && !discovered.includes(index)){
        console.log('FeedBack lettre modifié');
        discovered.push(index);
        // score++
      }
    }
     
    this.setState({discovered});

  }

  handleKeyClick = keyLetter => {

    //console.log('Click on', keyLetter);
    this.getFeedBackLetter( keyLetter );
    
  }

  handleRestartClick = () =>{

    console.log('Restart Click');

    let {mot, discovered} = this.state;
    mot = this.getWord();
    discovered = [];

    this.setState({mot, discovered});
  }

  render() {
    let {mot, discovered} = this.state;
    let won = discovered.length === mot.length;

    return (
      <div className="pendu">
        <span className="letters">
          {mot.map((letter, index, feedback)=>
            <Letter letter={letter} key={index} index={index} feedback={discovered.includes(index) ? 'discovered' : 'hidden'} />)
          }
        </span>
        <span className = "keyboard">
          {ALPHA.map(( keyLetter ) =>
            <Clavier key={keyLetter} onClick={this.handleKeyClick} keyLetter={keyLetter} index={ALPHA.indexOf(keyLetter)} />
            )
          }
        </span>
        {won && <button onClick={this.handleRestartClick}>Click to Restart</button>}
      </div>
    );
  }
}

export default App;
