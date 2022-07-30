import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';
import nullImage from '../../assets/images/null-image.png';

const StbMovieOverview: React.FC<i.MovieOverview> = (props) => {
  return (
    <s.MovieOverview className="flex">
      <div className=" flex ml-3 mr-3 rounded overflow-hidden shadow-lg">
        <s.Poster
          src={props.poster}
          alt={props.title}
          onError={(e: any) => { e.target.onerror = null; e.target.src = nullImage }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"><s.Title>{props.title}</s.Title></div>
          <p className="text-gray-700 text-base">
            <s.Synopsis className="mb-4">{props.plot}</s.Synopsis>    </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">   <div className="mb-4">
            <b>Year</b>
            <p>{props.year}</p>
          </div></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">   <div className="mb-4">
            <b>Rated</b>
            <p>{props.rated}</p>
          </div></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <div className="mb-4">
            <b>Released</b>
            <p>{props.released}</p>
          </div>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <div className="mb-4">
            <b>Runtime</b>
            <p>{props.runtime}</p>
          </div></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <div className="mb-4">
            <b>Genre</b>
            <p>{props.genre}</p>
          </div></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <div className="mb-4">
            <b>Actors</b>
            <p>{props.actors}</p>
          </div></span>
        </div>
      </div>
    </s.MovieOverview>
  );
}

export default StbMovieOverview;