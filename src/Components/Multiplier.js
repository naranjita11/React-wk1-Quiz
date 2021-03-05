// Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.

import { Component } from "react";

class Multiplier extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    multiply() {
        let { x } = this.props;
        let { y } = this.props;

        return x * y;
    }

    render() {

        return (
            <div className="form-group">
                <h4>Multiplier</h4>
                <p className="form-text text-muted">
                    { this.multiply() }
                </p>
            </div>
        );
    }
}

export default Multiplier;