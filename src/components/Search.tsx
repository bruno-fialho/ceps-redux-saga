import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Search: React.FC = () => {
  const search = useSelector(state => state);

  console.log(search);

  return <h1>Search CEPs</h1>;
};

export default Search;
