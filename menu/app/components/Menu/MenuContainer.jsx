import React from 'react';
import { connect } from 'react-redux';

import { filterAllProjects, filterLandingPage, filterOnlineStore, filterApp, filterDesign  } from '../../actions/filter';

import styled from 'styled-components';

import MenuItem from '../Menu/MenuItem';

const Wrapper = styled.section`
  display: flex;
  padding: 20px 0;
`

const MenuContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

class MenuBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "allProjects"
    }
  }

  static defaultProps = {
    titles: [
      'first',
      'second',
      'third',
      'fourth'
    ]
  }

  handleClick = (title) => {
    this.props.dispatchFilterType(title);

    console.log('I`m console.log!');
  }

  mappingItems = () => {
    let { titles } = this.props;

    const titleItems = titles.map( (title, key) => <div> <MenuItem title={title} key={key} onClick={this.handleClick(title)} /></div>);

    return <MenuContainer>{titleItems}</MenuContainer>;
  }

  render() {
    return <Wrapper>
        {this.mappingItems()}
    </Wrapper>
  }
}

const mapStateToProps = (state = {}) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFilterType: (filter) => {
      if (fiter === "landingPage") {
        dispatch(filterLandingPage());
      } else {
        dispatch(filterAllProjects());
      }
      // switch (filter) {
      //   case ("allProjects"):
      //     return {
      //       dispatch(filterAllProjects())
      //     };
      //   case ("landingPage"):
      //     return {
      //       dispatch(filterLandingPage())
      //     };
      //   case ("onlineStore"):
      //     return {
      //       dispatch(filterOnlineStore())
      //     };
      //   case ("app"):
      //     return {
      //       dispatch(filterApp())
      //     };
      //   case ("design"):
      //     return {
      //       dispatch(filterDesign())
      //     };
      //   default:
      //     return {
      //       dispatch(filterDesign())
      //     };
      // }
    }
  }
}
const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuBlock);

export default Menu;
