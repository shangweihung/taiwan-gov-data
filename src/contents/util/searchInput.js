import React, { Component } from "react";


class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeHolder: this.props.placeHolder
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }


    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <input type="text"
                   id="search"
                   placeholder={this.state.placeHolder}
                   onChange={this.handleFilterTextChange} />
        );
    }

}

export default SearchInput;