function MovieCard({data}) {
    console.log(data);
    return ( <div className="movie">
        <div>
            <p>{data.Year}</p>
        </div>
        <div>
            <img src={data.Poster !== 'N/A' ? data.Poster : "https://via.placeholder.com/400"} alt=""/>
        </div>
        <div>
            <span>{data.Type}</span>
            <h3>{data.Title}</h3>
        </div>
    </div> );
}

export default MovieCard;