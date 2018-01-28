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

  handleClick = () => {
    this.props.dispatchFilterType();

    console.log('this state:', this.state, 'this state:', this.props);
  }

  mappingItems = () => {
    let { titles } = this.props;

    const titleItems = titles.map( (title, key) => <MenuItem title={title} key={key} />);

    return <MenuContainer>{titleItems}</MenuContainer>;
  }

  render() {
    return <Wrapper>
        {this.mappingItems()}
        <div onClick={this.handleClick}>Click me!</div>
    </Wrapper>
  }
}

const mapStateToProps = (state = {}) => {
  return {
    works: state.works,
    filter: state.filter.filterType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFilterType: () => {
        dispatch(filterOnlineStore());
    }
  }
}
const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuBlock);

export default Menu;
