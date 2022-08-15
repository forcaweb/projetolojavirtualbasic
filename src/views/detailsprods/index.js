import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Closet } from './closet';
import { Eletronic } from './eletronic';
import { OthersProds } from './others';

export function DetailsProds() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useParams();
  if (t === 'eletronic') return <Eletronic />;
  if (t === 'closet') return <Closet />;
  if (t === 'others') return <OthersProds />;
  if (t !== 'eletronic' || t !== 'closet' || t !== 'others') {
    window.location = '/';
  }
  return null;
}
