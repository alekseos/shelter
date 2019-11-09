import { createGlobalStyle, css, FlattenInterpolation } from 'styled-components';
import LatoBlackEot from 'Styles/fonts/fonts-packs/lato-black/lato-black-webfont.eot';
import LatoBlackTtf from 'Styles/fonts/fonts-packs/lato-black/lato-black-webfont.ttf';
import LatoBlackWoff from 'Styles/fonts/fonts-packs/lato-black/lato-black-webfont.woff';
import LatoRegularEot from 'Styles/fonts/fonts-packs/lato-regular/lato-regular-webfont.eot';
import LatoRegularTtf from 'Styles/fonts/fonts-packs/lato-regular/lato-regular-webfont.ttf';
import LatoRegularWoff from 'Styles/fonts/fonts-packs/lato-regular/lato-regular-webfont.woff';
import RobotoSlabRegularEot from 'Styles/fonts/fonts-packs/roboto-slab/robotoslab-regular-webfont.eot';
import RobotoSlabRegularTtf from 'Styles/fonts/fonts-packs/roboto-slab/robotoslab-regular-webfont.ttf';
import RobotoSlabRegularWoff from 'Styles/fonts/fonts-packs/roboto-slab/robotoslab-regular-webfont.woff';
import { device } from 'Utils/adaptation';

export const GlobalStyle = createGlobalStyle`
  ${FontFaces()};

  body {
    font-family: 'latoregular';
    font-size: 25px;
    padding: 0;
    margin: 0;

    @media ${device.laptop} {
      font-size: 20px;
    }
  }

  .active {
    color: blue !important;
  }
`;

export function FontFaces(): FlattenInterpolation<any> {
  return css`
    @font-face {
      font-family: 'latoregular';
      src: url('${LatoRegularEot}');
      src: url('${LatoRegularEot}?#iefix') format('embedded-opentype'),
      url('${LatoRegularWoff}') format('woff'),
      url('${LatoRegularTtf}') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'roboto_slabregular';
      src: url('${RobotoSlabRegularEot}');
      src: url('${RobotoSlabRegularEot}#iefix') format('embedded-opentype'),
      url('${RobotoSlabRegularWoff}') format('woff'),
      url('${RobotoSlabRegularTtf}') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'latoblack';
      src: url('${LatoBlackEot}');
      src: url('${LatoBlackEot}?#iefix') format('embedded-opentype'),
      url('${LatoBlackWoff}') format('woff'),
      url('${LatoBlackTtf}') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `;
}