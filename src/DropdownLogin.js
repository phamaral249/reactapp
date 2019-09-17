import React from 'react';
import {Dropdown, Form, Button} from 'react-bootstrap';

export class DropdownLogin extends React.Component{
  render() {
    return (
        <Dropdown alignRight>
          <Dropdown.Toggle variant="outline-info">
            Login
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown">
            <div className="dropdown"style={{ padding:10}}>
                <p style={{ fontSize: "25px", margin: "10px 100px"}}>Login</p>
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