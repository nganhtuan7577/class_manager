import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Routes from '../routes/Routes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
        console.log('========== PROPS: ', props);
    }

    checkAuthentication = () => {
        return true;
    }

    componentWillMount() {
        console.log('========== WILL MOUNT PROPS: ', this.props);
        this.state.isAuthenticated = this.checkAuthentication();
        // if (!this.state.isAuthenticated) {
        //     this.props.history.push('/login')
        // }
        // console.log('---------- THIS IS EXECUTED?')
    }

    render() {
        let { isAuthenticated } = this.state;
        console.log('---------- IS AUTHEN: ', isAuthenticated);
        return (
            <div>
                {isAuthenticated ? <Header /> : ''}
                <Routes isAuthenticated={isAuthenticated}/>
                {isAuthenticated ? <Footer /> : ''}
            </div>  
        )
    }
}

export default Main;