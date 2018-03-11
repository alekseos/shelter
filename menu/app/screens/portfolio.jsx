import React from 'react';
import Menu from '../components/Menu/MenuContainer';
import Works from '../components/Works/WorksContainer';

export const Portfolio = () => {
	return <div>
		<Menu
			titles={[
				'allProject',
				'landingPage',
				'onlineStore',
				'app',
				'design'
			]}
		/>
		<Works/>
	</div>
};
