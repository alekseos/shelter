import Navigator from 'Extentions/Navigator/Navigator';
import Pager from 'Extentions/Pager/Pager';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { filter } from 'Reducers/filter';
import { page } from 'Reducers/page';
import { works } from 'Reducers/works';
import { combineReducers } from 'redux';
import * as Redux from 'redux';
import { About } from 'Screens/about/about';
import { Contacts } from 'Screens/contacts/contacts';
import { Home } from 'Screens/home/home';
import { Portfolio } from 'Screens/portfolio/portfolio';
import { Process } from 'Screens/process/process';
import { ThanksForm } from 'Screens/thanksForm/thanksForm';
import { GlobalStyle } from 'Styles/css/main';

import WorksPackDemo from './data/WorksPack/WorksPack';
import { Content, NavContainer, Slider, SliderContainer, Wrapper } from './styled';
import { AppProps, AppState } from './types';

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
	}
	
	public state = {
		isResfreshed: true,
		hasVScroll: false
	};

	public componentDidMount() {
		this.checkingScrollBar();
	} 

	public componentDidUpdate() {
		if (this.state.isRefreshed) {
			this.checkingScrollBar();
			this.setState({ isRefreshed: false });
		}
	} 

	public checkingScrollBar = () => {
		let hasVScroll = document.body.scrollHeight > document.body.clientHeight;

		if (hasVScroll) {
			this.setState({ hasVScroll: true })
		} else {
			this.setState({ hasVScroll: false })
		}
	}

	public refreshPage = () => {
		this.setState({ isRefreshed: true });
	}

	public render() {
		return <Provider store={store}>
			<GlobalStyle />
			<Wrapper>
				<Router>
					<div>
						<NavContainer>
							<Navigator handleClick={this.refreshPage}/>
						</NavContainer>

						<Content>
							<Route exact path="/" component={Home} />
							<Route exact path="/portfolio" component={Portfolio} />
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

const store = Redux.createStore(
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
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default App;
