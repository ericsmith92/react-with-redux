import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColorContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderColour(value){
        return value === 'red' ? 'negative' : 'primary';
    }

    render(){
        return(
            <ColorContext.Consumer>
                {color => {
                    return (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {value => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                    )
                }}
            </ColorContext.Consumer>
        ) 
    }
}

export default Button;