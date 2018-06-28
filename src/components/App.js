import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/normalize.css';

const quotes = [
  [ ["The difference between the novice and the master is that the master has failed more times than the novice has tried. "], ["Koro Sensei"]], 
  [["We need each other to find our own inspiration. Sometimes it's not easy."], ["Kiki"]],
  [["Run until you can't run anymore, and then run again. Constant effort is life's greatest shortcut."], ["Genji Kamogawa"]],
  [["It may be hard right now, but you must silence those thoughts! Stop counting only those things that you have lost! What is gone, is gone. So ask yourself this, what is there that still remains to you?"], ["Jinbei"]],
  [["How can you move forward if you keep regretting the past?"],["Edward Elric"]],
  [["The circumstances of one's birth are irrelevant, but it's what you do with the gift of life that determines who you are."],["Mewtwo"]],
  [["If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!"],["Naruto Uzumaki"]]
  ]


  class Quote extends React.Component {
    constructor(props){
      super(props);
      this.newQuote = this.newQuote.bind(this);
      this.tweetQuote=this.tweetQuote.bind(this);
      this.state = {
        quote: '',
        author: ''
      }
    }
    
    newQuote(){
      let random = Math.floor((Math.random() * 6)+1);

      console.log("herroooo making changes fuck you");
      
      this.setState( ()=> {
        return {
          quote: quotes[random][0],
          author: quotes[random][1]
          //set state to quote and author
        }
      })
  
    }
    
    componentDidMount(){
      this.newQuote();
    }
    
    //as soon as component loads, it runs new Quote method

    tweetQuote(){
      // alert("fuck this tweet")
    console.log(this.state.quote, this.state.author)

    let tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quote} -${this.state.author}`
    

    window.open(tweetUrl)


    }
    
    render(){
      return (
        
        <div className="quote-component">
        
        <div className="quote-card">
          <div className="quote-text">
            <h1>"{this.state.quote}"</h1>
            <h3>-{this.state.author}</h3>
          </div>




          <div className="quote-button-container">
          
          
            <button className="quote-button" onClick={this.newQuote}>   Generate A Quote</button>
                {/* <button onClick={this.newQuote}>   Tweet</button> */}

            <button 
            className="quote-tweet quote-button" 
            onClick={this.tweetQuote} 
            > 
            Tweet</button>
          
          </div>
        </div>    
        
        
        <Header /> 


          </div>
      )
    }
  
  }



  class Header extends Component {
    render() {
      return (
        <div className="Header">


<header>
        <img className="lushlogo" src="https://image.ibb.co/d0pMS8/randomquote_logo.png" alt="lush white logo"/>
</header>
          {/*} <h3>Random Quote Generator</h3>
      <p>by Gloria Cho</p> */} 
    </div> 


      );
    }
  }





class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
        
      </div>
    );
  }
}

export default App;
