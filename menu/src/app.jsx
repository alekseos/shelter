import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as Redux from 'redux';
import { combineReducers } from 'redux';
import styled from 'styled-components';

import WorksPackDemo from './data/WorksPack/WorksPack.jsx';
import { filter } from './reducers/filter.js';
import { works } from './reducers/works.js';
import { Benefits } from './screens/benefits.jsx';
import { Form } from './screens/form.jsx';
import { Home } from './screens/home.jsx';
import { Portfolio } from './screens/portfolio.jsx';

const Wrapper = styled.div`
	margin: 20px;`;
const Ul = styled.ul`
	list-style-type: none;
	text-decoration: none;`;
const Li = styled.li`
	display: inline-block;
	margin-right: 20px;
	float: right;
	height: 100%;
	line-height: 45px;`;
const Nav = styled.nav`
	width: 95vh;
	height: 45px;
	padding-right: 20vh;
	-webkit-transform-origin: left center;
  -webkit-transform:rotate(-90deg) translateX(-100%);
	box-sizing: border-box;

	a {
		text-decoration: none;
		color: inherit;
	}`;
const Content = styled.div`
  margin: 0 80px;`;

const appReducers = combineReducers({
  works, filter
});

const Skelet = () => (
  <Router>
    <div>
			<div>
				<Nav>
					<Ul>
						<Li>
							<Link to="/">Home</Link>
						</Li>
						<Li>
							<Link to="/benefits">Benefits</Link>
						</Li>
						<Li>
							<Link to="/portfolio">Portfolio</Link>
						</Li>
						<Li>
							<Link to="/form">Form</Link>
						</Li>
					</Ul>
				</Nav>
			</div>

			<Content>
				<Route exact path="/" component={Home} />
				<Route path="/benefits" component={Benefits} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/form" component={Form} />
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


export default App;
