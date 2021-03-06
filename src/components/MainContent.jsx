import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import Banner from './Banner';
import bannerImg from '../img/banner.jpg';
import PageNotFound from './PageNotFound';
import IndexLoaded from './IndexLoaded';
import MainCatalog from './MainCatalog';
import ItemCardContainer from './ItemCardContainer';
import Cart from './Cart';
import ThanksForOrder from './ThanksForOrder';

function MainContent() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner image={bannerImg} imgAlt="К весне готовы" bannerHeader="К весне готовы!" />
          <Switch>
            <Route path="/" exact component={IndexLoaded} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/catalog/:itemID" exact component={ItemCardContainer} />
            <Route path="/catalog" render={() => <MainCatalog search />} />
            <Route path="/cart" component={Cart} />
            <Route path="/success" component={ThanksForOrder} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
