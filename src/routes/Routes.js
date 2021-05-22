import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import About from '../components/about/About';
import Landing from '../components/landing/Landing';
import Login from '../components/login/Login';

let authenticate = () => {
    return true;
}

let redirectIfGuest = (Component) => {
    // FIXME: Update logic to redirect
    return Component
    // return authenticate() ? Component : Login;
}

let redirectIfAuthenticated = (Component) => {
    // FIXME: Update logic to redirect
    return Component
    // return authenticate() ? Landing : Component;
}

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    componentWillMount() {
        console.log('========== ROUTES WILL MOUNT PROPS: ', this.props);
        // this.state.isAuthenticated = this.checkAuthentication();
        // if (!this.state.isAuthenticated) {
        //     this.props.history.push('/login')
        // }
        console.log('---------- THIS IS EXECUTED?')
    }

    componentDidMount() {
        console.log('========== ROUTES DID MOUNT PROPS: ', this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('----------- ROUTES : ', nextProps);
    }

    render() {
        return (
            <Router>
                <Route exact path='/' component={redirectIfGuest(Landing)} />
                <Route path='/login' component={redirectIfAuthenticated(Login)} />
                <Route path='/home' component={redirectIfGuest(Landing)}/>
                <Route path='/about' component={redirectIfGuest(About)}/>
            </Router>
        )
    }
}

export default Routes;
