import React from 'react';
import styled from 'styled-components';

const structure = [
  {
    count: 1,
    title: 'Plan',
    items: [
      {
        link: '../../src/images/benefits/brief.svg',
        alt: 'Kiwi standing on oval',
        description: 'Creating breaf'
      },
      {
        link: '../../src/images/benefits/$.svg',
        alt: 'Kiwi standing on oval',
        description: 'Prepaying 50% of price'
      },
      {
        link: '../../src/images/benefits/zoom.svg',
        alt: 'Kiwi standing on oval',
        description: 'Research MoodBoard'
      }
    ]
  },
  {
    count: 2,
    title: 'Conception',
    items: [
      {
        link: '../../src/images/benefits/doc.svg',
        alt: 'Kiwi standing on oval',
        description: 'Designing prototype'
      },
      {
        link: '../../src/images/benefits/chat.svg',
        alt: 'Kiwi standing on oval',
        description: 'Presentation Feedback'
      },
      {
        link: '../../src/images/benefits/scissors.svg',
        alt: 'Kiwi standing on oval',
        description: 'Correction'
      }
    ]
  },
  {
    count: 3,
    title: 'Launch',
    items: [
      {
        link: '../../src/images/benefits/des.svg',
        alt: 'Kiwi standing on oval',
        description: 'Final preview'
      },
      {
        link: '../../src/images/benefits/rupor.svg',
        alt: 'Kiwi standing on oval',
        description: 'Development'
      },
      {
        link: '../../src/images/benefits/dev.svg',
        alt: 'Kiwi standing on oval',
        description: 'Promotion'
      }
    ]
  },
]

export const Benefits = () => {
  return <BenefitContainer>
    {
      structure.map(item => {
        const arrayItems = item.items;

        return (
          <BenefitSection>
            <BenefitTitle>
              <Count>{item.count}</Count>
              {item.title}
            </BenefitTitle>
            {
              arrayItems.map(arrayItem => {
                return (
                  <BenefitItemContainer>
                    <BenefitItem>
                      <img src={arrayItem.link} alt={arrayItem.alt} />
                      <BenefitDescription>{arrayItem.description}</BenefitDescription>
                    </BenefitItem>
                  </BenefitItemContainer>
                )
              })
            }
          </BenefitSection>
        )
      })
    }

  </BenefitContainer>
}

const BenefitContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;
const BenefitSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    align-items: center;
  }
`;
const BenefitTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
const Count = styled.span`
  background-color: blue;
  border-radius: 40px;
  padding: 5px 10px 5px 10px;
  color: white;
  margin: 0 10px 0 0;
`;
const BenefitDescription = styled.div`
  margin: 20px 0 0 0;
  max-width: 100px;
  text-align: center;
`;
const BenefitItem = styled.div`
  height: 170px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const BenefitItemContainer = styled.div`

`;
