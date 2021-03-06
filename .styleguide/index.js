import React from 'react';
import ReactDOM from 'react-dom';

import axe from 'react-axe';
axe(React, ReactDOM);

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { version, repository, description } from '../package.json';

import Page from './components/Page';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { importAllImages } from './utils';

// Generated tokens
import '../assets/css/tokens.css';
// Components styles
import '../assets/css/styles.css';
// Styleguide styles
import './styles.css';
// Code hightlight
import './highlight.css';
// Import all images so webpack can process them
importAllImages();

import pages from './pages.json';

function Styleguide({ pagesByFolder }) {
  const renderRoute = page => (
    <Route exact path={page.path} key={page.path}>
      <Page page={page} />
    </Route>
  );

  const { parent, ...restFolders } = pagesByFolder;

  const routes = Object.keys(pagesByFolder).map(folder => {
    return pagesByFolder[folder].map(page => renderRoute(page));
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header version={version} repo={repository} description={description} />
      <Sidebar parentPages={parent}>{restFolders}</Sidebar>
      <Switch>{routes}</Switch>
    </Router>
  );
}

ReactDOM.render(<Styleguide pagesByFolder={pages} />, document.getElementById('root'));
