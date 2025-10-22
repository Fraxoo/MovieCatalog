import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Paginations";
import "../styles/home.css"


export default function Home() {

    const apiKey = "610523f2af92973a76c19832eba44bfd";
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])

    async function GetAllMovies() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&page=${page}`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                    }
                }
            );
            if (res.ok) {
                const data = await res.json();
                setMovies(data.results)
            } else {
                throw new Error("Erreur réseau " + res.status)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        GetAllMovies();
    }, [page])


    return (
        <div>
            <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            </div>
            <Pagination page={page} setPage={setPage}/>
        </div>
    );




}
