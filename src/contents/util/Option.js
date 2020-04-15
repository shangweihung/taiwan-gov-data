import React, { Component } from "react";

class Option extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select: this.props.defaultSelect
        }
        this.selectClick = this.selectClick.bind(this);
    }

    selectClick(item) {
        this.setState(state=> ({
            select: item
        }));
        this.props.onOptionChange(item);
    }

    render() {
        let optionList = [];
        for (let i=0; i<this.props.optionList.length; i++){
            optionList.push(this.props.optionList[i].locationName);
        }

        const display = [];
        optionList.forEach((item, i) => {
            if (item === this.state.select){
                display.push(
                    <li key={i} className="option selected" onClick={() => this.selectClick(item)}>
                        {item}
                    </li>
                );
            } else {
                display.push(
                    <li key={i} className="option" onClick={() => this.selectClick(item)}>
                        {item}
                    </li>
                );
            }
        });


        return (
            <ul className ={
                this.props.isShow ? "select-option show-select-option" : "select-option"
            }>
                {display}
            </ul>

        );
    }

}

export default Option;