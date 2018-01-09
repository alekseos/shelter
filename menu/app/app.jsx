import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';

// import { Provider } from 'react-redux';
// import { combineReducers } from 'redux';

import styled from 'styled-components';

// import { filter } from 'reducers/filter';

import Input from '../app/components/Input/Input';
import Menu from '../app/components/Menu/MenuContainer';
import Works from '../app/components/Works/WorksContainer';

import * as WorksPack from '../app/data/WorksPack/WorksPack.json';
import * as WorksPackDemo from '../app/data/WorksPack/WorksPack-demo.json';

const Wrapper = styled.div`
	margin: 20px;
`

// const appReducers = combineReducers({
//   filter
// })

class App extends React.Component {
	constructor(props) {
		super(props);

		// this.store = Redux.createStore(
    //   appReducers,
    //   {
    //     works: WorksPackDemo.data,
    //   }
    // );
	}

	render() {
		//<Provider store={this.store}>
		return <Wrapper>

				<Input
					placeholder={'Input'}
				/>
				<Menu
					titles={[
						'All projects',
						'Portfolio',
						'Landing pages',
						'Online stores',
						'Apps',
						'Design'
					]}
				/>
				<Works
					posts={ WorksPackDemo.data }
				/>

			</Wrapper>

		// </Provider>
	}
}

export default App;
