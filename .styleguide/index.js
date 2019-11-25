import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { version, repository, description } from '../package.json';

import Page from './components/Page';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { importAllImages } from './utils';

// Styleguide styles
import './styles.css';
// Code hightlight
import './highlight.css';
// Compoenents styles
import '../css/styles.css';
// Import all images so webpack can process them
importAllImages();

// FIXME:
// Should be an optional import because it is dynamically generated page
// When fixed, remove it from git
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
    <Router>
      <Header version={version} repo={repository} description={description} />
      <Sidebar parentPages={parent}>{restFolders}</Sidebar>
      <Switch>{routes}</Switch>
    </Router>
  );
}

ReactDOM.render(<Styleguide pagesByFolder={pages} />, document.getElementById('root'));
