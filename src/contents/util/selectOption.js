import React, { Component } from "react";
import Option from "./Option";

class SelectOption extends Component {
    constructor(props){
        super(props);
        this.state = {
            showOption:false,
            select: this.props.defaultSelect
        }
        this.selectBarClick = this.selectBarClick.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
    }


    selectBarClick() {
        this.setState(state => ({
            showOption: !state.showOption
        }));
    }

    onOptionChange(select){
        this.setState(state => ({
            select: select
        }));
        this.props.onSelectOptonChange(select);
    }

    render() {
        let select = this.state.select;

        return (
            <div className="select-bar" onClick={this.selectBarClick}>
               <p>{select}</p> <i className="fas fa-caret-down"></i>
                <Option
                    isShow={this.state.showOption}
                    optionList={this.props.optionDatas}
                    defaultSelected={select}
                    onOptionChange={this.onOptionChange} />
            </div>
        );
    }

}

export default SelectOption;