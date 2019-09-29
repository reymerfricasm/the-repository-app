import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css"
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
                                <span className="font-weight-light">{this.props.programmingLanguage}</span>
                            </p>
                            <p className="card-text">
                                <span className="font-weight-bold">Repository description:</span> <br/>
                                <i className="font-weight-light">{this.props.repositoryDescription}</i>
                            </p>
                            <p className="card-text">
                                <span className="font-weight-bold">Starts: </span> {this.props.startsNumber}
                            </p>
                            <p className="card-text">
                               <span className="font-weight-bold">Open Issues: </span> {this.props.openIssues}
                            </p>
                            <p className="card-text">
                                <a className="stretched-link" href={this.props.repositoryLink}>
                                    <i classNam="font-weight-light">Go to repository</i>
                                </a> | 
                                <a className="stretched-link" href={this.props.contributorsPage}>
                                    <i classNam="font-weight-light">View contributors</i>
                                </a>
                            </p>
                        </blockquote>
                    </div>
                </div>   
            </div>
        )
    }
}

export default RepositoryCard;