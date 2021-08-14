import * as React from 'react';
import { connect } from 'react-redux';

import { WorksContainer, WrapperContainer } from './styled';
import WorksItem from './WorksItem';

class WorksBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  mappingItems = () => {
    const { works, filter }  = this.props;

    const titleItems = works
      .filter(post => post.tags.includes(filter.filter))
        .map((work, key) => {
          return <WorksItem
            image={work.image}
            title={work.title}
            key={key}
          />
    });

    return <WorksContainer>{titleItems}</WorksContainer>;
  }

  render() {
    return <WrapperContainer>
      {this.mappingItems()}
    </WrapperContainer>
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
