import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMoviesAction } from '../../app/movies/index.action';
import { selectAllMovies, selectAllMoviesPage, selectAllMoviesStatus, selectTotalMovies, selectTotalMoviesInData } from '../../app/movies/index.selector';
import StbCardMovie from '../../components/stb-card-movie/stb-card-movie.component';
import StbHeadingH3 from '../../components/stb-heading-h3/index.component';
import StbInfiniteScrollPagination from '../../components/stb-infinite-scroll-pagination/index.component';
import { ModalImageContext } from '../../contexts/modal-image-context/index.context';

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const moviePage = useAppSelector(selectAllMoviesPage);
  const [page, setPage] = React.useState<number>(moviePage);
  const { previewImage } = React.useContext(ModalImageContext);

  React.useEffect(() => {
    dispatch(fetchMoviesAction({ q: '2022', page: page }));
  }, [dispatch, page]);

  const movies = useAppSelector(selectAllMovies);
  const status = useAppSelector(selectAllMoviesStatus);
  const total = useAppSelector(selectTotalMovies);
  const totalInResponse = useAppSelector(selectTotalMoviesInData);

  const loadMoreMovies = (nextpage: number): void => {
    setPage(nextpage);
  }

  const openPreviewImage = (image: string, alt: string): void => {
    previewImage(image, alt);
  }

  return (
    <React.Fragment >
      <div className='m-3'>
        <StbHeadingH3 > Movies List</StbHeadingH3>

        <StbInfiniteScrollPagination
          status={status}
          total={total}
          currentPage={page}
          totalInResponse={totalInResponse}
          handleLoadMore={loadMoreMovies}
          containerClassname="grid grid-cols-5 gap-x-12 gap-y-3"
        >
          {
            movies.map((movie) => (
              <StbCardMovie
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                release={movie.Year}
                href={`/watch?v=${movie.imdbID}`}
                handlePosterClicked={() => openPreviewImage(movie.Poster, movie.Title)}
              />
            ))
          }
        </StbInfiniteScrollPagination>
        </div>
    </React.Fragment>
  );
}

export default Movies;