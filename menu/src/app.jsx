import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as Redux from 'redux';
import { combineReducers } from 'redux';
import styled from 'styled-components';

import WorksPackDemo from './data/WorksPack/WorksPack.jsx';
import { filter } from './reducers/filter.js';
import { works } from './reducers/works.js';
import { About } from './screens/about.jsx';
import { Contacts } from './screens/contacts.jsx';
import { Home } from './screens/home.jsx';
import { Portfolio } from './screens/portfolio.jsx';
import { Process } from './screens/process.jsx';
import { ThanksForm } from './screens/thanksForm.jsx';

const Pager = () => {

	let href = window.location.pathname;
	let numbers = {
		start: "",
		end: ""
	};

	numbers.start = "00";
	numbers.end = "01";

	switch (href) {
		case ("/"):
			numbers.start = "00";
			numbers.end = "01";
			break;
		case ("/portfolio"):
			numbers.start = "01";
			numbers.end = "02";
			break;
		case ("/process"):
			numbers.start = "02";
			numbers.end = "03";
			break;
		case ("/about"):
			numbers.start = "03";
			numbers.end = "04";
			break;
		case ("/contacts"):
			numbers.start = "04";
			numbers.end = "05";
			break;
		default:
			numbers.start = "00";
			numbers.end = "01";
	}

	console.log(numbers);

	return (
		<PagerContainer>
			<Arrow>
				<ImgContainer style={{ margin: '21px 0 0 -60px' }}>
					<img src="../../src/images/topArrow.svg" />
				</ImgContainer>
			</Arrow>

			<StartPage>{numbers && numbers.start}</StartPage>
			<Hr />
			<EndPage>{numbers && numbers.end}</EndPage>

			<Arrow>
				<ImgContainer style={{ margin: '21px 0 0 500px' }}>
					<img src="../../src/images/bottomArrow.svg" />
				</ImgContainer>
			</Arrow>
		</PagerContainer>
	)
};

const Skelet = () => (
  <Router>
    <div>
		<NavContainer>
			<Nav>
				<Ul>
					<Li>
						<Link exact to="/" activeClassName="active">
							<Logo src="../src/images/logo.png" />
						</Link>
					</Li>
					<Li>
						<Link to="/portfolio" activeClassName="active">Portfolio</Link>
					</Li>
					<Li>
						<Link to="/process" activeClassName="active">Process</Link>
					</Li>
					<Li>
						<Link to="/about" activeClassName="active">About</Link>
					</Li>
					<Li>
						<Link to="/contacts" activeClassName="active">Contacts</Link>
					</Li>
				</Ul>
			</Nav>
		</NavContainer>

		<Content>
			<Route exact path="/" component={Home} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/process" component={Process} />
			<Route path="/about" component={About} />
			<Route path="/contacts" component={Contacts} />
			<Route path="/thanksform" component={ThanksForm} />
		</Content>

		<SliderContainer>
			<Slider>
				<Pager />
			</Slider>	
		</SliderContainer>
    </div>
  </Router>
);

class App extends React.Component {
	constructor () {
		super ();

		this.store = Redux.createStore(
	    appReducers,
	    {
			works: WorksPackDemo,
			filter: 'allProject',
	    }
	  );
	}

	render() {
		return <Provider store={this.store}>
			<Wrapper>
				<Skelet />
			</Wrapper>
		</Provider>
	}
}

const Wrapper = styled.div`
	margin: -50px 20px 0 20px;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0;
	/* } */
	`;
const Ul = styled.ul`
	list-style-type: none;
	text-decoration: none;`;
const Li = styled.li`
	display: inline-block;
	margin-right: 20px;
	float: right;
	height: 100%;
	line-height: 45px;

	&:first-child {
		margin-right: -45px;
	}
	
	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin-right: 40px;
	/* } */
	
	`;
const NavContainer = styled.div`
	line-height: 0;
`;
const Nav = styled.nav`
	height: 45px;
	padding-right: 26vh;
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(-90deg) translateX(-100%);
	box-sizing: border-box;

	a {
		text-decoration: none;
		color: inherit;
	}
	
	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		font-size: 30px;
		margin-top: 23px;
		position: absolute;
		left: 106px;
		padding-right: 0;
		width: 94vh;
	}
	/* } */
	`;
const Logo = styled.img`
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(90deg) translateX(-100%);
	width: 79px;
	height: 73px;
	content: 'logo here :)';
	margin: 26px 0px 0px 96px;
`;
const Content = styled.div`
	margin: 0 80px;
	height: 95vh;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0 220px;
		height: 95vh;
	/* } */
	`;
const SliderContainer = styled.div`
	line-height: 0;
	position: absolute;
    right: 0;
`;

const Slider = styled.nav`
	height: 45px;
	padding-right: 26vh;
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(-270deg) translateX(-100%);
	box-sizing: border-box;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		position: absolute;
		padding-right: 0;
		width: 94vh;
		height: 10px;
    	left: -142px;
    	font-size: 25px;
	}
	/* } */
`;
const Hr = styled.div`
	border-bottom: .5px solid black;
	margin: 0 0 0 67.4px;
    width: 277px;
`;

const StartPage = styled.div`

`;
const EndPage = styled.div`
	margin: 0 0 0 380px;
`;
const Arrow = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	margin-top: -45px;
	margin-left: -35px;
	width: 70px;
	height: 90px;

	&:hover polyline,
	&:focus polyline {
		stroke-width: 3;
	}

	&:active polyline {
  		stroke-width: 6;
  		transition: all 100ms ease-in-out;
	}

	polyline {
	transition: all 250ms ease-in-out;
	}
`;
const PagerContainer = styled.div`
	margin: 0 0 0 225px;
`;

const ImgContainer = styled.div`
`;

const appReducers = combineReducers({
	works, filter
});

export default App;
