import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RepositoryCard from "./components/RepositoryCard";

ReactDOM.render(<RepositoryCard 
repositoryFullName="the-repository-app"
programmingLanguage="C#"
repositoryDescription="this a web app for seacrh in a github repositories database. powerfull tool to make deep search on github databases."
repositoryLink="https://github.com/reymerfricasm/prj-cursobasico-3"
startsNumber="10"
openIssues="1,299"
contributorsPage="https://github.com/reymerfricasm/prj-cursobasico-3/graphs/contributors"
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
