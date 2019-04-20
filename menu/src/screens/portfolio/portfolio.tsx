import React from 'react';

import Menu from '../../components/Menu/MenuContainer.tsx';
import Works from '../../components/Works/WorksContainer.tsx';
import { WorksWrapper } from './styled.ts';

export const Portfolio = () => {
	return <div>
		<Menu
			titles={[
				'allProject',
				'landingPage',
				'elements',
				'design'
			]}
		/>
		<WorksWrapper>
			<Works />
		</WorksWrapper>
	</div>
};
