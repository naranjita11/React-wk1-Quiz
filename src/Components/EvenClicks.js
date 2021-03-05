// Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

import { Component } from "react";
import { Button } from "react-bootstrap";

class EvenClicks extends Component {

    constructor() {
        super();

        this.state = {
            clickedEven: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { clickedEven } = this.state;
        this.setState({ clickedEven: !clickedEven});
    }

    render() {
        let { clickedEven } = this.state;

        return (
            <div className="form-group">
                <h4>EvenClicks</h4>
                <Button onClick={ this.handleClick }>Click here</Button>
                <p className="form-text text-muted">
                    { clickedEven ? "Even" : "Odd" }
                </p>
            </div>
        );
    }
}

export default EvenClicks;