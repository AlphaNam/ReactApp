import React, { Component } from 'react'
import MovieService from '../services/MovieService';

class UpdateMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            year: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4

            MovieService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                console.log(employee);
                this.setState({id: employee.id, title: employee.title, year: employee.year
                });
                
            });
            
    }
    updateMovie = (e) => {
        e.preventDefault();
        let movie = {title: this.state.title, year: this.state.year};
        console.log('movie => ' + JSON.stringify(movie));

        // step 5
        MovieService.updateEmployee(movie, this.state.id).then( res => {
            this.props.history.push('/');
        });
        
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({year: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
            return <h3 className="text-center">Update Movie</h3>
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Movie id: </label>
                                            <input placeholder="Movie id" name="movieid" className="form-control" 
                                                value={this.state.id} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Movie title: </label>
                                            <input placeholder="Movie title" name="movietitle" className="form-control" 
                                                value={this.state.title} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Movie year: </label>
                                            <input placeholder="Movie year" name="movieyear" className="form-control" 
                                                value={this.state.year} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateMovie}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateMovieComponent