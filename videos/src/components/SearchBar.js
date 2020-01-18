import React from 'react';

class SearchBar extends React.Component{

    state = { term: '' }

    onInputChange = e => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e =>{
        e.preventDefault();

        //TODO: Make sure we call callback from parent component
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            name="search" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;