import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, FeaturedIcon } from './styles';

const TabBarIcon = ({ focused, ...props }) => (
  <Container focused={focused}>
    <FeaturedIcon {...props} focused={focused} />
  </Container>
);

export default TabBarIcon;
