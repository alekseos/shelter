import React from 'react';
import styled from 'styled-components';

import bottomArrow from '../images/bottomArrow.svg';
import topArrow from '../images/topArrow.svg';

class Pager extends React.Component {
    constructor() {
        super();
    }

    decreaseHandler = () => {
        number.start = Number(number.start) - 1;
        number.end = Number(number.end) - 1;

        console.log("decrease");
    };

    increaseHandler = () => {
        number.end = Number(number.start) + 1;
        number.end = Number(number.end) + 1;

        console.log("increase");
    };

    render() {
        let href = window.location.pathname;
        let numbers = {
            start: "",
            end: ""
        };

        numbers.start = "00";
        numbers.end = "01";

        switch (href) {
            case ("/"):
                numbers.start = "00";
                numbers.end = "01";
                break;
            case ("/portfolio"):
                numbers.start = "01";
                numbers.end = "02";
                break;
            case ("/process"):
                numbers.start = "02";
                numbers.end = "03";
                break;
            case ("/about"):
                numbers.start = "03";
                numbers.end = "04";
                break;
            case ("/contacts"):
                numbers.start = "04";
                numbers.end = "05";
                break;
            default:
                numbers.start = "00";
                numbers.end = "01";
        }

        console.log(numbers);

        return (
            <PagerContainer>
                <Arrow onClick={this.decreaseHandler}>
                    <ImgContainer style={{ margin: '21px 0 0 -60px' }}>
                        <img src={topArrow} />
                    </ImgContainer>
                </Arrow>

                <StartPage>{numbers && numbers.start}</StartPage>
                <Hr />
                <EndPage>{numbers && numbers.end}</EndPage>

                <Arrow onClick={this.increaseHandler}>
                    <ImgContainer style={{ margin: '21px 0 0 500px' }}>
                        <img src={bottomArrow} />
                    </ImgContainer>
                </Arrow>
            </PagerContainer>
        )
    }
}

export default Pager;

const Hr = styled.div`
	border-bottom: .5px solid black;
	margin: 0 0 0 67.4px;
    width: 277px;
`;

const StartPage = styled.div`
	margin: 0;
`;
const EndPage = styled.div`
	margin: 0 0 0 394px;
`;
const Arrow = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	margin-top: -45px;
	margin-left: -35px;
	width: 70px;
	height: 90px;

	&:hover polyline,
	&:focus polyline {
		stroke-width: 3;
	}

	&:active polyline {
  		stroke-width: 6;
  		transition: all 100ms ease-in-out;
	}

	polyline {
	transition: all 250ms ease-in-out;
	}
`;
const PagerContainer = styled.div`
	margin: 0 0 0 225px;
`;

const ImgContainer = styled.div`
`;