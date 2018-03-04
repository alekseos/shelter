import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WorksItem from '../Works/WorksItem';
const Wrapper = styled.section`
  background-color: grey;
  display: flex;
  padding: 20px 0;`
const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;`

class WorksBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  mappingItems = () => {
    let { posts, filter }  = this.props;

    // const titleItems = posts.data.filter(post => post.tags.includes(filter)).map( (post, key) => {
    //   <WorksItem
    //     image={post.image}
    //     title={post.title}
    //     key={key}
    //   />
    // });

    const titleItems = posts.map( (post, key) => {
      <WorksItem
        image={post.image}
        title={post.title}
        key={key}
      />
    });

    return <WorksContainer>{titleItems}</WorksContainer>;
  }

  render() {
    return <Wrapper>
      {this.mappingItems()}
    </Wrapper>
  }
}

const mapStateToProps = (state = {}) {
  return {
    posts: state.works.data,
    filter: state.filter
  }
}

const Works = connect(mapStateToProps)(WorksBlock);


export default Works;
