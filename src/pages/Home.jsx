import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import { OutlineButton } from '../components/button/Button';
import {category, movieType, tvType} from '../api/tmdbApi'

const Home = () => {
  return (
      <>
          <HeroSlide/>
          <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2><span style={{fontStyle: 'italic', color: '#6e00ff'}}>Trending</span> Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">
                    View More
                  </OutlineButton>
                </Link>
              </div>
              <MovieList category={category.movie} type={movieType.popular}/>
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2><span style={{fontStyle: 'italic', color: '#fff700'}}>Top Rated</span> Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">
                    View More
                  </OutlineButton>
                </Link>
              </div>
              <MovieList category={category.movie} type={movieType.top_rated}/>
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2><span style={{fontStyle: 'italic', color: '#6e00ff'}}>Trending</span> on TV</h2>
                <Link to="/movie">
                  <OutlineButton className="small">
                    View More
                  </OutlineButton>
                </Link>
              </div>
              <MovieList category={category.tv} type={tvType.popular}/>
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2><span style={{fontStyle: 'italic', color: '#fff700'}}>Top Rated </span> on TV</h2>
                <Link to="/movie">
                  <OutlineButton className="small">
                    View More
                  </OutlineButton>
                </Link>
              </div>
              <MovieList category={category.tv} type={tvType.top_rated}/>
            </div>
          </div>
      </>
  );
};

export default Home;
