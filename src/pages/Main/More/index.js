import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import TabBarIcon from '~/components/TabBarIcon';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  ListContainer,
  ListItem,
  ListItemText,
} from './styles';

class More extends Component {
  handleNavigate = (routeName) => {
    const { navigation } = this.props;

    navigation.navigate(routeName);
  }

  handleLogout = () => {
    const { logout } = this.props;

    logout();
  }

  render() {
    const { navigation, token } = this.props
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => navigation.goBack()}>
            <BackIcon />
          </BackIconContainer>
          <Title>Mais</Title>
          <ListContainer>
            <ListItem onPress={() => {}}>
              <ListItemText>Cadastrar um Anúncio</ListItemText>
            </ListItem>
            <ListItem onPress={() => {}}>
              <ListItemText>Cadastrar um Pet</ListItemText>
            </ListItem>
            { !!token && <ListItem onPress={() => {}}>
              <ListItemText>Meus Anúncios</ListItemText>
            </ListItem>}
            { !!token && <ListItem onPress={() => {}}>
              <ListItemText>Meus Pet's</ListItemText>
            </ListItem>}
            <ListItem onPress={() => {}}>
              <ListItemText>Configurações</ListItemText>
            </ListItem>
            <ListItem onPress={() => {}}>
              <ListItemText>Denúnciar Maus Tratos</ListItemText>
            </ListItem>
            <ListItem onPress={() => {}}>
              <ListItemText>Encontrar Pet</ListItemText>
            </ListItem>
            { !!!token && <ListItem onPress={() => this.handleNavigate('SignIn')}>
              <ListItemText>Entrar</ListItemText>
            </ListItem>}
            { !!!token && <ListItem onPress={() => this.handleNavigate('SignUp')}>
              <ListItemText>Cadastre-se</ListItemText>
            </ListItem>}
            { !!token && <ListItem onPress={this.handleLogout}>
              <ListItemText>Sair</ListItemText>
            </ListItem>}
          </ListContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-more" focused={focused} color={tintColor} />
);
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

More.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Mais',
    tabBarIcon: TabIcon,
    tabBarVisible,
  };
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(More);
