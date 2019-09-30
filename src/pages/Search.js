import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import fontawesome from "font-awesome/css/font-awesome.css";
import RepositoryCard from "../components/RepositoryCard";

class Search extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search a repository" aria-label="Repository" aria-describedby="basic-addon1"/>
                    <button className="btn btn-success" type="button" >
                       Search
                    </button>
                </div>
                <RepositoryCard
                    repositoryFullName="the-search-repository"
                    programmingLanguage="javascritp, firebase, git"
                    repositoryDescription="perform repository searches with github developer api v3."
                    startsNumber="20"
                    openIssues="4"
                    repositoryLink="https://github.com/reymerfricasm/the-repository-app"
                    contributorsPage="https://github.com/reymerfricasm/the-repository-app/graphs/contributors"
                />
                <RepositoryCard
                    repositoryFullName="practica-final-sem"
                    programmingLanguage="html"
                    repositoryDescription="Practica Final Seminario de Tecnologia Aplicada"
                    startsNumber="10"
                    openIssues="1"
                    repositoryLink="https://github.com/reymerfricasm/practica-final-sem"
                    contributorsPage="https://github.com/reymerfricasm/practica-final-sem/graphs/contributors"
                />
                <RepositoryCard
                    repositoryFullName="awesome-android-libraries"
                    programmingLanguage="xml, java, html"
                    repositoryDescription="This is an alphabetical list of libraries for Android development, the majority being actively maintained."
                    startsNumber="0"
                    openIssues="10"
                    repositoryLink="https://github.com/reymerfricasm/awesome-android-libraries"
                    contributorsPage="https://github.com/reymerfricasm/awesome-android-libraries/graphs/contributors"
                />
                <RepositoryCard
                    repositoryFullName="reymerfricasm.github.io"
                    programmingLanguage="html, css"
                    repositoryDescription="perform repository searches with github developer api v3."
                    startsNumber="4"
                    openIssues="0"
                    repositoryLink="https://github.com/reymerfricasm/reymerfricasm.github.io"
                    contributorsPage="https://github.com/reymerfricasm/reymerfricasm.github.io/graphs/contributors"
                />
                <RepositoryCard
                    repositoryFullName="M101N-MongoDB-for-.NET-Developer"
                    programmingLanguage="c#, html, css, asp.net core"
                    repositoryDescription="Creating a blog with MongoDB Driver for .NET Developer in ASP.NET MVC. MongoDB Univerisity"
                    startsNumber="2"
                    openIssues="1"
                    repositoryLink="https://github.com/reymerfricasm/M101N-MongoDB-for-.NET-Developer"
                    contributorsPage="https://github.com/reymerfricasm/M101N-MongoDB-for-.NET-Developer/graphs/contributors"
                />
            </div>
        )
    }
}

export default Search;  