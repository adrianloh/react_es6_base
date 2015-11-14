import ReactDOM from 'react-dom';
import React from 'react';
import Dummy from './dummy';

class App extends React.Component {

	constructor() {
		super();
		this.default_message = "Search";
		this.state = {
			message: this.default_message
		}
	}

	setSubMessage(e) {
		var msg = e.target.value;
		msg = msg.length === 0 ? this.default_message : msg;
		this.setState({message: msg})
	}

	resetMessage() {
		this.setState({message: this.default_message})
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.setSubMessage.bind(this)} />
				<Sub message={this.state.message} resetMessage={this.resetMessage.bind(this)} />
				<Dummy />
			</div>
		);
	}

}

class Sub extends React.Component {

	constructor() {
		super();
		this.color = "rgb(255,0,0)";
	}

	render() {
		return(
			<div>
				<h1 style={{'color':`${this.color}`}}>{this.props.message}</h1>
				<button onClick={this.props.resetMessage}>Reset</button>
			</div>
		);
	}

}

ReactDOM.render(<App />, document.getElementById("target"));