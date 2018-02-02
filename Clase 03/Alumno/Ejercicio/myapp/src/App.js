import React, { Component } from 'react';
import logo from './logo.svg';
import {Title, SubTitle, Headline} from './Typography';
import {OrderedList, List, ListItem} from './List';
import {Button, CheckedButton, HoverButton, CounterButton} from './Button';
import {Pokemon} from './Pokemon';
import './App.css';

class App extends Component {

  pokeList = {
    pokemons : [
    { 
      id: 'ab1',
      name: 'Pikachu',
      height: '40cm',
      weight: '10kg'
    },
    { 
      id: 'bc2',
      name: 'Charmander',
      height: '45cm',
      weight: '10kg'
    },
    { id: 'cd3',
      name: 'Squirtle',
      height: '40cm',
      weight: '15kg'
    },
    { 
      id: 'de4',
      name: 'Bulbasaur',
      height: '49cm',
      weight: '13kg'
    },
    { 
      id: 'qwe12',
      name: 'Togepi',
      height: '25cm',
      weight: '5kg'
    },
    { 
      id: 'arf3',
      name: 'Raticate',
      height: '80cm',
      weight: '25kg'
    },

    ]
  }
  render() {

    const pokemons = (
      <div>
        {this.pokeList.pokemons.map((pokemon,index) => {
          return <Pokemon name={pokemon.name}
          weight = {pokemon.weight}
          height = {pokemon.height}
          id = {pokemon.id} />
        }
      )
    }
      
      </div>
    );
    return ( <div className={"App"} style={{ background: "#DDD" }}>
      <Header>
       <Button>Alto Boton amigo</Button>
       <CheckedButton>Chekiamo el boton</CheckedButton>
       <CounterButton>Counter</CounterButton>
       <HoverButton>Hover</HoverButton>
      </Header>
      <Body>
        {pokemons}
      </Body>
    </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return <header className= "App-header">
    {this.props.children}
    </header>
  }
}

class AnimatedImage extends Component {
  render() {
    return (
      <img src = {this.props.src} className = 'App-logo' alt = 'logo' />
    )
  }
}
class Body extends Component { 
  render () {
    return (<div className = "bodyApp"> 
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
        </div>
       
    )
  }
}