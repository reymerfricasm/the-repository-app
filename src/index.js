import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RepositoryCard from "./components/RepositoryCard";
import Contributor from "./components/Contributor";
import Search from "./pages/Search";

ReactDOM.render(<Search />, document.getElementById('root'));

serviceWorker.unregister();
