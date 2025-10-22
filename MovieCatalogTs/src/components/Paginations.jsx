export default function Pagination({ page, setPage }) {
    return (
        <div>
            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >Precédent</button>
            <p>page : {page}</p>
            <button onClick={() => setPage(page + 1)}>Suivant</button>
        </div>
    )
}