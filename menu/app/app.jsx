import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'none'
		};
	}

	componentDidMount () {
	 	let firstNavElem = document.querySelector('.menu__item');
		this.setState({
			status: firstNavElem.textContent
		});
		firstNavElem.style.backgroundColor = '#41c7c2';
		firstNavElem.style.color = 'white';
		firstNavElem.classList.add('menu__item_active');
	}

	handlerMouse = (event) => {
		if(!event.target.classList.contains('menu__item_active')){
			if (event.target.style.backgroundColor === '#eee') {
				event.target.style.backgroundColor = '#beecea';
				event.target.style.color = 'white';
			}
		}
	}

	handlerMouseOut = (event) => {
		if(!event.target.classList.contains('menu__item_active')){
			if (event.target.style.backgroundColor === '#beecea') {
				event.target.style.backgroundColor = '#eee';
				event.target.style.color = '#7B8585';
			}
		}
	}

	handlerClick = (event) => {
		if(!event.target.classList.contains('menu__item_active')){
			let divs = document.querySelectorAll('.menu__item');
			for (let i = 0; i < divs.length; ++i) {
	  		divs[i].style.backgroundColor = '#eee';
				divs[i].style.color = '#7B8585';
				divs[i].classList.remove('menu__item_active');
			};

			this.setState({
				status: event.target.textContent
			});

			event.target.style.backgroundColor = '#41c7c2';
			event.target.style.color = 'white';

			event.target.classList.add('menu__item_active');
		}
	}

	render (func) {
		return <div>
			<div className="container">
				<div className = "menu">
					<div className = "menu__item" onClick = {this.handlerClick}
					onMouseEnter = {this.handlerMouse} onMouseOut = {this.handlerMouseOut}>
						Home
					</div>
					<div className = "menu__item" onClick = {this.handlerClick}
					onMouseEnter = {this.handlerMouse} onMouseOut = {this.handlerMouseOut}>
						Services
					</div>
					<div className = "menu__item" onClick = {this.handlerClick}
					onMouseEnter = {this.handlerMouse} onMouseOut = {this.handlerMouseOut}>
						About
					</div>
					<div className = "menu__item" onClick = {this.handlerClick}
					onMouseEnter = {this.handlerMouse} onMouseOut = {this.handlerMouseOut}>
						Contact us
					</div>
				</div>
			</div>
			<div className = "status">
				<p>Selected "{this.state.status}"</p>
			</div>
		</div>
	}
}

export default App;
