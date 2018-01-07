import React from 'react';

import styled from 'styled-components';

import MenuItem from '../Menu/MenuItem';

const Wrapper = styled.section`
  display: flex;
`
const MenuContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    titles: [
      'first',
      'second',
      'third',
      'fourth'
    ]
  }

  mappingItems = () => {
    let titles = this.props.titles;

    const titleItems = titles.map( (title, key) => <div> <MenuItem title={title} key={key} /></div>);

    return <MenuContainer>{titleItems}</MenuContainer>;
  }

  render() {
    return <Wrapper>
        {this.mappingItems()}
    </Wrapper>
  }
}

export default Menu;
