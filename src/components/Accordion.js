import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Accordion extends Component {
    render() {
        return (
            <div class="accordion-item" key={key}>
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    { this.props.topic } <Link to={ this.props.url }>{this.props.linkText}</Link>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    { this.props.description }
                </div>
                </div>
            </div>
        );
    }
}

export default Accordion;
