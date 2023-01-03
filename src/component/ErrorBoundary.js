import React from "react";
import { DefaultBoundaryError } from "./Errors";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError
      ? this.props.default ? <DefaultBoundaryError /> : this.props.errorElement
      : this.props.children;
  }
}
