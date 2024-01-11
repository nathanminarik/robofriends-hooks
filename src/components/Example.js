import React from 'react';

const Example = ({ name }) => {
  const currentTime = new Date().toLocaleTimeString();

  // convert the name to Uppercase

  return (
    <div>
      Hello {name} - the time is {currentTime}
    </div>
  );
};

export default Example;
