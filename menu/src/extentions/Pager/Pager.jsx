import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { pageAbout, pageContacts, pagePortfolio, pageProcess, pageStart } from '../../actions/page.js';
import bottomArrow from '../../images/bottomArrow.svg';
import topArrow from '../../images/topArrow.svg';
import { Arrow, EndPage, Hr, ImgContainer, PagerContainer, StartPage } from './styled.js';

class PagerBlock extends React.Component {
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
        let { page } = this.props;

        if (page.url === undefined) {
            page = page.page;
        }

        return (
            page ?
                <PagerContainer>
                    <div onClick={this.checkingUrl}>
                        <Link to={page.url.start} activeClassName="active">
                            <Arrow>
                                <ImgContainer style={{ margin: '21px 0 0 -60px' }}>
                                    <img src={topArrow} />
                                </ImgContainer>
                            </Arrow>
                        </Link>
                    </div>

                    <StartPage>{page.numbers.start}</StartPage>
                    <Hr />
                    <EndPage>{page.numbers.end}</EndPage>

                    <div onClick={this.checkingUrl}>
                        <Link to={page.url.end} activeClassName="active">
                            <Arrow>
                                <ImgContainer style={{ margin: '21px 0 0 500px' }}>
                                    <img src={bottomArrow} />
                                </ImgContainer>
                            </Arrow>
                        </Link>
                    </div>

                </PagerContainer>
            :
            <div></div>
        )
    }
}

PagerBlock.defaultProps = {
    page: {
        numbers: {
            start: "00",
            end: "01"
        },
        url: {
            start: "/",
            end: "/portfolio"
        },
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

const Pager = connect(mapStateToProps, mapDispatchToProps)(PagerBlock);

export default Pager;