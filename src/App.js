// APP ID // 2642577286061285
import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './App.css';
import HomePage from './HomePage';

class App extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    componentDidMount() {
        const state = localStorage.getItem('myRes');
        if (state) {
            this.setState(JSON.parse(state));
        }
    }
    componentDidUpdate() {
        const json = JSON.stringify(this.state);
        localStorage.setItem('myRes', json)
    }

   
    onLogout = () => {
            window.FB.logout((responseFacebook) => {
               document.location.reload();
           });
          localStorage.removeItem('myRes');
        }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

   
  
    
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
        fbContent = (
            <div>
                <HomePage />
                <div className="user_info">
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                <div>
                    <button onClick={this.onLogout}>
                        Logout
                    </button>
                </div>
            </div>
            </div>
            
        );
    } else {
        fbContent = (
            <div className="login_page">
                <h1>Welcomwe to App to you Image Stor </h1>
                <hr/>
                <div>
                <FacebookLogin
                      cookie={true}
                      appId="291080755709156"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      render={renderProps => (
                          <button
                              className="login_button"
                              onClick={renderProps.onClick}>
                              Log in with Facebook
                          </button>
                      )}
            />
                </div>
            </div>
        );
    }

      return (
          <div>{fbContent}</div>
        ) 
  }
}

export default App;
