import React from 'react';
import { connect } from 'react-redux';

import { filterAllProjects, filterApp, filterDesign, filterElements, filterLandingPage } from '../../actions/filter.ts';
import MenuItem from './MenuItem.tsx';
import { MenuContainer, Wrapper } from './styled.ts';

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
      case 'elements':
        return readableTitle = 'Elements';
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
    let commonStyle = {
      padding: '39px 0px'
    }

    const titleItems = titles.map( (title, key) => {

      let readableTitle = this.convertToReadableTitles(title);
      let style = {
        margin: '0px 15px',
        fontSize: 30,
        whiteSpace: 'nowrap',
        width: 'inherit',
      }

      if (title === filter.filter) {
        return <MenuItem
          active={true}
          readableTitle={readableTitle}
          title={title}
          key={key}
          onClick={this.handleClick}
          style={style}
        />;
      } else {
        return <MenuItem
          readableTitle={readableTitle}
          title={title}
          key={key}
          onClick={this.handleClick}
          style={style}
        />;
      }
    });

    return <MenuContainer style={commonStyle}>{titleItems}</MenuContainer>;
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
        case 'elements':
          return dispatch(filterElements());
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
