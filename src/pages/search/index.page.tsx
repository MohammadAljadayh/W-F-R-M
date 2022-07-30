import React from 'react';
import AppLayout from '../../features/app-layout/index.feature';
import SearchMovies from '../../features/search-movies/index.feature';

const SearchPage: React.FC = () => {
  return (
    <AppLayout isHeaderTransparent={false}>
        <SearchMovies />
    </AppLayout>
  );
}

export default SearchPage;