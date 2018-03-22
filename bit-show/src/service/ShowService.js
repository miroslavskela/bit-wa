import Show from './../entities/Show'
import Cast from './../entities/Cast'



class ShowService{


    fetchShows(){
        return fetch("https://api.tvmaze.com/shows")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const showData = data
                return  showData.map((show) =>{
                 return new Show(show)   
                }) 
               
            })    
        }

        fetchSingleShow(id){
            return fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((show) => {
                return new Show(show);
              
            })
            
            
        }
}


export const showService = new ShowService()