import { jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import expand from 'jss-plugin-expand';

const jss = create({
  plugins: [...jssPreset().plugins, expand()]
});

export default jss;
