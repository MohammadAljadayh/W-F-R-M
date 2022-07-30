import React, { useEffect, useRef } from 'react';
import * as s from './index.styled';
import * as i from './index.interface';
import { useAppDispatch } from '../../app/hooks';
import { fetchGlobalSearchMoviesAction } from '../../app/search/index.action';

const StbInputSearch: React.FC<i.InputSearch> = (props) => {
  const selfContainer = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGlobalSearchMoviesAction({ q: props.value, page: 1 }))
  }, [dispatch, props.value]);


  return (
    <form className='flex justify-center mt-3' action="/search" ref={selfContainer}>
      <s.InputSearch className="relative mr-3">
        <s.Input
          name="q"
          type="text"
          className="py-2 px-4"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      </s.InputSearch>
      <s.Button type="submit">
     Search
        </s.Button>
    </form>
  );
}

export default StbInputSearch;