import React from "react";

class UseEffectSecond extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `title ${this.state.title}`;
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      console.log("updating ");
      document.title = `title ${this.state.title}`;
    }
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button type="button" onClick={() => this.setState({ title: this.state.title + 1 })}>
          {this.state.title}
        </button>
      </>
    );
  }
}

export default UseEffectSecond;
