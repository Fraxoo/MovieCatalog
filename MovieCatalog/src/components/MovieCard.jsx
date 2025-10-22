export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p><i class="fa-solid fa-star"></i>{Math.round(movie.vote_average)}</p>
        </div>
    )
}