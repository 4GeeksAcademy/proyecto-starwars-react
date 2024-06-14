const getState = ({ getStore, getActions, setStore, navigate }) => {


	return {

		store: {
			people: [],
			planets: [],
			starships: [],

			peopleFeatures: {},
		    planetsFeatures: {},
			starshipsFeatures: {},

			favourites: [],
			counter: 0,
			auth: false
		},
		
		actions: {

			Signup : async (e) => {
				e.preventDefault();
			
				const userData = {
					userName: e.target.userName.value,
					email: e.target.email.value,
					password: e.target.password.value,
					age: parseInt(e.target.age.value)
				};
			
				try {
					const response = await fetch("https://super-space-happiness-69gj6p5v4p7qc45q7-3000.app.github.dev/create-user", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(userData)
					});
			
					const data = await response.json();
					console.log(data);
			
					if (response.status === 200) {
						// Aquí podrías almacenar el token en localStorage si lo deseas
						navigate("/login"); // Redirecciona a la página de login después de registrarse exitosamente
					} else {
						// Aquí puedes manejar cualquier otro caso de respuesta, como mostrar un mensaje de error
					}
				} catch (error) {
					console.error("Error creating user:", error);
					// Aquí puedes manejar errores de red u otros errores que puedan ocurrir
				}
			},
			

			login: async (email, password) => {
				try {
					const response = await fetch("https://super-space-happiness-69gj6p5v4p7qc45q7-3000.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
			
					const data = await response.json();
					
					if (response.status === 200) {
						localStorage.setItem("token", data.access_token);
						setStore({ auth: true });
						console.log("Token almacenado correctamente:", data.access_token);
						return true;
					} else {
						console.error("Error en la respuesta:", response.status, data.error);
						return false;
					}
				} catch (error) {
					console.error("Error al realizar la solicitud:", error);
					return false;
				}
			},
			

			

			validateToken: async () => {
				
	
				const accessToken = localStorage.getItem("token");
				try {
					const response = await fetch("https://super-space-happiness-69gj6p5v4p7qc45q7-3000.app.github.dev/valid-token", {
						method: 'GET',
						headers: {
							'Content-type':"application/json",
							'Authorization': `Bearer ${accessToken}`
						}
					});
					let data = await response.json()
					if (response.status === 200) {
						setStore({ auth: true }); // Actualiza el estado `auth`
					} else {
						setStore({ auth: false }); // En caso de token no válido, actualiza el estado `auth`
					}
				} catch (error) {
					console.error(error);
					setStore({ auth: false }); // En caso de error, actualiza el estado `auth`
				}
			},
			
			setAuth: (authStatus) => {
				setStore({ auth: authStatus });
			},
			

			addFavourites:(name)=>{
				setStore({favourites: getStore().favourites.concat(name)});
				getStore().counter++
				console.log(name);
			},

			deleteFavourites:(name)=>{
				setStore({favourites: name});
				getStore().counter--
			},


			getPeople: () => {
					fetch("https://www.swapi.tech/api/people/")
						.then(res => res.json())
						.then(data => setStore({ people: data.results }))
						.catch(err => console.error(err))
			},

			 getPeopleFeatures: (id) => {
			 	
			 	fetch(`https://www.swapi.tech/api/people/${id}`)
			.then(res => res.json())
			.then(data => setStore({ peopleFeatures: data.result.properties }))
			.catch(err => console.error(err))}, 




			getPlanets: () => {

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			getPlanetsFeatures: (id) => {
			 	
				fetch(`https://www.swapi.tech/api/planets/${id}`)
		   .then(res => res.json())
		   .then(data => setStore({ planetsFeatures: data.result.properties }))
		   .catch(err => console.error(err))}, 


			getStarships: () => {

				fetch("https://www.swapi.tech/api/starships/")
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))

			},

			getStarshipsFeatures: (id) => {
			 	
				fetch(`https://www.swapi.tech/api/starships/${id}`)
		   .then(res => res.json())
		   .then(data => setStore({ starshipsFeatures: data.result.properties }))
		   .catch(err => console.error(err))}, 






		}
	};

};

export default getState;
