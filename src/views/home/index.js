import * as React from 'react';
import { SlideComponent } from '../../components/home/slideCompnent';
import { CardHistoryComponent } from '../../components/home/cardHistoryCompnent';
import { CardInfoComponent } from '../../components/home/cardInfoCompnent';
import { CardProdComponent } from '../../components/home/cardProdCompnent';
import './swiper-personalize.css';
import './home.css';

export function Home() {
  return (
    <div className='homeContainer'>
      <SlideComponent />
      <CardInfoComponent />
      <CardHistoryComponent />
      <CardProdComponent />
    </div>
  );
}
