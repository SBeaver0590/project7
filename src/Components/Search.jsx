import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => { //In this event target(capture) the user's input.
        const value = e.target.value;
        this.setState(prevState => ({ searchText: value }));
    }

    handleSubmit = e => {   //Handle the User's input and perform the search
        e.preventDefault();
        let query = this.query.value;
        this.props.onSearch(query);
        let path = `/performSearch/${query}`;
        e.currentTarget.reset();
        this.props.history.push(path);
        // this.props.onSearch(this.state.searchText, true);
        
    }

    render() {              // After the search is performed give me images in relation to User's input.
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit} >
                    {/* <label className="is-hidden" htmlFor="search">Search</label> */}
                    <input type="search" onChange={this.onSearchChange}
                        name="search"
                        placeholder="Search..." 
                        ref={(input) => this.query = input}
                        required
                        autoFocus
                        />
                    <button type="submit" id="submit" className="search-button">
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}


// export default performSearch;