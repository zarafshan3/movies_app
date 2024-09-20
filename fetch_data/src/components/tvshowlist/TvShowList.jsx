import TvShowListItems from '../tvshowlistitems/TvShowListItems';
import './TvShowList.css'


const TvShowList = ({tvRecommendations,onClickItem}) =>{
    // console.log(tvRecommendations)
    return(
        <div className="list">
            <h4>You'll probably like :</h4>

            <div className="items">

                
                {
                    tvRecommendations.map(recommendation => {
                        return(
                            <TvShowListItems key={recommendation.id} recommendation={recommendation} onClickItem={onClickItem}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default TvShowList;