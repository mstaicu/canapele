import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import retrieveComponent from '../utils/async';

import ContinutCameraZi from '../components/ContinutCameraZi/ContinutCameraZi';

/**
  Async load of splitted chunks
*/
var ContinutCameraNoapte = retrieveComponent(function() {
  return import('../components/ContinutCameraNoapte/ContinutCameraNoapte');
});

var ContinutContact = retrieveComponent(function() {
  return import('../components/ContinutContact/ContinutContact');
});

var PinsPageZi = retrieveComponent(function() {
  return import('../components/PinsPageZi/PinsPageZi');
});

var PinsPageNoapte = retrieveComponent(function() {
  return import('../components/PinsPageNoapte/PinsPageNoapte');
});

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={ContinutCameraZi} />
      <Route exact path="/noapte" component={ContinutCameraNoapte} />
      <Route exact path="/contact" component={ContinutContact} />
      <Route exact path="/camera-zi-compozitii" component={PinsPageZi} />
      <Route
        exact
        path="/camera-noapte-compozitii"
        component={PinsPageNoapte}
      />
    </Switch>
  );
}
