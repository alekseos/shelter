import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as Redux from 'redux';
import { combineReducers } from 'redux';

import logo from '../src/images/logo.png';
import WorksPackDemo from './data/WorksPack/WorksPack.jsx';
import Pager from './extentions/Pager.jsx';
import { filter } from './reducers/filter.js';
import { works } from './reducers/works.js';
import { About } from './screens/about/about.jsx';
import { Contacts } from './screens/contacts/contacts.jsx';
import { Home } from './screens/home/home.jsx';
import { Portfolio } from './screens/portfolio/portfolio.jsx';
import { Process } from './screens/process/process.jsx';
import { ThanksForm } from './screens/thanksForm/thanksForm.jsx';
import { Content, Li, Logo, Nav, NavContainer, Slider, SliderContainer, Ul, Wrapper } from './styled.js';

const Skelet = () => (
  <Router>
    <div>
		<NavContainer>
			<Nav>
				<Ul>
					<Li>
						<Link exact to="/" activeClassName="active">
							<Logo src={logo} />
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

const appReducers = combineReducers({
	works, filter
});

export default App;
