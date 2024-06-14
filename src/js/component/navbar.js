import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            actions.validateToken();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        actions.setAuth(false);
    };

    return (
        <nav className="navbar navbar-light bg-dark mb-2">
            <Link to="/" className="navbar-brand ms-5">
                <img style={{ width: "80px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Star Wars Logo"/>
            </Link>

            <div className="d-flex align-items-center">
                {store.auth && (
                    <div className="dropdown me-3">
                        <button
                            className="btn dropdown-toggle"
                            style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                backgroundColor: '#1a1a1a',
                                border: 'none',
                                boxShadow: '0 0 10px rgba(0, 132, 255, 0.842)',
                                cursor: 'pointer',
                                fontSize: '12px',
                                padding: '8px 15px',
								fontSize: '15px'
                            }}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites <span className="counter">{store.counter}</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ right: '0', left: 'auto' }}>
                            {store.favourites.map((item, index) => (
                                <li className="text-dark d-flex justify-content-between" key={index}>
                                    {item}
                                    <span className="bean" onClick={() =>
                                        actions.deleteFavourites(store.favourites.filter((item, myIndex) => index !== myIndex))
                                    }>
                                        <i className="fas fa-trash" />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {store.auth ? (
                    <div className="ml-auto">
                        <button
                            style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                backgroundColor: '#1a1a1a',
                                border: 'none',
                                boxShadow: '0 0 10px rgba(0, 132, 255, 0.842)',
                                cursor: 'pointer',
                                marginRight: '10px',
								borderRadius:'5px',
								padding: '6px 13px'
                            }}
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
					
                    location.pathname === "/" && (
                        <div className="d-flex align-items-center ml-3">
                            <Link to="/signup">
                                <button
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        backgroundColor: '#1a1a1a',
                                        border: 'none',
                                        boxShadow: '0 0 10px rgba(0, 132, 255, 0.842)',
                                        cursor: 'pointer',
                                        marginRight: '10px',
                                        borderRadius:'5px',
								        padding: '6px 13px'
                                    }}
                                >
                                    Signup
                                </button>
                            </Link>

                            <Link to="/login">
                                <button
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        backgroundColor: '#1a1a1a',
                                        border: 'none',
                                        boxShadow: '0 0 10px rgba(0, 132, 255, 0.842)',
                                        cursor: 'pointer',
                                        marginRight: '10px',
                                        borderRadius:'5px',
								        padding: '6px 13px'
                                    }}
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </nav>
    );
};