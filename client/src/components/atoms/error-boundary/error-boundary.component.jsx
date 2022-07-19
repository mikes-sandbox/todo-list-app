import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor () {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <React.Fragment>
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
          </ErrorImageOverlay>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
