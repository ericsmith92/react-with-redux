import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{

    state = {
        language: 'english'
    }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render(){
        return(
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}>
                </LanguageSelector>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="primary">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }   
}

export default App;