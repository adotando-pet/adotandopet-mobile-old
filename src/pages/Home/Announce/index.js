import React from 'react';

import { StatusBar } from 'react-native';

import SearchBar from '~/components/SearchBar';

import { Container } from './styles';

const Announce = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <SearchBar />
  </Container>
);

Announce.navigationOptions = {
  header: null,
};

export default Announce;
