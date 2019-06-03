import React from 'react';
import PropTypes from 'prop-types';

import { Container, FeaturedIcon } from './styles';

const TabBarIcon = ({ focused, ...props }) => (
  <Container focused={focused}>
    <FeaturedIcon {...props} focused={focused} />
  </Container>
);

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
