import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log('========== WILL MOUNT PROPS: ', this.props);
        // this.state.isAuthenticated = this.checkAuthentication();
        // if (!this.state.isAuthenticated) {
        //     this.props.history.push('/login')
        // }
        console.log('---------- THIS IS EXECUTED?')
    }

    componentDidMount() {
        console.log('========== DID MOUNT PROPS: ', this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('----------- LOGIN : ', nextProps);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit() {
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login;
