import React from 'react';
import * as s from './stb-card-movie.styled';
import * as i from './stb-card-movie.interface';

const StbCardMovie: React.FC<i.StbCardMovieProps> = ({ poster, title, href }) => {
  return (
    <s.Card>
     
      <s.Poster 
        src={poster}
        alt={title}
      />
        
        <s.Title>{title}</s.Title>
        <s.Link to={href}>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">more Details</button>
      </s.Link>
      <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> add to Fav</button>
    </s.Card>
  );
}

export default StbCardMovie;