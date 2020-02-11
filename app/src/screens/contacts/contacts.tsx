import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';
import TextArea from 'Components/TextArea/TextArea';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ContactsContainer, LeftPart, RightPart } from './styled';

export const Contacts = () => {
	return <ContactsContainer>
		<LeftPart>
			<h1>Address</h1>
			<p>Karavannaya, 10, Saint-Petersburg, Russia</p>
			<h1>More information</h1>
			
			<a href="tel:+79817607250">
				<p>+7 (981) 760-73-50</p>
			</a>
			<a href="mailto:veexela@gmail.com?subject=Вопрос по работе с сайтами">
				<p>veexela@gmail.com</p>
			</a>
		</LeftPart>

		<RightPart>
			<Input
				placeholder={'Name'}
			/>
			<Input
				placeholder={'Phone'}
			/>
			<Input
				placeholder={'Email'}
			/>
			<TextArea 
				placeholder={'Fill your message here'}
			/>

			<Link exact to="/thanksForm" activeClassName="active">
				<Button
					content={'Send'}
				/>
			</Link>
		</RightPart>
	</ContactsContainer>
}