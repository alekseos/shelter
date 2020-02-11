import { pageAbout, pageContacts, pagePortfolio, pageProcess, pageStart } from 'Actions/page';
import logo from 'Images/logo.png';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pages } from 'Screens/enum';

import { Li, Logo, Nav, Ul } from './styled';
import { NavigatorProps } from './types';

class NavigatorBlock extends React.Component<NavigatorProps> {
  constructor(props: NavigatorProps) {
    super(props);
  }

  checkingUrl = () => {
    const { dispatchPageType } = this.props;
    const href = window.location.pathname;

    switch (href) {
      case ("/"):
        dispatchPageType(Pages.Home);

        break;
      case ("/portfolio"):
        dispatchPageType(Pages.Portfolio);

        break;
      case ("/process"):
        dispatchPageType(Pages.Process);

        break;
      case ("/about"):
        dispatchPageType(Pages.About);

        break;
      case ("/contacts"):
        dispatchPageType(Pages.Contacts);
        
        break;
      default:
        break;
      }
    }

    render() {
      const { handleClick } = this.props;

      return <>
        <Nav>
          <Ul>
            <Li onClick={this.checkingUrl}>
              <Link to="/" activeClassName="active" onClick={handleClick()}>
                <Logo src={logo} />
              </Link>
            </Li>
            <Li onClick={this.checkingUrl}>
              <Link to="/portfolio" activeClassName="active" onClick={handleClick()}>Portfolio</Link>
            </Li>
            <Li onClick={this.checkingUrl}>
              <Link to="/process" activeClassName="active" onClick={handleClick()}>Process</Link>
            </Li>
            <Li onClick={this.checkingUrl}>
              <Link to="/about" activeClassName="active" onClick={handleClick()}>About</Link>
            </Li>
            <Li onClick={this.checkingUrl}>
              <Link to="/contacts" activeClassName="active" onClick={handleClick()}>Contacts</Link>
            </Li>
          </Ul> 
        </Nav>
      </>
    }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPageType: (page) => {
      switch (page) {
        case "start":
          return dispatch(pageStart());
        case "portfolio":
          return dispatch(pagePortfolio());
        case "process":
          return dispatch(pageProcess());
        case "about":
          return dispatch(pageAbout());
        case "contacts":
          return dispatch(pageContacts());
        default:
          return dispatch(pageStart());
      }
    }
  }
}

const Navigator = connect(mapStateToProps, mapDispatchToProps)(NavigatorBlock);

export default Navigator;
