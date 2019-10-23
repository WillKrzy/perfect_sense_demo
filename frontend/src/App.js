import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFound';
import NewArticle from './pages/NewArticle';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/article-list" component={ArticlesList}/>
          <Route path="/article/:name" component={ArticlePage}/>
          <Route path="/new-article" component={NewArticle}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
