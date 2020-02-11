import Menu from 'Components/Menu/MenuContainer';
import Works from 'Components/Works/WorksContainer';
import * as React from 'react';

import { WorksWrapper } from './styled';

export const Portfolio = () => {
	return <>
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
	</>
};
