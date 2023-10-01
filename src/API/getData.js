import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDljODkyZTIwMmI4ZjEzZjY0YWY4MTRmODhlODgzMiIsInN1YiI6IjY1MTg4NDZlMDcyMTY2MDEzOWM1NWY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRFtCNE2Tkt9b0ugvqaG7kS1auJRNWCpIqldmReiIR0'
    }
  };

export const getTrending  = async () => {
	const { data } = await axios(`trending/all/day?language=en-US`, options)
	return data
}
