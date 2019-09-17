import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { DropdownLogin } from './DropdownLogin';

export class MyNavBar extends React.Component{
    render(){
        return(
            <Navbar sticky="top" bg="dark" variant="dark" >
                <Navbar.Brand href="#home">My React App</Navbar.Brand>
                <Nav fill variant="pills">
                    <Nav.Item><Nav.Link href="#contador">Contador</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#imc">IMC</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#color">Color Changer</Nav.Link></Nav.Item>
                </Nav>
                
                <div className="ml-auto">
                    <DropdownLogin />
                </div>
            </Navbar>
        );
    }
}