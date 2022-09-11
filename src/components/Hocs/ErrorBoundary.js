import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
    }
  
    render() {
      if (this.state.hasError) {
        if (this.props.isHome) {
          return <h1>Project does not working.</h1>;
        } else {
          return <h1>Component ({this.props.componentName}) does not working.</h1>;
        }
      }

      return this.props.children; 
    }
  }

  export default ErrorBoundary;
  