import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props) {
        super(props);
        //this is the only time we do direct assignment to this.state
        this.state = { 
            lat: null,
            errorMessage: ''
        };

        navigator.geolocation.getCurrentPosition(
            position => {
                //we called setState(), so our app should instantly rerender
                this.setState( { lat: position.coords.latitude } )
            },
            err => {
                this.setState( { errorMessage: err.message } )
            }
        );
      }
    
    render(){
        /*
        return(
            this.state.errorMessage === '' ? <div>Latitude: {this.state.lat}</div> : <div>Error: {this.state.errorMessage}</div>
        );
        */
       if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
       }else if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
       }else{
            return <div>Loading...</div>
       }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)