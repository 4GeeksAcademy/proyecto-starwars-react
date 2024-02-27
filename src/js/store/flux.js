const getState = ({ getStore, getActions, setStore }) => {
	
	
	return {
		store: {
			 
				people: [],
				planets: [],
				starships: []
			
		},
		
		actions: {

			getPeople: ()=>{
            
				fetch("https://www.swapi.tech/api/people/" )
.then(res => res.json())
.then(data => setStore({people:data.results}))
.catch(err => console.error(err))
			},
			
			
			
			
			getPlanets: ()=>{
            
				fetch("https://www.swapi.tech/api/planets/" )
.then(res => res.json())
.then(data => setStore({planets:data.results}))
.catch(err => console.error(err))
			},
			
			
			

			getStarships: ()=>{
            
				fetch("https://www.swapi.tech/api/startships/" )
.then(res => res.json())
.then(data => setStore({starships:data.results}))
.catch(err => console.error(err))
			}
		}
			
			}
		};
	


export default getState;
