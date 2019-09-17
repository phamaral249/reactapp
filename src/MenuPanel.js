import React from 'react';
import {Dropdown, Form, Button} from 'react-bootstrap';

export class DropdownWithInput extends React.Component{
  render() {
    return (
        <Dropdown >
          <Dropdown.Toggle >
            Login
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown">
            <div className="dropdown">
                <p style={{ fontSize: "25px"}}>Login</p>
                <Form.Control type="text" placeholder="Usuário"/>
                <Dropdown.Item divider/>
                <Form.Control type="password" placeholder="Senha"/>
                <Dropdown.Item divider/>
                <Button >Sign in</Button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
    );
  }

};