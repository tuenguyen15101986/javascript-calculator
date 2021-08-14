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
        <button id="decimal" value="." onClick={props.handleDecimal}>
          .
        </button>
        <button id="equals" value="=" onClick={props.handleEqual}>
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
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }
  clearDisplay = () => {
    this.setState((state) => {
      return { formula: "", output: 0 };
    });
  };
  handleZero = (event) => {
    if (/^[^0]/.test(this.state.formula)) {
      this.setState((state) => {
        return {
          formula: (this.state.formula += event.target.value),
          output: this.state.formula,
        };
      });
    }
  };
  handleNumber = (event) => {
    this.setState((state) => {
      return {
        formula: (this.state.formula += event.target.value),
        output: this.state.formula,
      };
    });
  };
  handleDecimal = (event) => {
    /* If the current formula already contains math operator, find the last number
    in the formula and checks if it already contains a decimal. If not, allow to add
    decimal to the number */
    if (/[-+*/]/.test(this.state.formula)) {
      const currentNumber = this.state.formula.match(/(?<=[-+*/]).+/)[0];
      if (!currentNumber.includes(".")) {
        this.setState((state) => {
          return {
            formula: (this.state.formula += event.target.value),
            output: this.state.formula,
          };
        });
      }
    } else {
      if (!this.state.formula.includes(".")) {
        this.setState((state) => {
          return {
            formula: (this.state.formula += event.target.value),
            output: this.state.formula,
          };
        });
      }
    }
  };
  handleOperator = (event) => {
    this.setState((state) => {
      return {
        formula: (this.state.formula += event.target.value),
        output: this.state.formula,
      };
    });
  };
  handleEqual = (event) => {
    this.setState((state) => {
      return {
        formula: this.state.formula + "=" + eval(this.state.formula),
        output: eval(this.state.formula),
        formula: eval(this.state.formula),
      };
    });
  };
  render() {
    return (
      <div id="app">
        <div id="app-title">My calculator</div>
        <div id="display-screen">
          <div id="formula">{this.state.formula}</div>
          <div id="display">{this.state.output}</div>
        </div>
        <Keyboard
          clearDisplay={this.clearDisplay}
          handleZero={this.handleZero}
          handleNumber={this.handleNumber}
          handleDecimal={this.handleDecimal}
          handleOperator={this.handleOperator}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
