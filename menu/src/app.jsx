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

const Skelet = () => (
  <Router>
    <div>
		<NavContainer>
			<Nav>
				<Ul>
					{/* <Li>
						<Link exact to="/" activeClassName="active">Home</Link>
					</Li> */}
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
		padding-right: 177px;
		width: 94vh;
	}
	/* } */
	`;
const Content = styled.div`
	margin: 0 80px;
	height: 95vh;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0 220px;
		height: 95vh;
	/* } */
	`;
const appReducers = combineReducers({
	works, filter
});

export default App;
