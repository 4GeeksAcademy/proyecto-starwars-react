import React, { useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { PeopleComp } from "./peoplecomp";
import { PlanetsComp } from "./planetscomp";
import { StarshipsComp } from "./starshipscomp";
import backgroundImage from "../../img/Universo.png";


export const Home = () => {
	return (
	  <div
		className="base container-fluid"
		style={{
		  backgroundImage: `url(${backgroundImage})`,
		  backgroundSize: 'cover',
		  backgroundRepeat: 'no-repeat',
		  backgroundPosition: 'center center',
		  minHeight: '100vh',
		  color: 'white'
		}}
	  >
		<h2 className="text-success ms-4">Characters</h2>
		<PeopleComp />
		<h2 className="text-primary ms-4">Planets</h2>
		<PlanetsComp />
		<h2 className="text-primary ms-4">Starships</h2>
		<StarshipsComp />
	  </div>
	);
  };
  
