import React from 'react';
import { PopularM } from './PopularM';
import { TopM } from './TopM';
import { CurrentM } from './CurrentM';
import { TrendingM } from './TrendingM';
import LandingPage from './LandingPage';

export const Pageone = () => {
  return (
    <>
    <LandingPage />
    <PopularM />
    <TopM />
    <CurrentM />
    <TrendingM />
    </>
  );
};
