import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const LightTheme = createMuiTheme({
  palette: {
    contrastThreshold: 3,
    error: red,
    primary: indigo,
    secondary: pink,
    tonalOffset: 0.2
  }
});

export default LightTheme;
