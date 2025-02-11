import React from "react";

export const withLoading = loadingProps => WrappedComponent => {
  return class loadingHOC extends React.Component {
    render() {
      return !loadingProps ? (
        <div className="loader"></div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
