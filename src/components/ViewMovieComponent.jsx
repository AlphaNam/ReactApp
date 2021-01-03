import React, { Component } from 'react'
import MovieService from '../services/MovieService'

class ViewMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movies: {}
        }
    }

    componentDidMount(){
        MovieService.getEmployeeById(this.state.id).then( res => {
            this.setState({movies: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Movie Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Movie id :&nbsp;</label>
                            <div> { this.state.movies.id }</div>
                        </div>
                        <div className = "row">
                            <label> Movie title :&nbsp;</label>
                            <div> { this.state.movies.title }</div>
                        </div>
                        <div className = "row">
                            <label> Movie year :&nbsp;</label>
                            <div> { this.state.movies.year }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMovieComponent