/*import Navigator from 'native-navigation';
import { SCREENONE } from './routes';

Navigator.registerScreen(SCREENONE, () => require('./screens/ScreenOne'));*/


import Navigator from 'native-navigation';

Navigator.registerScreen(
  'SharedElementToScreen',
  () => require('./screens/SharedElementToScreen')
);

Navigator.registerScreen(
  'SharedElementFromScreen',
  () => require('./screens/SharedElementFromScreen')
);

Navigator.registerScreen(
  'ScreenOne',
  () => require('./screens/NavigationExampleScreen'),
  {
    initialConfig: {
      // title: 'FooBar',
    },
  }
);

Navigator.registerScreen(
  'TabScreen',
  () => require('./screens/TabScreen'),
  {
    mode: 'tabs',
  }
);
