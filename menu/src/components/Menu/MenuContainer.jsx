import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { filterAllProjects, filterApp, filterDesign, filterLandingPage, filterOnlineStore } from '../../actions/filter.js';
import MenuItem from '../Menu/MenuItem.jsx';

const Wrapper = styled.section`
  display: flex;
  padding: 20px 0;`
const MenuContainer = styled.div`
  display: flex;
  margin: 0 auto;`

class MenuBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.dispatchFilterType('allProject');
  }

  handleClick = (title) => {
    this.props.dispatchFilterType(title);
  }

  convertToReadableTitles = (title) => {
    let readableTitle = '';

    switch (title) {
      case 'allProject':
        return readableTitle = 'All projects';
      case 'landingPage':
        return readableTitle = 'Landing pages';
      case 'onlineStore':
        return readableTitle = 'Online stores';
      case 'app':
        return readableTitle = 'Apps';
      case 'design':
        return readableTitle = 'Design';
      default:
        return readableTitle;
    }

    return readableTitle;
  }

  mappingItems = () => {
    let { titles, filter } = this.props;

    const titleItems = titles.map( (title, key) => {

      let readableTitle = this.convertToReadableTitles(title);

      if (title === filter.filter) {
        return <MenuItem
          active={true}
          readableTitle={readableTitle}
          title={title}
          key={key}
          onClick={this.handleClick}
        />;
      } else {
        return <MenuItem
          readableTitle={readableTitle}
          title={title}
          key={key}
          onClick={this.handleClick}
        />;
      }
    });

    return <MenuContainer>{titleItems}</MenuContainer>;
  }

  render() {
    return <Wrapper>
        {this.mappingItems()}
    </Wrapper>
  }
}

MenuBlock.defaultProps = {
  titles: [
    'first',
    'second',
    'third',
    'fourth'
  ]
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFilterType: (title) => {
      switch (title) {
        case 'allProject':
          return dispatch(filterAllProjects());
        case 'landingPage':
          return dispatch(filterLandingPage());
        case 'onlineStore':
          return dispatch(filterOnlineStore());
        case 'design':
          return dispatch(filterDesign());
        case 'app':
          return dispatch(filterApp());
        default:
          return dispatch(filterAllProjects());
      }
    }
  }
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuBlock);

export default Menu;
