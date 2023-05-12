import React from 'react';
import { _Text, _View, HeaderCenter } from '..';

const HeaderCenterComponent = ({ name, Namecolor }) => {
  return (
    <_View>
      <_Text size={18} color={Namecolor}>
        {name}
      </_Text>
    </_View>
  );
};

export { HeaderCenterComponent };
