import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Paginations";


export default function Home() {


    async function loadMovies() {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&page=${page}`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                    }
                }
            );
            if (res.ok) {
                const data = await res.json();
                setMovies(data.results);
            } else {
                throw new Error("Erreur réseau : " + res.status);
            }
        } catch (error) {
            console.error(error);
        }

    }


    const apiKey = "610523f2af92973a76c19832eba44bfd"
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, [page]);

    return (
        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            <Pagination page={page} setPage={setPage} />
        </div>
    );




}
