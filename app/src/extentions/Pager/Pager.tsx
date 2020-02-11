import { pageAbout, pageContacts, pagePortfolio, pageProcess, pageStart } from 'Actions/page';
import Back from 'Images/back.svg';
import Next from 'Images/next.svg';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Arrow, Hr, Image, ImgContainer, PageNumber, PagerContainer } from './styled';


class PagerBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.checkingUrl();
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
                  <Back width={50} height={50}/>
              </Arrow>
            </Link>
          </div>

          <PageNumber>{page.numbers.start}</PageNumber>
          <Hr />
          <PageNumber>{page.numbers.end}</PageNumber>

          <div onClick={this.checkingUrl}>
            <Link to={page.url.end} activeClassName="active">
              <Arrow>
                <Next width={50} height={50} />
              </Arrow>
            </Link>
          </div>
        </PagerContainer>
      :
      <div></div>
    )
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