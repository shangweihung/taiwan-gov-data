import React, { Component } from "react";


class Message extends Component {
    render() {
        let message = this.props.message;

        return (
            <div className="message-model">
                {message}
            </div>
        )
    }
}

export default Message;