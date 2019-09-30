import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css"
import fontawesome from "font-awesome/css/font-awesome.css";


class RepositoryCard extends React.Component {
    render(){
        return (
            <div className="container-fluid">  
                <div className="card">
                    <div className="card-header font-weight-bold">
                        {this.props.repositoryFullName}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p className="card-text">
                                <span className="font-weight-bold">Programming Language: </span> 
                                <span className="badge badge-primary font-weight-light">{this.props.programmingLanguage}</span>
                            </p>
                            <p className="card-text">
                                <span className="font-weight-bold">Repository description:</span> <br/>
                                <i className="font-weight-light">{this.props.repositoryDescription}</i>
                            </p>
                            <p className="card-text">
                                <span className="font-weight-bold">Starts: </span>
                                <span className="badge badge-info">{this.props.startsNumber} </span>
                            </p>
                            <p className="card-text">
                               <span className="font-weight-bold">Open Issues: </span>
                               <span className="font-weight-bold badge badge-warning">{this.props.openIssues} </span>
                            </p>
                            <p className="card-text">
                                <span>
                                    <a className="stretched-link" href={this.props.repositoryLink}>
                                        <i className="font-weight-light">Go to repository</i>
                                    </a>
                                </span>
                                <span>
                                    <a className="stretched-link" href={this.props.contributorsPage}>
                                        <i className="font-weight-light">Top contributors</i>
                                    </a>
                                </span>
                                
                            </p>
                        </blockquote>
                    </div>
                </div>   
            </div>
        )
    }
}

export default RepositoryCard;