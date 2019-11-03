import React, { useState } from 'react';

import {
  Container,
  Input,
  SearchIcon,
  FiltersContainer,
  FiltersText,
  ExpandIcon,
  DetailedFilters,
} from './styles';

export default function SearchBar() {
  const [filtersVisible, setFiltersVisible] = useState(false);

  function changeFiltersVisibility() {
    setFiltersVisible(!filtersVisible);
  }

  return (
    <>
      <Container>
        <Input placeholder="O que você está procurando?" />
        <SearchIcon name="search" />
      </Container>
      <FiltersContainer onPress={changeFiltersVisibility}>
        <ExpandIcon />
        <FiltersText>Filtros</FiltersText>
      </FiltersContainer>
      {filtersVisible && <DetailedFilters />}
    </>
  );
}
