import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from '../movie_pr.png';
import "./Schedule.css";

const Schedule = () => {

    const [dataToShow, setDataToShow] = useState([]);
    const [detailView, setDetailView] = useState(false);
    const [movieRecord, setMovieRecord] = useState(null);


    //----------API----------
    useEffect(() => {
        axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
            .then((response) => {
                setDataToShow(response.data.reduce((acc, current) => {
                    acc = [...acc, current];
                    return acc;
                }, []))
            })
            .catch(error => console.log(error));
    }, []);


    //----------DELETE----------
    const deleteMovie = (movieId) => {
        const data = [...dataToShow];
        let index = -1;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === movieId) {
                index = i;
                break
            }
        }
        data.splice(index, 1);
        setDataToShow(data);
        setDetailView(false);
    }


    //----------SHOW DETAIL VIEW----------
    const showDetailView = (record) => {
        setMovieRecord(record);
        setDetailView(!detailView);
    };


    return (
        detailView === true & movieRecord !== null ?
        <div>
        <h2 className="title is-3">MOVIE:</h2>
        <div className="detailMovie">
            <div className="movieMedia">
                <div>
                    <img src={movieRecord.show.image === null ? null : movieRecord.show.image.medium} alt="movie image" />
                </div>

                <div>
                    <div className="movieContent">
                        <p><strong>Name: </strong>{movieRecord.name}<br />
                            <strong>Subtitle: </strong>{movieRecord.show.name}<br />
                            <strong>Season: </strong>{movieRecord.season}<br />
                            <strong>Type: </strong>{movieRecord.show.type}<br />
                            <strong>Language: </strong>{movieRecord.show.language}<br />
                            <strong>Network: </strong>{movieRecord.show.network === null ? "NO INFO" : movieRecord.show.network.name}<br />
                            <strong>Status: </strong>{movieRecord.show.status}
                        </p>
                        <button className="button is-danger is-light" style={{marginTop: "20px", marginRight: "5px"}} onClick={() => deleteMovie(movieRecord.id)}>DELETE</button>
                        <button className="button is-info is-light" style={{marginTop: "20px"}} onClick={() => setDetailView(false)}>GO BACK</button>
                    </div>
                </div>
            </div>
        </div>
    </div> :
            <div>
                <h2 className="title is-3">TV SCHEDULE:</h2>
                <div className="containerTv">
                    {dataToShow.map(record => (
                        <div className="movieBox" key={record.id} id={record.id} onClick={() => showDetailView(record)}>
                            <img src={logo} alt="movie" style={{ width: "20%" }} />
                            <p>Name: {record.name}</p>
                            <p>Season: {record.season}</p>
                            <p>Type: {record.show.type}</p>
                        </div>
                    ))}
                </div>
            </div> 
    )
}


export default Schedule;
