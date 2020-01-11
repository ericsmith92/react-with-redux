import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
 
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount(){
        //do some initial data loading for our component
        //so this is a great place to make our call to geolocation
        //componentDidMount() is called ONCE, and we need to get our users location ONCE
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

    componentDidUpdate(){
        //this is called everytime our component is updated
        //this is more suited for data updates that occur multiple times
        //maybe we want to make a network request everytime our user clicks button
        console.log('My component was just updated, it rerendered');
    }

    //it is best practice to not have multiple returns inside the render() function
    //so, if this is the case we instead farm out to another function

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
       }else if(!this.state.errorMessage && this.state.lat){
           //here, we are taking the state of one component & passing as a prop to another
            return <SeasonDisplay lat={this.state.lat} />
       }else{
            return <Spinner  msg='Please Allow Geolocation'/>
       }
    }


    //we must define render for a component!
    render(){
        return this.renderContent();
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)