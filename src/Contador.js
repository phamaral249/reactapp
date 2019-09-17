import React from 'react';
import Button from 'react-bootstrap/Button';

export class Contador extends React.Component{
    constructor(){
        super();
        this.state = {contador : 0};
    }

    addOne = () => {
        this.setState({contador : this.state.contador +1});
    }

    minusOne = () => {
        this.setState({contador : this.state.contador -1});
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h1>{this.state.contador}</h1>
                <div>
                    <Button className="btn-space" onClick={this.addOne}>+</Button>
                    <Button onClick={this.minusOne}>-</Button>
                </div>
            </div>
        );
    }
}