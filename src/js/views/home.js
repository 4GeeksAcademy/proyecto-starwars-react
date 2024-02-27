import React, { useContext, useEffect } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => { actions.getPeople() }, [])
	console.log(store.people);

	useEffect(() => { actions.getPlanets() }, [])
	console.log(store.planets);

	useEffect(() => { actions.getStarships() }, [])
	console.log(store.starships);

	return (
		<div className="container overflow-scroll">
        <div className="Card-people">
          {store.people.map((item, index) => (
            <div className="card-group" key={index}>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">handsome</p>
                  <p className="card-text">
                    <small className="text-muted">blond electric hair</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Card-planets">
          {store.planets.map((item, index) => (
            <div className="card-group" key={index}>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">handsome</p>
                  <p className="card-text">
                    <small className="text-muted">blond electric hair</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Card-startships">
          {store.starships.map((item, index) => (
            <div className="card-group" key={index}>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">handsome</p>
                  <p className="card-text">
                    <small className="text-muted">blond electric hair</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };









