import React, { useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { PeopleComp } from "./peoplecomp";
import { PlanetsComp } from "./planetscomp";
import { StarshipsComp } from "./starshipscomp";


export const Home = () => {

	return (
		<div className="base container-fluid bg-dark">
			<h2 className="text-danger ms-4">Characters</h2>
			<PeopleComp />
			<h2 className="text-danger ms-4">Planets</h2>
			<PlanetsComp/>
			<h2 className="text-danger ms-4">Starships</h2>
			<StarshipsComp/>
		</div>
	);
};
