const getState = ({ getStore, getActions, setStore }) => {


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
		},
		
		actions: {

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
