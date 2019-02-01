import { withRouter } from 'next/router';
import withLink from '~/lib/with-link';
import withComponentFromProp from '~/lib/with-component-from-prop';

export default withRouter(withLink(withComponentFromProp('component')));
