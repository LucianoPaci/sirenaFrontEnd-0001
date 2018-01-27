/**
 * REACT JS 
 * Distintas maneras de crear componentes.
 * ----
 * Manera 1 
 * Como es realmente
 * => React.createElement(tag, {props}, children)
 *
 * Manera 2
 * Como se hace facilmente y mas entendible 
 * => return (<tag {props}>children</tag>)    --> sugar syntax ==>hermoso
 */

class AnimatedImage extends Component {
  render () {

    return React.createElement('img', {src : logo, className: 'App-logo', alt: 'logo'}, null)
    // return <img src={logo} className="App-logo" alt="logo" />
  }
}
// export default AnimatedImage;

class Header extends Component {
  render () {
    return (
      <header className="App-header">
      <AnimatedImage />
      <Title/>
      </header>
    )
  }
}

// export default Header;


class Title extends Component {
  render () {
    return (
      <h1 className="App-title">{this.props.children}</h1>
    )

    // return React.createElement('h1', {className: 'App-title'}, 'Welcome to React')
  }
}
// export default Title;

class Paragraph extends Component {
  render () {
    /* Forma 1*/
    // return (
    //   <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    // )

    /* Forma 2*/
    // return React.createElement('p', {className: 'App-intro'}, [
    //   'To get started, edit ',
    //   React.createElement('code', {}, 'src/App.js'),
    //   ' and save to reload'

    // ])
    /* Forma 3*/
    return React.createElement('p', {className: 'App-intro'}, [
      'To get started, edit ',
      <code>src/App.js</code>,
      ' and save to reload'
    ])
  }
}

// export default Paragraph;

// =========

//Dumb Component (Stateless Components) -> componentes que siempre hacen lo mismo, y no hacen falta extenderlos de Component (mucho consumo de recursos) 

function Title (props) { 
  return (<h1>{props.children}</h1>)
}

// class Title extends Component {
//   render() {
//     return( 
//       <h1>{this.props.children}</h1>
//     )
//   }
// }
