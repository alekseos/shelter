import { filterAllProjects, filterApp, filterDesign, filterElements, filterLandingPage } from 'Actions/filter';
import * as React from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';
import { MenuContainer, Wrapper } from './styled';

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
    let readableTitle: string;

    switch (title) {
      case 'allProject':
        readableTitle = 'All projects';
        break;
      case 'landingPage':
        readableTitle = 'Landing pages';
        break;
      case 'elements':
        readableTitle = 'Elements';
        break;
      case 'app':
        readableTitle = 'Apps';
        break;
      case 'design':
        readableTitle = 'Design';
        break;
      default:
        readableTitle = '';
    }

    return readableTitle;
  }

  mappingItems = () => {
    let { titles, filter } = this.props;

    const titleItems = titles.map((title, key) => {
      let readableTitle = this.convertToReadableTitles(title);
      let style = {
        margin: '0px 15px',
        fontSize: '1.6em',
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
