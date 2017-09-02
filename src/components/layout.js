import React from 'react'

import "./layout.css"
import NumberInput from "./number-input"
import DistanceFromNumber from "./distanceFromNumber"

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);        
        this.state = {
            guess: 0,
            label:'',
            secret: Math.floor(Math.random() * (100 - 1)),
        }
    }
    checkAnswer(guess){
        const test = Math.floor(Math.abs(guess - this.state.secret)) ;
        console.log(test)
        if (test === 0) {
            this.setState({ label: 'You win',secret: Math.floor(Math.random() * (100 - 1)) })            
        } else if (test < 5) {
            this.setState({ label: 'HOT!' })  
        } else if (test < 10) {
            this.setState({ label: 'Warm!' })
        } else if (test < 15) {
            this.setState({ label: 'Luke Warm' })
        } else if (test > 16) {
            this.setState({ label: 'Cold' })
        }
    }

    render() {
        return (
            <div>
                <NumberInput onCh={guess => {
                    this.checkAnswer(guess);
                    }} />
                <DistanceFromNumber val={this.state.label}  />
            </div>
        );
    }
}