import { pageAbout, pageContacts, pagePortfolio, pageProcess, pageStart } from 'Actions/page';
import logo from 'Images/logo.png';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Li, Logo, Nav, Ul } from './styled';

class NavigatorBlock extends React.Component {
    constructor() {
        super();
    }

    checkingUrl = () => {
        let { dispatchPageType } = this.props;
        let href = window.location.pathname;

        switch (href) {
            case ("/"):
                dispatchPageType("start");
                break;
            case ("/portfolio"):
                dispatchPageType("portfolio");
                break;
            case ("/process"):
                dispatchPageType("process");
                break;
            case ("/about"):
                dispatchPageType("about");
                break;
            case ("/contacts"):
                dispatchPageType("contacts");
                break;
            default:
                break;
        }
    }

    render() {
        let { handleClick } = this.props;

        return <div>
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
        </div>
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
