import React from 'react';
import Spinner from 'react-spinkit';

interface StbLoadingProps {

  isLoading: boolean
}

const StbLoading: React.FC<StbLoadingProps> = ({ isLoading }) => {
  return (
    <React.Fragment>
      {
        isLoading &&
          <div className="flex justify-center items-center py-16">
<Spinner name="line-scale" color="steelblue"/>
          </div>
      }
    </React.Fragment>
  );
}

export default React.memo(StbLoading);