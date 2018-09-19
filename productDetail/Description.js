// @flow
import React from 'react';
import { Accordion } from 'native-base';

type Props = {
    // navigation: any,
    description: string
}

export default function Description(props: Props) {
  const data = [{ title: 'Description', content: props.description }];
  return <Accordion dataArray={data} icon="add" expandedIcon="remove" />;
}
