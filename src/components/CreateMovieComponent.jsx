import React, { Component } from 'react'
import MovieService from '../services/MovieService';

class CreateMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '',
            title: '',
            year: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
    }

    // step 3
    saveMovie = (e) => {
        e.preventDefault();
        let movie = {id: this.state.id,title: this.state.title, year: this.state.year};
        console.log('movie => ' + JSON.stringify(movie));

        // step 5
            MovieService.createEmployee(movie).then(res =>{
                //this.props.history.push('/add-movie/' + this.state.id);
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
        return <h3 className="text-center">Add Movie</h3>
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

                                        <button className="btn btn-success" onClick={this.saveMovie}>Save</button>
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

export default CreateMovieComponent