import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers } from 'redux';
import * as Redux from 'redux';

import WorksPackDemo from './data/WorksPack/WorksPack.jsx';
import Navigator from './extentions/Navigator/Navigator.jsx';
import Pager from './extentions/Pager/Pager.jsx';
import { filter } from './reducers/filter.js';
import { page } from './reducers/page.js';
import { works } from './reducers/works.js';
import { About } from './screens/about/about.jsx';
import { Contacts } from './screens/contacts/contacts.jsx';
import { Home } from './screens/home/home.jsx';
import { Portfolio } from './screens/portfolio/portfolio.jsx';
import { Process } from './screens/process/process.jsx';
import { ThanksForm } from './screens/thanksForm/thanksForm.jsx';
import { Content, NavContainer, Slider, SliderContainer, Wrapper } from './styled.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isResfreshed: true,
			hasVScroll: false
		};

		this.store = Redux.createStore(
			appReducers,
			{
				works: WorksPackDemo,
				filter: 'allProject',
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
			},
			(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
		);
	}

	componentDidMount() {
		this.checkingScrollBar();
	} 

	componentDidUpdate() {
		if (this.state.isRefreshed) {
			this.checkingScrollBar();
			this.setState({ isRefreshed: false });
		}
	} 

	checkingScrollBar = () => {
		console.log('here');

		let hasVScroll = document.body.scrollHeight > document.body.clientHeight;

		if (hasVScroll) {
			this.setState({ hasVScroll: true })
		} else {
			this.setState({ hasVScroll: false })
		}
	}

	refreshPage = () => {
		this.setState({ isRefreshed: true });
	}

	render() {
		return <Provider store={this.store}>
			<Wrapper>
				<Router>
					<div>
						<NavContainer>
							<Navigator handleClick={this.refreshPage}/>
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
							{
								this.state.hasVScroll ? (
									<Slider onClick={this.refreshPage} style={{ left: "-151px" }}>
										<Pager />
									</Slider>
								) : (
									<Slider onClick={this.refreshPage}>
										<Pager />
									</Slider>
								)
							}
						</SliderContainer>
					</div>
				</Router>
			</Wrapper>
		</Provider>
	}
}

const appReducers = combineReducers({
	works, filter, page
});

export default App;
