import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdoptionActions from '~/store/ducks/adoption';

import TabBarIcon from '~/components/TabBarIcon';

import convertSize from '~/services/convertSize';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  Title,
  LoginText,
  AdoptionContainer,
  PetAvatar,
  InfoContainer,
  NameContainer,
  GenderIcon,
  Name,
  Description,
  CommentsButton,
  CommentsIcon,
  MoreButton,
  MoreIcon,
  AdoptionsList,
} from './styles';

class Adoptions extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      addListener: PropTypes.func,
    }).isRequired,
    getAdoptionRequest: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    adoption: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
  };

  state = {
    refreshing: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.navListener = navigation.addListener('didFocus', this.loadData);
  }

  componentWillUnmount() {
    this.navListener.remove();
  }

  refreshing = () => {
    const { getAdoptionRequest } = this.props;

    this.setState({ refreshing: true });

    getAdoptionRequest();

    this.setState({ refreshing: false });
  };

  loadData = () => {
    const { token, adoption, getAdoptionRequest } = this.props;

    if (token && !adoption.data.length) getAdoptionRequest();
  };

  goToChat = (_userId) => {
    const { navigation } = this.props;

    navigation.navigate('Chat');
  }

  renderItem = ({ item }) => (
    <AdoptionContainer>
      <PetAvatar source={logo} />
      <InfoContainer>
        <NameContainer>
          <GenderIcon gender={item.advertisement.pet.gender} />
          <Name>{item.advertisement.pet.name}</Name>
        </NameContainer>
        <Description>
          {item.advertisement.pet.breed}, {convertSize(item.advertisement.pet.size)}
        </Description>
      </InfoContainer>
      <CommentsButton onPress={() => this.goToChat(item.advertisement.pet.user_id)}>
        <CommentsIcon />
      </CommentsButton>
      <MoreButton onPress={() => {}}>
        <MoreIcon />
      </MoreButton>
    </AdoptionContainer>
  );

  renderContent = () => {
    const {
      adoption: { data },
    } = this.props;

    const { refreshing } = this.state;

    return (
      <AdoptionsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.refreshing}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { token } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <Title>Minhas Adoções</Title>
          {!token ? (
            <LoginText>Faça login para ver sua lista de adoções!</LoginText>
          ) : (
            this.renderContent()
          )}
        </ContentContainer>
      </Container>
    );
  }
}

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-paw" focused={focused} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

Adoptions.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Adoções',
    tabBarIcon: TabIcon,
    tabBarVisible,
  };
};

const mapStateToProps = state => ({
  token: state.auth.token,
  adoption: state.adoption,
});

const mapDispatchToProps = dispatch => bindActionCreators(AdoptionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adoptions);
