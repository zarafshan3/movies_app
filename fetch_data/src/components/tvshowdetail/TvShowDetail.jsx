import './TvShowDetail.css'


const TvShowDetail = ({tvshow}) => {
    // console.log(tvshow)
    return (
        <div className="detail">
            <h2>({tvshow.name})</h2>
            <div className="rating_container">
                <div className ="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-stroke"></i>
                </div>
                <p>{Number((tvshow.vote_average / 2).toFixed(1))} / 5</p>
            </div>
            <p>({tvshow.overview})</p>
        </div>
    )
}



export default TvShowDetail;