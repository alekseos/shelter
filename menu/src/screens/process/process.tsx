import Money from 'Images/benefits/$.svg';
import Brief from 'Images/benefits/brief.svg';
import Chat from 'Images/benefits/chat.svg';
import Design from 'Images/benefits/des.svg';
import Development from 'Images/benefits/dev.svg';
import Doc from 'Images/benefits/doc.svg';
import Rupor from 'Images/benefits/rupor.svg';
import Scissors from 'Images/benefits/scissors.svg';
import Zoom from 'Images/benefits/zoom.svg';
import * as React from 'react';

import {
  Count,
  ProcessContainer,
  ProcessDescription,
  ProcessItem,
  ProcessItemContainer,
  ProcessSection,
  ProcessTitle,
} from './styled';

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
        );
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
        link: `${Brief}`,
        alt: 'Kiwi standing on oval',
        description: 'Creating brief'
      },
      {
        link: `${Money}`,
        alt: 'Kiwi standing on oval',
        description: 'Prepaying 50% of price'
      },
      {
        link: `${Zoom}`,
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
        link: `${Doc}`,
        alt: 'Kiwi standing on oval',
        description: 'Designing prototype'
      },
      {
        link: `${Chat}`,
        alt: 'Kiwi standing on oval',
        description: 'Presentation Feedback'
      },
      {
        link: `${Scissors}`,
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
        link: `${Design}`,
        alt: 'Kiwi standing on oval',
        description: 'Final preview'
      },
      {
        link: `${Development}`,
        alt: 'Kiwi standing on oval',
        description: 'Development'
      },
      {
        link: `${Rupor}`,
        alt: 'Kiwi standing on oval',
        description: 'Promotion'
      }
    ]
  },
]
