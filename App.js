function Keyboard(props) {
  return (
    <div id="keyboard">
      <div className="button-row">
        <button id="clear" value="AC">
          AC
        </button>
        <button id="divide" value="/">
          /
        </button>
      </div>
      <div className="button-row">
        <button id="seven" value="7">
          7
        </button>
        <button id="eight" value="8">
          8
        </button>
        <button id="nine" value="9">
          9
        </button>
        <button id="multiply" value="*">
          *
        </button>
      </div>
      <div className="button-row">
        <button id="four" value="4">
          4
        </button>
        <button id="five" value="5">
          5
        </button>
        <button id="six" value="6">
          6
        </button>
        <button id="subtract" value="-">
          -
        </button>
      </div>
      <div className="button-row">
        <button id="one" value="1">
          1
        </button>
        <button id="two" value="2">
          2
        </button>
        <button id="three" value="3">
          3
        </button>
        <button id="add" value="+">
          +
        </button>
      </div>
      <div className="button-row">
        <button id="zero" value="0">
          0
        </button>
        <button id="decimal" value=".">
          .
        </button>
        <button id="equals" value="=">
          =
        </button>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="app">
        <div id="app-title">My calculator</div>
        <div id="display">
          <div id="formula">Enter numbers for calculation..</div>
          <div id="result">0</div>
        </div>
        <Keyboard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
