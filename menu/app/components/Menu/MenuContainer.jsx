import React from 'react';
import { connect } from 'react-redux';
import { filterAllProjects, filterLandingPage, filterOnlineStore, filterApp, filterDesign  } from '../../actions/filter';
import styled from 'styled-components';
import MenuItem from '../Menu/MenuItem';
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

  static defaultProps = {
    titles: [
      'first',
      'second',
      'third',
      'fourth'
    ]
  }

  handleClick = (name) => {
    this.props.dispatchFilterType(name);

    console.log('this state:', this.state, 'this props:', this.props);
  }

  mappingItems = () => {
    let { titles } = this.props;

    const titleItems = titles.map( (title, key) => <MenuItem title={title} key={key} onClick={this.handleClick}/>);

    return <MenuContainer>{titleItems}</MenuContainer>;
  }

  render() {
    return <Wrapper>
        {this.mappingItems()}
    </Wrapper>
  }
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
        case 'Landing pages':
          return dispatch(filterLandingPage());
        case 'Online stores':
          return dispatch(filterOnlineStore());
        case 'Design':
          return dispatch(filterApp());
        case 'Apps':
          return dispatch(filterDesign());
        default:
          return dispatch(filterAllProjects());
      }
    }
  }
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuBlock);

export default Menu;
