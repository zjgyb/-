import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem } from "antd-mobile";

class Input extends Component {
    render() {
        const { input, ico } = this.props.input;
        return(
            <InputItem
                {...input}
            >
                {/* <div className={styles.userIco}/> */}
                <i className={ ico } />
            </InputItem>
        )
    }
}

Input.prototype = {
    input: PropTypes.array.isRequired,
}

export default Input;