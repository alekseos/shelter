import React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import styled from 'styled-components';
import { filter } from './reducers/filter';
import { works } from './reducers/works';
import Input from './components/Input/Input';
import Menu from './components/Menu/MenuContainer';
import Works from './components/Works/WorksContainer';
import WorksPackDemo from './data/WorksPack/WorksPack.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Wrapper = styled.div`
	margin: 20px;`;
const Ul = styled.ul`
	list-style-type: none;`;
const Li = styled.li`
	display: inline-block;
	margin-right:20px;
	float:right;
	height:100%;
	line-height:45px;`;
const Nav = styled.nav`
	width:100vh;
	height:45px;
	-webkit-transform-origin: left center;
  -webkit-transform:rotate(-90deg) translateX(-100%);`;
const Content = styled.div`
  margin: 0 0 0 30px;`;
const H1 = styled.h1`
	line-height: 30px;
  font-size: 85px;
`;
const Description = styled.div`
	font-family: roboto_slabregular;
`;

const appReducers = combineReducers({
  works, filter
});

const Skelet = () => (
  <Router>
    <div>
			<Nav>
				<Ul>
					<Li>
						<Link to="/">Home</Link>
					</Li>
					<Li>
						<Link to="/portfolio">Portfolio</Link>
					</Li>
					<Li>
						<Link to="/form">Form</Link>
					</Li>
				</Ul>
			</Nav>

			<Content>
				<Route exact path="/" component={Home} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/form" component={Form} />
			</Content>
    </div>
  </Router>
);

const Home = () => {
	return <div>
		<H1>Design</H1>
		<H1>Development</H1>
		<H1>Promotion</H1>
		<Description>
			You have been looking for and found!
			Our team will help your bussines
			to rise to a new level.
		</Description>
	</div>
};

const Portfolio = () => {
	return <div>
		<Menu
			titles={[
				'allProject',
				'landingPage',
				'onlineStore',
				'app',
				'design'
			]}
		/>
		<Works/>
	</div>
};

const Form = () => {
	return <div>
		<Input
			placeholder={'Name'}
		/>
		<Input
			placeholder={'Female'}
		/>
		<Input
			placeholder={'Phone'}
		/>
	</div>
}

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
