import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Input from '../app/components/Input/Input';
import Menu from '../app/components/Menu/MenuContainer';

const Wrapper = styled.div`
	margin: 20px;
`

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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

		</Wrapper>
	}
}

export default App;
