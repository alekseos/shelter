import { Pages } from 'screens/enum';

export type NavigatorProps = {
  dispatchPageType: (type: Pages) => void;
  handleClick: () => void;
}