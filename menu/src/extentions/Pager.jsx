import React from 'react';
import { Link } from 'react-router-dom';

import bottomArrow from '../images/bottomArrow.svg';
import topArrow from '../images/topArrow.svg';
import { Arrow, EndPage, Hr, ImgContainer, PagerContainer, StartPage } from './styled.js';

class Pager extends React.Component {
    constructor() {
        super();
        this.state = {
            numbers: {
                start: "00",
                end: "01"
            },
            url: {
                start: "/",
                end: "/portfolio"
            },
            isRefreshed: false      
        }
    }

    componentDidUpdate(){
        if (this.state.isRefresh) {
            this.refreshPage();
            this.setState({ isRefreshed: false });
        }
    }

    refreshPage = () => {
        let href = window.location.pathname;

        switch (href) {
            case ("/"):
                this.setState({
                    numbers: {
                        start: "00",
                        end: "01"
                    },
                    url: {
                        start: "/",
                        end: "/portfolio"
                    }   
                });
                break;
            case ("/portfolio"):
                this.setState({
                    numbers: {
                        start: "01",
                        end: "02"
                    },
                    url: {
                        start: "/",
                        end: "/process"
                    }
                });
                break;
            case ("/process"):
                this.setState({
                    numbers: {
                        start: "02",
                        end: "03"
                    },
                    url: {
                        start: "/portfolio",
                        end: "/about"
                    }
                });
                break;
            case ("/about"):
                this.setState({
                    numbers: {
                        start: "03",
                        end: "04"
                    },
                    url: {
                        start: "/process",
                        end: "/contacts"
                    }
                });
                break;
            case ("/contacts"):
                this.setState({
                    numbers: {
                        start: "04",
                        end: "05"
                    },
                    url: {
                        start: "/about",
                        end: "/"
                    }
                });
                break;
            default:
                break;
        }

        this.setState({isRefreshed: true});

        console.log(this.state);
    }

    render() {
        let { numbers, url } = this.state;

        return (
            <PagerContainer>
                <Link onClick={this.refreshPage} to={url.start} activeClassName="active">
                    <Arrow>
                        <ImgContainer style={{ margin: '21px 0 0 -60px' }}>
                            <img src={topArrow} />
                        </ImgContainer>
                    </Arrow>
                </Link>

                <StartPage>{numbers.start}</StartPage>
                <Hr />
                <EndPage>{numbers.end}</EndPage>

                <Link onClick={this.refreshPage} to={url.end} activeClassName="active">
                    <Arrow>
                        <ImgContainer style={{ margin: '21px 0 0 500px' }}>
                            <img src={bottomArrow} />
                        </ImgContainer>
                    </Arrow>
                </Link>
                
            </PagerContainer>
        )
    };
}

export default Pager;