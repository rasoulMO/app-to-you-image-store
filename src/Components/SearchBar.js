import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    //here we use an arrow function to solve 'THIS' problem !!
    onFormSubmit = (event) => {
        //we will always use this when we will take of the form default!!
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input
                            type="text"
                            value={this.state.term}
                            //here we get what ever users type!!
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>    
                </form>
            </div>
        );
    };
    
};

export default SearchBar;
