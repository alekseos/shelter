import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import WorksItem from './WorksItem.jsx';

const Wrapper = styled.section`
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
    let { works, filter }  = this.props;

    console.log('filter_cloning:', filter, filter.filter);

    const titleItems = works
      .filter(post => post.tags.includes(filter.filter))
        .map( (work, key) => {

      return <WorksItem
        image={work.image}
        title={work.title}
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

const mapStateToProps = (state = {}) => {
  return {
    works: state.works,
    filter: state.filter,
  }
};

const Works = connect(mapStateToProps)(WorksBlock);


export default Works;
