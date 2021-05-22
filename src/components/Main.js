import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, 
         useRouteMatch, useParams, NavLink, Redirect } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Routes from '../routes/Routes';
import About from './about/About';
import Login from './login/Login';
import Landing from './landing/Landing';

function PrivateRoute({ children, ...rest }) {
    console.log(children, rest)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                false ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
  }

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
        console.log('========== PROPS: ', props);
    }

    checkAuthentication = () => {
        return false;
    }

    componentWillMount() {
        console.log('========== WILL MOUNT PROPS: ', this.props);
        this.state.isAuthenticated = this.checkAuthentication();
        // if (!this.state.isAuthenticated) {
        //     this.props.history.push('/login')
        // }
        // console.log('---------- THIS IS EXECUTED?')
    }

    // render() {
    //     let { isAuthenticated } = this.state;
    //     console.log('---------- IS AUTHEN: ', isAuthenticated);
    //     return (
    //         <div>
    //             {isAuthenticated ? <Header /> : ''}
    //             <Routes isAuthenticated={isAuthenticated}/>
    //             {isAuthenticated ? <Footer /> : ''}
    //         </div>  
    //     )
    // }
    render() {
        return (
            <Router>
                {/* START HEADER BLOCK */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink class="navbar-brand" to="/"><i class="fas fa-gem"></i></NavLink>
                    <button class="navbar-toggler" type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                {/* END HEADER BLOCK */}
                <Switch>
                    <PrivateRoute path='/about'>
                        <About />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
                {/* START FOOTER BLOCK */}
                <div className="footer">
                    <h1>THIS IS THE Footer PAGE</h1>
                </div>
                {/* END FOOTER BLOCK */}
            </Router>
        )
    }
}

export default Main;