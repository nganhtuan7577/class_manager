import React, { Component } from 'react';

class Landing extends Component {
    constructor(props) {
        super(props);
    
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(destination) {
        console.log('------- THIS IS EXECUTED WITH: ', destination)
        this.props.history.push(destination);
        console.log('======= DES: ', destination);
    }

    render() {
        return (
            <div>
                <h1>THIS IS THE LANDING PAGE</h1>
                <div>
                    Redirect to: 
                    <button onClick={() => this.handleRedirect('/login')}>Login</button> 
                    <button onClick={() => this.handleRedirect('/about')}>About</button>
                </div>
            </div>
        )
    }
}

export default Landing;
