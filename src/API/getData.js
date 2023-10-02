import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const optionsGetTrending = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
    }
  };

export const getTrending  = async () => {
	const { data } = await axios(`trending/all/day?language=en-US`, optionsGetTrending)
	return data
}


  
  export const searchMovies  = async (query) => {
    const optionsSearchMovies = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: query, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
       }
  };
	const { data } = await axios(`trending/all/day?language=en-US`, optionsSearchMovies)
    
	return data
}

export const detailsMovies  = async (item) => {
    const optionsDetailsMovies = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${item}`,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
        }      
  };
	const { data } = await axios(optionsDetailsMovies)
    
	return data
}

export const creditsMovies  = async (item) => {
    const optionsCreditsMovies = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${item}/credits`,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
               }      
  };
	const { data } = await axios(optionsCreditsMovies)
    
	return data
}

export const reviewsMovies  = async (item) => {
    const optionsReviews = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${item}/reviews`,
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
                    }      
  };
	const { data } = await axios(optionsReviews)
    
	return data
}



// export const getImage  = async (item) => {
//     const optionsGetImage = {
//         method: 'GET',
//         //url: `https://image.tmdb.org/t/p/w500/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg`,
//         // url:'https://api.themoviedb.org/3/configuration',
//         // url: `https://api.themoviedb.org/3/movie/${item}/images`,
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
//         }           
//   };
// 	const { data } = await axios(optionsGetImage)
    
// 	return data
// }