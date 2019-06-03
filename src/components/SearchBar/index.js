import React, { Component, Fragment } from 'react';

import {
  Container,
  Input,
  SearchIcon,
  FiltersContainer,
  FiltersText,
  ExpandIcon,
  DetailedFilters,
} from './styles';

export default class SearchBar extends Component {
  state = {
    filtersVisible: false,
  };

  changeFiltersVisibility = () => {
    const { filtersVisible } = this.state;
    this.setState({ filtersVisible: !filtersVisible });
  };

  render() {
    const { filtersVisible } = this.state;
    return (
      <Fragment>
        <Container>
          <Input placeholder="O que você está procurando?" />
          <SearchIcon name="search" />
        </Container>
        <FiltersContainer onPress={this.changeFiltersVisibility}>
          <ExpandIcon />
          <FiltersText>Filtros</FiltersText>
        </FiltersContainer>
        {filtersVisible && <DetailedFilters />}
      </Fragment>
    );
  }
}
