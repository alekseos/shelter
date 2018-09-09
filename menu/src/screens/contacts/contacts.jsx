import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import TextArea from '../../components/TextArea/TextArea.jsx';
import { ContactsContainer, LeftPart, RightPart } from './styled.js';

export const Contacts = () => {
	return <ContactsContainer>
		<LeftPart>
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
		</LeftPart>

		<RightPart>
			<h1>Address</h1>
			<p>Karavannaya, 10, Saint-Petersburg, Russia</p>
			<h1>More information</h1>
			<a href="tel:+7(981)7607250"><p>+7 (981) 760 — 72 — 50</p></a>
			<a href="mailto:veexela@gmail.com?subject=Вопрос по работе с сайтами"><p>veexela@gmail.com</p></a>
		</RightPart>
	</ContactsContainer>
}