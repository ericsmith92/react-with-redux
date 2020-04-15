import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    //links our component to the context object
    static contextType = LanguageContext;

    render(){
        //access data inside context object with this.context
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return <button className="ui button primary">{text}</button>
    }
}

export default Button;