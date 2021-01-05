import axios from 'axios';

const MOVIE_API_BASE_URL = "http://localhost:8080/api/movies";
const CINEMA_API_BASE_URL = "http://localhost:8080/api/movies/externalApi/cinema/all";

class MovieService {

    getEmployees(){
        return axios.get(MOVIE_API_BASE_URL);
    }

    createEmployee(movie){
        return axios.post(MOVIE_API_BASE_URL + '/add', movie);
    }

    getEmployeeById(movieId){
        return axios.get(MOVIE_API_BASE_URL + '/' + movieId);
    }

    updateEmployee(movie, movieId){
        return axios.post(MOVIE_API_BASE_URL + '/update/' + movieId, movie);
    }

    deleteEmployee(movieId){
        return axios.delete(MOVIE_API_BASE_URL + '/delete/' + movieId);
    }

    getCinemas(){
        return axios.get(CINEMA_API_BASE_URL);
    }
}

export default new MovieService()