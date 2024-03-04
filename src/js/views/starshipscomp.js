import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




const imageStarshipsUrls = [
    "https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900",
    "https://lumiere-a.akamaihd.net/v1/images/mobile-tac-pod-main_933a2b48.jpeg?region=383%2C40%2C1167%2C657",
    "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
    "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864",
    "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080",
    "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
    "https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004996_8ab70142.jpeg?region=0%2C0%2C1280%2C720",
];


export const StarshipsComp = () => {


    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.getStarships();
    }, []);
    console.log(store.starships);


    return (

        <div className="card-people d-flex">
            {store.starships.map((item, index) => (
                <div className="card-group" key={index}>
                    <div className="card">
                        <img src={imageStarshipsUrls[index % imageStarshipsUrls.length]} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                        <div className="footer">
                            <Link to={`/starships/${item.uid}`}>
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