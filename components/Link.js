import React from 'react';
import {withTheme} from 'styled-components';
import withLink from '../lib/with-link';
import withComponentFromProp from '../lib/with-component-from-prop';


export default withLink(withTheme(withComponentFromProp('component')));
