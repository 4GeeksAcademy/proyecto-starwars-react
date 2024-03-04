import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	console.log(store.favourites);

	console.log(store.counter);

	return (
		
		<nav className="navbar navbar-light bg-dark mb-3 d-flex justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img style={{ width: "80px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"></img></span>
			</Link>
			<div className="ml-auto">

				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle me-3" style={{width:"200px"}} type="button" id="Button1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="counter">{store.counter}</span>
					</button>
					<ul class="dropy dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favourites.map((item, index) => (<li className="text-dark d-flex justify-content-between" key={index}>{item}<span className="bean" onClick={() =>
							actions.deleteFavourites(store.favourites.filter((item, myIndex) => index !== myIndex))}><i className="fas fa-trash"></i></span></li>))}

					</ul>
				</div>


			</div>
		</nav>
		
	);
};
