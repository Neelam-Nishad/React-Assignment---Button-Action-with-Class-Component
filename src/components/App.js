import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
	
	let temp = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

    render() {
    	return(
    		<div id="main">
			<button id="click" onClick={ () => {
						render(){
							<p id="para">{temp}</p>
						}	
			} }>click</button>
    		</div>
    	);
    }
}


export default App;

