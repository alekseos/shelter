import React from 'react';

import styled from 'styled-components';

import WorksItem from '../Works/WorksItem';

const Wrapper = styled.section`
  display: flex;
`

const WorksContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: grey;
`

class Works extends React.Component {
  constructor(props) {
    super(props);
  }

  mappingItems = () => {
    let { titles, images }  = this.props;

    const titleItems = images.map( (image, key) => <div> <WorksItem image={image} key={key} /></div>);

    return <WorksContainer>{titleItems}</WorksContainer>;
  }

  render() {
    return <Wrapper>
      {this.mappingItems()}
    </Wrapper>
  }
}

export default Works;
