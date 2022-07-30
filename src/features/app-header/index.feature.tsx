import React, { useState} from 'react';
import StbInputSearch from '../../components/stb-input-search/index.component';
import { useLocation } from 'react-router';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const AppHeader: React.FC<{ isHeaderTransparent: boolean }> = (props) => {
  const query = useQuery();
  const q = query.get('q') || '';
  const [keyword, setKeyword] = useState<string>(q);


  return (
      <div className="container mx-auto">
            <StbInputSearch
              value={keyword}
              placeholder={''}
              handleChange={(e: any) => setKeyword(e.target.value)}
            />
          </div>
  );
}

export default AppHeader;