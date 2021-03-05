// Create a component <MinimumLength length={ 30 }> that contains an <input>. The user should see a warning, "Too short!", unless they have entered at least length characters.

import { Component } from "react";

class MinimumLength extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }

    render() {
        let { value } = this.state;
        let { length } = this.props;

        return (
            <div className="form-group">
                <h4>Minimum Length</h4>
                <input 
                    value={ this.state.value } 
                    onChange={ this.handleChange }></input>
                <p className="form-text text-muted">
                    { value.length < length ? "Too short!" : "" }
                </p>
            </div>
        );
    }
}

export default MinimumLength;