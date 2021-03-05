// Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden.

import { Component } from "react";
import { Button } from "react-bootstrap";

class HideMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { clicked } = this.state;
        this.setState({ clicked: true });
    }

    render() {
        let { children } = this.props;
        let { clicked } = this.state;

        return (
            <div className="form-group">
                <h4>Hide Me</h4>
                <Button variant="primary" onClick={ this.handleClick }>Click here</Button>
                <p className="form-text text-muted">
                    { !clicked ? children : "" }
                </p>
            </div>
        );
    }
}

export default HideMe;