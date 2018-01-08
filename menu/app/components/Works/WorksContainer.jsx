import React from 'react';

import styled from 'styled-components';

import WorksItem from '../Works/WorksItem';

const Wrapper = styled.section`
  background-color: grey;
  display: flex;
  padding: 20px 0;
`

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

class Works extends React.Component {
  constructor(props) {
    super(props);
  }

  mappingItems = () => {
    let { posts }  = this.props;

    const titleItems = posts.map( (post, key) => <div> <WorksItem image={post.image} title={post.title} key={key} /></div>);

    return <WorksContainer>{titleItems}</WorksContainer>;
  }

  render() {
    return <Wrapper>
      {this.mappingItems()}
    </Wrapper>
  }
}

export default Works;
