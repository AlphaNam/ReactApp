import React, { Component } from 'react'
import MovieService from '../services/MovieService'

class ListMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                movies: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        MovieService.deleteEmployee(id).then( res => {
            this.setState({movies: this.state.movies.filter(movie => movie.id !== id)});
            MovieService.deleteEmployee(id).then( res => {
                this.props.history.push(`/`);
                //this.props.history.push('/');
            });
            //this.props.history.push(`/`);
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-movie/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/update-movie/${id}`);
    }

    componentDidMount(){
        MovieService.getEmployees().then((res) => {
            this.setState({ movies: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-movie/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Movies List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Movie</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Movie id </th>
                                    <th> Movie title</th>
                                    <th> Movie year</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.movies.map(
                                        movie => 
                                        <tr key = {movie.id}>
                                             <td> {movie.id} </td>   
                                             <td> {movie.title}</td>
                                             <td> {movie.year}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(movie.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(movie.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(movie.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMovieComponent