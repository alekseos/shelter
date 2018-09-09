import React from 'react';

import {
  Count,
  ProcessContainer,
  ProcessDescription,
  ProcessItem,
  ProcessItemContainer,
  ProcessSection,
  ProcessTitle,
} from './styled.js';

export const Process = () => {
  return <ProcessContainer>
    {
      structure.map(item => {
        const arrayItems = item.items;

        return (
          <ProcessSection>
            <ProcessTitle>
              <Count>{item.count}</Count>
              {item.title}
            </ProcessTitle>
            {
              arrayItems.map(arrayItem => {
                return (
                  <ProcessItemContainer>
                    <ProcessItem>
                      <img src={arrayItem.link} alt={arrayItem.alt} />
                      <ProcessDescription>{arrayItem.description}</ProcessDescription>
                    </ProcessItem>
                  </ProcessItemContainer>
                )
              })
            }
          </ProcessSection>
        )
      })
    }

  </ProcessContainer>
}


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
