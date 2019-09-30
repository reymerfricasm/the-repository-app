import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import fontawesome from "font-awesome/css/font-awesome.css";
import RepositoryCard from "../components/RepositoryCard";

class Search extends React.Component {
    render() {
        return (
            <div className="container">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search a repository" aria-label="Repository" aria-describedby="basic-addon1"/>
                    <button className="btn btn-success" type="button" >
                       Search
                    </button>
                </div>
                <RepositoryCard
                    programmingLanguage="javascritp, firebase, git"
                    repositoryDescription=""
                />
            </div>
        )
    }
}

export default Search;  