import * as React from 'react';
import { Title, LayoutContainer } from './home.styles';


export interface IAppProps {
  title: string;
}

export default function Layout (props: IAppProps) {
  return (
    <>
      <LayoutContainer>
        <Title>{props.title}</Title>
      </LayoutContainer>
      </>
  );
}
