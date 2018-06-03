import React from 'react';

import Button from '../components/Button/Button.jsx';
import Input from '../components/Input/Input.jsx';

export const Form = () => {
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
		<Button
			style={{margin: '0 auto'}}
			content={'Send'}
		/>
	</div>
}
