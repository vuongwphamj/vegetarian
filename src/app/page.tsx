'use client'

import * as React from 'react';

import ProductHero from '@modules/views/AppBody';
import withRoot from '@modules/withRoot';
import AppHeader from '@modules/views/AppHeader';
import AppFooter from '@modules/views/AppFooter';

function Index() {
  return (
    <React.Fragment>
      <AppHeader />
      <ProductHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
