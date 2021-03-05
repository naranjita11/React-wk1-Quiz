// Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.

import { Component } from "react";
import { Button } from "react-bootstrap";

class CountBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { number } = this.state;
        let { step } = this.props;
        this.setState({ number: number + +step });
    }

    render() {
        let { number } = this.state;
        let { step } = this.props;

        return (
            <div className="form-group">
                <h4>Count By</h4>
                <Button onClick={ this.handleClick }>Add { step }</Button>
                <p className="form-text text-muted">
                    { number }
                </p>
            </div>
        );
    }
}

export default CountBy;