import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const WrapperContainer = styled.section`
  display: flex;
  padding: 20px 0;
`;

export const WorksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: scroll;

	@media ${device.laptop} {
    flex-wrap: wrap;
    overflow: scroll;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 10px 75px 10px;
`;

export const Item = styled.div`
  cursor: pointer;
	height: 30vh;
  overflow: hidden;

  &:hover .mask {
     opacity: 1;
     background-color:rgba(0,0,0, 0.4);
  }
`;

export const Mask = styled.div`
   box-sizing:border-box;
   height: 100%;
   left: 0;
   opacity: 0;
   overflow:visible;
   position: absolute;
   top: 0;
   transition: all 0.6s ease-in-out;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Description = styled.div`
  color: white;
  text-align: center;
`;