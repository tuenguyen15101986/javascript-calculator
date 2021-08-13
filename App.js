function Keyboard(props) {
  return (
    <div id="keyboard">
      <div className="button-row">
        <button id="clear" value="AC" onClick={props.clearDisplay}>
          AC
        </button>
        <button id="divide" value="/" onClick={props.handleOperator}>
          /
        </button>
      </div>
      <div className="button-row">
        <button id="seven" value="7" onClick={props.handleNumber}>
          7
        </button>
        <button id="eight" value="8" onClick={props.handleNumber}>
          8
        </button>
        <button id="nine" value="9" onClick={props.handleNumber}>
          9
        </button>
        <button id="multiply" value="*" onClick={props.handleOperator}>
          *
        </button>
      </div>
      <div className="button-row">
        <button id="four" value="4" onClick={props.handleNumber}>
          4
        </button>
        <button id="five" value="5" onClick={props.handleNumber}>
          5
        </button>
        <button id="six" value="6" onClick={props.handleNumber}>
          6
        </button>
        <button id="subtract" value="-" onClick={props.handleOperator}>
          -
        </button>
      </div>
      <div className="button-row">
        <button id="one" value="1" onClick={props.handleNumber}>
          1
        </button>
        <button id="two" value="2" onClick={props.handleNumber}>
          2
        </button>
        <button id="three" value="3" onClick={props.handleNumber}>
          3
        </button>
        <button id="add" value="+" onClick={props.handleOperator}>
          +
        </button>
      </div>
      <div className="button-row">
        <button id="zero" value="0" onClick={props.handleZero}>
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
    this.state = {
      formula: "",
      output: 0,
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }
  clearDisplay = () => {
    this.setState((state) => {
      return { formula: "", output: 0 };
    });
  };
  handleZero = (event) => {
    const eventValue = event.target.value;
    const currentFormula = this.state.formula;
    if (/^[^0]/.test(currentFormula)) {
      this.setState((state) => {
        return { formula: (this.state.formula += eventValue) };
      });
    }
  };
  handleNumber = (event) => {
    const eventValue = event.target.value;
    this.setState((state) => {
      return { formula: (this.state.formula += eventValue) };
    });
  };
  handleOperator = (event) => {
    const eventValue = event.target.value;
    this.setState((state) => {
      return { formula: (this.state.formula += eventValue) };
    });
  };
  render() {
    return (
      <div id="app">
        <div id="app-title">My calculator</div>
        <div id="display">
          <div id="formula">{this.state.formula}</div>
          <div id="result">{this.state.output}</div>
        </div>
        <Keyboard
          clearDisplay={this.clearDisplay}
          handleZero={this.handleZero}
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
