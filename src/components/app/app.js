import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";

import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import ErrorBoundry from "../error-boundry";

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from "../pages";

import StarshipDetails from "../sw-components/starship-details";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
        isLoggedIn: false,
      };
    });
  };

  toggleRandomPlanet = () => {
    //this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
    //другой способ:
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <BrowserRouter>
              <div className="stardb-app">
                <Header onServiceChange={this.onServiceChange} />
                {planet}

                <ToggleRandomPlanet
                  toggleRandomPlanet={this.toggleRandomPlanet}
                />
                <Routes>
                  <Route index element={<h2>Welcome to StarDB</h2>} />
                  <Route path="/people" element={<PeoplePage />} />
                  <Route path="/people/:itemId" element={<PeoplePage />} />
                  <Route path="/planets" element={<PlanetsPage />} />
                  <Route path="/starships" element={<StarshipsPage />} />
                  <Route
                    path="/starships/:itemId"
                    element={<StarshipDetails />}
                  />
                  <Route
                    path="/login"
                    element={
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    }
                  />
                  <Route
                    path="/secret"
                    element={<SecretPage isLoggedIn={isLoggedIn} />}
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                  {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
                </Routes>
              </div>
            </BrowserRouter>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}

function ToggleRandomPlanet({ toggleRandomPlanet }) {
  return (
    <button
      className="toggle-planet btn btn-warning btn-lg"
      onClick={toggleRandomPlanet}
    >
      Toggle Random Planet
    </button>
  );
}
