import React from "react";

export const withLoading = loadingProp => WrappedComponent => {
  return class LoadingHOC extends React.Component {
    render() {
      console.log(loadingProp);
      return !loadingProp ? (
        <h1>loadingloadingloadingloadingloadingloadingloadingloading</h1>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
