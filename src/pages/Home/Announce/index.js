import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdvertisementActions from '~/store/ducks/advertisement';

import SearchBar from '~/components/SearchBar';

import convertSize from '~/services/convertSize';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  CardContainer,
  TitleContainer,
  Image,
  NameContainer,
  NameText,
  NameDescription,
  TagContainer,
  TagDescription,
  Description,
  CardButton,
  Empty,
  CardsList,
  LoadingIndicator,
} from './styles';

class Announce extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAdvertisementRequest: PropTypes.func.isRequired,
    advertisements: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          pet: PropTypes.shape({
            name: PropTypes.string,
            breed: PropTypes.string,
            size: PropTypes.string,
          }),
          specialCare: PropTypes.bool,
          specialCareDescription: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    refreshing: false,
  };

  componentDidMount() {
    this.loadAdvertisements();
  }

  loadAdvertisements = () => {
    const { getAdvertisementRequest } = this.props;

    this.setState({ refreshing: true });

    getAdvertisementRequest();

    this.setState({ refreshing: false });
  };

  renderCard = ({ item }) => {
    const { navigation } = this.props;

    return (
      <CardButton onPress={() => navigation.navigate('Details', { data: item })}>
        <CardContainer>
          <TitleContainer>
            <Image source={logo} />
            <NameContainer>
              <NameText>{item.pet.name}</NameText>
              <NameDescription>{item.pet.breed}, {convertSize(item.pet.size)}</NameDescription>
            </NameContainer>
          </TitleContainer>
          <TagContainer>
            <TagDescription>Dócil</TagDescription>
          </TagContainer>
          {item.specialCare ? (
            <Description>{item.specialCareDescription}</Description>
          ) : (
            <Description>Sem necessidades especiais.</Description>
          )}
        </CardContainer>
      </CardButton>
    );
  };

  renderAdvertisementList = () => {
    const {
      advertisements: { data },
    } = this.props;
    const { refreshing } = this.state;

    if (!data.length) return <Empty>Nenhum anúncio encontrado!</Empty>;

    return (
      <CardsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderCard}
        onRefresh={this.loadAdvertisements}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const {
      advertisements: { loading },
    } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <SearchBar />
        {loading ? <LoadingIndicator /> : this.renderAdvertisementList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  advertisements: state.advertisement,
});

const mapDispatchToProps = dispatch => bindActionCreators(AdvertisementActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Announce);
