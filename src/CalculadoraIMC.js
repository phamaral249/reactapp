import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

export class CalculadoraIMC extends React.Component{
    constructor(){
        super();
        this.state = {  Weight : 0 ,
                        Height : 0 ,
                        IMC : ""
                    };
    }
    
    handleWeightChange = (e) => {
        this.setState({Weight : e.target.value});
    }

    handleHeightChange = (e) => {
        this.setState({Height : e.target.value});
    }

    calcular = () => {
        let imc = this.state.Weight / (this.state.Height/100 * this.state.Height/100);

        if(imc <= 18.5){                     this.setState({IMC :  "Abaixo do Peso"});
        }else if(imc > 18.5 && imc < 24.9){  this.setState({IMC : "Peso Normal"});
        }else if(imc > 24.9 && imc < 29.9){  this.setState({IMC :  "Acima do Peso"});
        }else if(imc > 29.9 && imc < 34.9){  this.setState({IMC :  "Obesidade Nível I"});
        }else if(imc > 34.9 && imc < 39.9){  this.setState({IMC :  "Obesidade Nível II"});
        }else if(imc > 39.9){                this.setState({IMC :  "Obesidade Nível III"});
        }
        
    }

    render(){
        return(
            <div>
                <h1>Calculadora de IMC</h1>
                <Form onSubmit={this.calcular}>
                    
                    <Form.Group>
                        <Col sm={3} className="container center-div">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control type="number" placeholder="Insira seu peso" onChange={this.handleWeightChange}/>
                            <Form.Label>Altura</Form.Label>
                            <Form.Control type="number" placeholder="Insira sua altura" onChange={this.handleHeightChange}/>
                        </Col>
                    </Form.Group>
                    <Button variant="info" onClick={this.calcular} >Calcular</Button>
                </Form>
                <p>{this.state.IMC}</p>
            </div>
        );
    }
}