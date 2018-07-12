import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {



  render() {
    return (
      <button className="square" 
      onClick={()=>this.props.onClick() }>
        {/* TODO */}

          { this.props.value}
        {/* This is how you do some commenting in JSX
          <!--<p> Hello this is some text </p>-->
*/}
      </button>
    );
  }

  // constructor(props){

  //   super(props);

  //   this.state = {

  //     value: null,
  //   };
  // }
  // function my_random_func(){
  //     console.log("i am a regular old javascript func");

  // }
}


class Board extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  handleClick(i)
  {

    console.log("call is being handled" + i);
      const squares = this.state.squares.slice(); //create a copy only
      squares[i] = 'X';

      //dataflow: send the data back up (i.e. pass a copy up, rather than just modify it directly)
      this.setState({squares: squares});

      //this is aprt of a bigger mutable vs immutable discussion
      //immutable allows easier state tracking and state-tracking
      


  }
  renderSquare(i) {
    return (<Square 
    value={this.state.squares[i]}
    onClick={()=>this.handleClick(i)}
     />);
    }
  



// \how to bind functions:?
  // random_func(){    console.log("random");
  // }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
