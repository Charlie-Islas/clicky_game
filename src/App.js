import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import cats from "./cats.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CatCard from "./components/CatCard";

let instruction='Click on any feline to begin!';
let currentScore=0;
let topScore=0;

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let shuffledCats=shuffleArray(cats);

class App extends Component {

  state = {
    shuffledCats
  };

  clickedCat=id=>{
    console.log("id: "+id);
    console.log("clicked: "+shuffledCats[id-1].clicked)
    let selectedCat={};
    let index=0;
    for(var i=0;i<shuffledCats.length;i++){
      if(shuffledCats[i].id===id){
        selectedCat=shuffledCats[i];
        index=i;
        console.log("selected cat: "+selectedCat.clicked);
        console.log("shuffledCats: "+shuffledCats)
      }
    }
    if(!selectedCat.clicked){
      instruction='You guessed correctly!';
      //shuffledCats[(id-1)].clicked=true;
      shuffledCats[index].clicked=true;
      currentScore++;
      if(currentScore>=topScore){
      topScore=currentScore;}
      shuffledCats=shuffleArray(shuffledCats);
      this.setState(shuffledCats);
      if(currentScore===shuffledCats.length){
        alert("Congratulations! You have clicked on all cats! You win the game, raaawr!");
        for(var i=0;i<shuffledCats.length;i++){
          shuffledCats[i].clicked=false;
        }
        instruction='Click on any feline to start over!';
        currentScore=0;
      }
      
    }
    else{
      //endGame
      for(var i=0;i<shuffledCats.length;i++){
        shuffledCats[i].clicked=false;
      }
      instruction='You guessed incorrectly!';
      currentScore=0;
      shuffledCats=shuffleArray(shuffledCats);
      alert("You have lost! Be devoured by the Roman Lions!");
      instruction='Click on any feline to start over!';
      this.setState(shuffledCats);
    }
  };
  render() {
    return (
       <div>
       <Navbar
        instruction={instruction}
        currentScore={currentScore}
        topScore={topScore}
       ></Navbar>
       <Wrapper>
       <Banner>
       </Banner>
       {this.state.shuffledCats.map(cat => (
          <CatCard
           
            id={cat.id}
            key={cat.id}
            name={cat.name}
            image={cat.image}
            clicked={cat.clicked}
            clickedCat={this.clickedCat}
           
          />
        ))}

       </Wrapper>
       </div>
    
    );
  }
}

export default App;
