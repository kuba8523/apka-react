import React, { useState, useEffect } from "react";
import 'bulma/css/bulma.css';
import axios from "axios";
import logo from '../movie_pr.png';
import "./Schedule.css";

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    

    //----------API - FIRST 5 MOVIES----------
    useEffect(() => {
        axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
            .then((response) => {
                let array = response.data.reduce((acc, current) => {
                    acc = [...acc, current];
                    return acc;
                }, []);
                array = array.slice(0, 5);
                setTopMovies([...array]);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="box">
            <h2 className="title is-3">TOP 5 MOVIES: </h2>
            <div className="containerTv">
                {topMovies.map(record => (
                   <div className="topMovie" key={record.id} id={record.id}>
                   <img src={logo} alt="movie" style={{ width: "20%" }} />
                   <p>Name: {record.name}</p>
                   <p>Season: {record.season}</p>
                   <p>Type: {record.show.type}</p>
               </div>
                ))}
            </div>
        </div>
    )
};

export default Home;
