import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Input from '../app/components/Input/Input';
import Menu from '../app/components/Menu/MenuContainer';
import Works from '../app/components/Works/WorksContainer';

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
			<Works
				titles={[
					'The first project',
					'TMy favorite work',
					'The first project',
					'The second',
					'The 5',
				]}
				images={[
					'../../app/images/1.png',
					'../../app/images/2.png',
					'../../app/images/3.png',
					'../../app/images/4.png',
					'../../app/images/5.png',
				]}
			/>

		</Wrapper>
	}
}

export default App;
