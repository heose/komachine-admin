import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as errorActions from '../redux/modules/error/reducers';

class Error extends Component {
  componentDidMount() {
    const { ErrorActions } = this.props;
    ErrorActions.unsetErrStatus();
  }
  render() {
    const { statusCode } = this.props;
    return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
  }
}

const mapDispatchToProps = dispatch => ({ ErrorActions: bindActionCreators(errorActions, dispatch) });

export default connect(
  null,
  mapDispatchToProps,
)(Error);
