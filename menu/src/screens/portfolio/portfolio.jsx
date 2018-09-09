import React from 'react';

import Menu from '../../components/Menu/MenuContainer.jsx';
import Works from '../../components/Works/WorksContainer.jsx';

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
		<Works/>
	</div>
};
