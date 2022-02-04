import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = props => {
  
    const {category} = useParams()
    const [cast, setCast] = useState([])
    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id)
            setCast(res.cast.slice(0, 5))
        }
        getCredits()
    }, [category, props.id])
  
    return (
        <div className='cast'>
            {
                cast.map((item, i) => (
                    <div key={i} className="cast__item">
                    <div className="cast__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                    <p className="cast__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
  );
};

export default CastList;
