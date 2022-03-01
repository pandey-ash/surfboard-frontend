import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around" style={{ marginTop: 280 }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }
}

export default Spinner;
