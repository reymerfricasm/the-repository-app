import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import fontawesome from "font-awesome/css/font-awesome.css";

class Contributor extends React.Component {
    render(){
        return (
            <div>
                <div class="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.avatar} alt="GitHub Avatar"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Contributor username</h5>
                                <p className="card-text">
                                    Number of contributions
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <a href={this.props.userLink}>
                                            View profile
                                        </a>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contributor;