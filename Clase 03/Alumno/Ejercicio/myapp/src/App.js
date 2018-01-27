import React, { Component } from 'react';
import logo from './logo.svg';
import {Title, SubTitle, Headline} from './Typography';
import {OrderedList, List, ListItem} from './List'
import {Button, CheckedButton, HoverButton, CounterButton} from './Button'
import './App.css';

class App extends Component {
  render() {
    return ( <div className={"App"} style={{ background: "#DDD" }}>
      <Header>
       <Button>Alto Boton amigo</Button>
       <CheckedButton>Chekiamo el boton</CheckedButton>
       <CounterButton>Counter</CounterButton>
       <HoverButton>Hover</HoverButton>
      </Header>
      <Body />
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


//Dumb Component -> componentes que siempre hacen lo mismo, y no hacen falta extenderlos de Component (mucho consumo de recursos) 





// class Title extends Component {
//   render() {
//     return( 
//       <h1>{this.props.children}</h1>
//     )
//   }
// }

class Body extends Component { 
  render () {
    return ( <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    )
  }
}