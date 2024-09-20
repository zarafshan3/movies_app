import { BACKDROP_BASE_URL } from '../../config';
import './TvShowListItems.css'


const MAX_TITLE_CHAR = 30

const TvShowListItems = ({recommendation, onClickItem}) =>{

    return(
        <div className="item" style={{backgroundImage:`url(${BACKDROP_BASE_URL}${recommendation.backdrop_path})`}} onClick={() => onClickItem(recommendation)}>
            <div className="item_title">
                {
                    recommendation.name.length > MAX_TITLE_CHAR
                    ? recommendation.name.slice(0, MAX_TITLE_CHAR) + "..."
                    : recommendation.name
                }
            </div>
        </div>
    )
}



export default TvShowListItems;