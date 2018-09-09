import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import TextArea from '../../components/TextArea/TextArea.jsx';
import { ContactsContainer } from './styled.js';

export const Contacts = () => {
	return <ContactsContainer>
		<div>
			<Input
				placeholder={'Name'}
			/>
			<Input
				placeholder={'Surname'}
			/>
			<Input
				placeholder={'Phone'}
			/>
			<TextArea />

			<Link exact to="/thanksForm" activeClassName="active">
				<Button
					style={{ margin: '0 auto' }}
					content={'Send'}
				/>
			</Link>
		</div>
	</ContactsContainer>
}