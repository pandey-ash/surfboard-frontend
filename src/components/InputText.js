import React, { Component } from "react";

class InputText extends Component {
    render() {
        return(
            <input 
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
                className={this.props.className}
            />
        );
    }
}

export default InputText;
