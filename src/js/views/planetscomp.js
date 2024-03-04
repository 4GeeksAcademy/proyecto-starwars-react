import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const imagePlanetsUrls = [
    "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534",
    "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
    "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",
    "https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/coruscant-main_59b865a4.jpeg?region=164%2C0%2C953%2C536",
    "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",
];


export const PlanetsComp = () => {


    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.getPlanets();

    }, []);
    console.log(store.planets);


    return (

        <div className="card-people d-flex">
            {store.planets.map((item, index) => (
                <div className="card-group" key={index}>
                    <div className="card">
                        <img src={imagePlanetsUrls[index % imagePlanetsUrls.length]} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                        <div className="footer">
                            <Link to={`/planets/${item.uid}`}>
                                <button className="boton-learn" >Learn More!</button>
                            </Link>

                            <button className="boton-heart" onClick={() => actions.addFavourites(item.name)}>
                                <i className="fas fa-heart" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};
