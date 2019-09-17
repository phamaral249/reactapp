import React from 'react';

export class ColorChanger extends React.Component{

    changeBackgroundColor = (e) => {
        document.getElementById('myApp').style.backgroundColor = e.target.value;
    }

    render(){
        return(
            <div id="target">
                <h1>ColorChanger</h1>
                <input type="Color" name="color" value="#282c34" onChange={this.changeBackgroundColor}></input>
            </div>
        );

    }
}