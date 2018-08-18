import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button/Button.jsx';
import Input from '../components/Input/Input.jsx';
import TextArea from '../components/TextArea/TextArea.jsx';

export const Form = () => {
	return <FormContainer>
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
	</FormContainer>
}

const FormContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;`;
const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;`;