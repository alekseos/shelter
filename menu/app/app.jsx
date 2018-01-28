import React from 'react';
import * as Redux from 'redux';

import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import styled from 'styled-components';

import { filter, works } from './reducers/filter';

import Input from './components/Input/Input';
import Menu from './components/Menu/MenuContainer';
import Works from './components/Works/WorksContainer';

import WorksPackDemo from './data/WorksPack/WorksPack-demo.json';

const Wrapper = styled.div`
	margin: 20px;
`

const appReducers = combineReducers({
  filter, works
})

class App extends React.Component {
	constructor () {
		super ();

		this.store = Redux.createStore(
	    appReducers,
	    {
				works: WorksPackDemo,
				filter: {
					filterType: 'allProject'
				},
	    }
	  );

	}

	render() {
		return <Provider store={this.store}>
			<Wrapper>
				<Input
					placeholder={'Input'}
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
