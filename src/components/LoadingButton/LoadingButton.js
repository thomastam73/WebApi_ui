import React from 'react';
import { Button } from '@material-ui/core';

const LoadingButton = (props) => {
  const { color, variant, isLoading, onClick, children } = props;
  return (
    <Button disabled={isLoading} color={color} variant={variant} onClick={onClick}>
      {children}
      {isLoading ? '...' : ''}
    </Button>
  );
};

export default LoadingButton;
