import React from 'react';
import styled from '@emotion/styled';

const DividerLine = styled.div`
  height: 1px;
  background-color: ${({theme}) => theme.colors.horizontalDivider};
`;

export default function HorizontalDivider(): React.ReactElement {
  return <DividerLine />;
}
