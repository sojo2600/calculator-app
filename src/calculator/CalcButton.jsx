import React from 'react';
import Button from 'react-bootstrap/Button';

export default ({ onClick, value } ) => {
  return (
    <Button
      onClick={ e => onClick(value) }
      style={{ width: '38px' }}
    >
      { value }
    </Button>
  )
}
