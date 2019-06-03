import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import {
  Container,
  ContentContainer,
  Title,
  ListContainer,
  ListItem,
  ListItemText,
} from './styles';

class More extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    token: PropTypes.string.isRequired,
    authCheck: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }

  handleNavigate = (routeName) => {
    const { navigation } = this.props;

    navigation.navigate(routeName);
  };

  handleLogout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const { navigation, token, authCheck } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <Title>Mais</Title>
          <ListContainer>
            <ListItem onPress={() => authCheck('RegisterAnnounce')}>
              <ListItemText>Cadastrar um Anúncio</ListItemText>
            </ListItem>
            <ListItem onPress={() => authCheck('RegisterPet')}>
              <ListItemText>Cadastrar um Pet</ListItemText>
            </ListItem>
            {!!token && (
              <ListItem onPress={() => navigation.navigate('MyAnnounces')}>
                <ListItemText>Meus Anúncios</ListItemText>
              </ListItem>
            )}
            {!!token && (
              <ListItem onPress={() => navigation.navigate('MyPets')}>
                <ListItemText>Meus Pets</ListItemText>
              </ListItem>
            )}
            <ListItem onPress={() => navigation.navigate('Settings')}>
              <ListItemText>Configurações</ListItemText>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('Complaints')}>
              <ListItemText>Denúnciar Maus Tratos</ListItemText>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('FindPets')}>
              <ListItemText>Encontrar Pet</ListItemText>
            </ListItem>
            {!token && (
              <ListItem onPress={() => this.handleNavigate('SignIn')}>
                <ListItemText>Entrar</ListItemText>
              </ListItem>
            )}
            {!token && (
              <ListItem onPress={() => this.handleNavigate('SignUp')}>
                <ListItemText>Cadastre-se</ListItemText>
              </ListItem>
            )}
            {!!token && (
              <ListItem onPress={this.handleLogout}>
                <ListItemText>Sair</ListItemText>
              </ListItem>
            )}
          </ListContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(More);
