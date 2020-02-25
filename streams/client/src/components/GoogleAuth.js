import React from 'react';

class GoogleAuth extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            signedIn: null
        }
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '10256387937-131gjapg7l0l9e6nasrla0tnlv9fbtg7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ signedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    }

    onAuthChange = () => {
        this.setState({ signedIn: this.auth.isSignedIn.get() });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.signedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        }else if(this.state.signedIn === null){
            return;
        }else{
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In 
                </button>
            )
        }
    }

    render(){
       return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;