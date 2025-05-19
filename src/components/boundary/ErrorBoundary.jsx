import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Xatolik ErrorBoundary ichida ushlanib qolindi:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Nimadirdan xatolik yuz berdi.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
