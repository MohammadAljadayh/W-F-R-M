import React from 'react';
import AppLayout from '../../features/app-layout/index.feature';
import Movies from '../../features/movies/index';

const BrowsePage: React.FC = () => {
  return (
    <AppLayout>
        <Movies />
    </AppLayout>
  );
}

export default BrowsePage;