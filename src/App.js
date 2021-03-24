import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchImage from './Components/SearchImage'




const config = {
  apiKey: "AIzaSyBbBmSjfFiwSI9MU5-Q5jAFLLXXiVbwziE",
  authDomain: "app-to-you-image-store.firebaseapp.com"
};
firebase.initializeApp(config);

export default class App extends Component {
    state = { isSignedIn: false }
    state = { images: [] };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    
    
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            // console.log("user", user)
        })
    }

    render() {
        let clickedClass = "clicked";
        const body = document.body;
        const lightTheme = "light";
        const darkTheme = "dark";
        let theme;
    
      if (localStorage) {
        theme = localStorage.getItem("theme");
      }
    
      if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
      } else {
        body.classList.add(lightTheme);
      }
    
        const switchTheme = (e) => {
            if (theme === darkTheme) {
                body.classList.replace(darkTheme, lightTheme);
                e.target.classList.remove(clickedClass);
                localStorage.setItem("theme", "light");
                theme = lightTheme;
            } else {
                body.classList.replace(lightTheme, darkTheme);
                e.target.classList.add(clickedClass);
                localStorage.setItem("theme", "dark");
                theme = darkTheme;
            }
        };
    
        return (
            <Router>
                {!this.state.isSignedIn ? (
                    <Route>
                        <div className="login_page">
                            <div>
                                <img
                                    className="header__icon"
                                    src="https://www.apptoyou.it/wp-content/themes/dt-the7-child/frontpage-2020/images/a2y-logo-pos.png"
                                    alt=""
                                />
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                            </div>
                        </div>
                    </Route>
                ) : (
                    <Switch>
                        <Route path='/'>
                            <div>
                                <div className="ui pointing secondary menu">
                                    <a className="active item">Home</a>
                                    <div className="right menu">
                                        
                                        <div className="dark_bt">
                                            <button
                                                className={theme === "dark" ? clickedClass : ""}
                                                id="darkMode"
                                                onClick={(e) => switchTheme(e)}
                                            ></button>
                                        </div>
                                        <a onClick={() => firebase.auth().signOut()} className="item"
                                        >Logout</a>
                                    </div>
                                </div>
                                <div className="ui segment">
                                    <img src={firebase.auth().currentUser.photoURL} alt="" />
                                    <h2>
                                        Welcome {firebase.auth().currentUser.displayName}
                                    </h2>
                                </div>
                            </div>
                            <SearchImage />
                            <div>
                            </div>
                        </Route>
                    </Switch>
                )}
            </Router>
        );
    }
};







































































// import React, { Component } from "react";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import './App.css';
// import HomePage from './HomePage';

// className App extends Component {
//     state = {
//         isLoggedIn: false,
//         userID: "",
//         name: "",
//         email: "",
//         picture: ""
//     };

//     componentDidMount() {
//         const state = sessionStorage.getItem('myRes');
//         if (state) {
//             this.setState(JSON.parse(state));
//         }
//     }
//     componentDidUpdate() {
//         const json = JSON.stringify(this.state);
//         sessionStorage.setItem('myRes', json)
        
//     }

   
//     onLogout = () => {
//         window.FB.getLoginStatus(function(response) {
//             window.FB.logout(function (response) {
//             //  sessionStorage.removeItem('myRes')
//               sessionStorage.clear()
//               console.log("Logged Out!");
//                 window.location = "/";
//             });
//           });
//         // window.FB.logout(() => {
//         //     document.location.reload();
//         //     sessionStorage.removeItem('myRes', {})
//         // });
//         // // localStorage.clear();
//     }

            

//                 responseFacebook = response => {
//                     this.setState({
//                         isLoggedIn: true,
//                         userID: response.userID,
//                         name: response.name,
//                         email: response.email,
//                         picture: response.picture.data.url
//                     });
//                 };

   
  
    
//                 render() {
//                     let fbContent;

//                     if (this.state.isLoggedIn) {
//                         fbContent = (
//                             <div>
//                                 <HomePage />
//                                 <div className="user_info">
//                                     <img src={this.state.picture} alt={this.state.name} />
//                                     <h2>Welcome {this.state.name}</h2>
//                                     Email: {this.state.email}
//                                     <div>
//                                         <button onClick={this.onLogout}>
//                                             Logout
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
            
//                         );
//                     } else {
//                         fbContent = (
//                             <div className="login_page">
//                                 <h1>Welcomwe to App to you Image Stor </h1>
//                                 <hr />
//                                 <div>
//                                     <FacebookLogin
//                                         cookie={true}
//                                         appId="291080755709156"
//                                         autoLoad={false}
//                                         fields="name,email,picture"
//                                         callback={this.responseFacebook}
//                                         render={renderProps => (
//                                             <button
//                                                 className="login_button"
//                                                 onClick={renderProps.onClick}>
//                                                 Log in with Facebook
//                                             </button>
//                                         )}
//                                     />
//                                 </div>
//                             </div>
//                         );
//                     }

//                     return (
//                         <div>{fbContent}</div>
//                     )
//                 }
//             }
//}