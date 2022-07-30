import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ModalImageProvider } from './contexts/modal-image-context/index.context';
import homePage from './pages/home/index';
import SearchPage from './pages/search/index.page';
import WatchPage from './pages/watch/index.page';

function App() {
  return (
    <ModalImageProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={homePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/watch' component={WatchPage} />
        </Switch>
      </BrowserRouter>
    </ModalImageProvider>
  );
}

export default App;
