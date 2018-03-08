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
const Wrapper = styled.div`
	margin: 20px;`

const appReducers = combineReducers({
  works, filter
});

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
				<Input
					placeholder={'Name'}
				/>
				<Menu
					titles={[
						'All projects',
						'Landing pages',
						'Online stores',
						'Apps',
						'Design'
					]}
				/>
				<Works/>
			</Wrapper>
		</Provider>
	}
}


export default App;
