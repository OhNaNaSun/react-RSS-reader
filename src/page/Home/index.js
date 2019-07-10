import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import GeoLocation from './components/GeoLocation';
import SearchBox from './components/SearchBox';

const Home = () => (
  <div className="Home">
    <GeoLocation />
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <header style={style}>
            {' '}
            <SearchBox />
          </header>
        )}
      </Sticky>
      <div style={{ height: '700px', border: 'blue 1px solid' }} />
    </StickyContainer>
  </div>
);

export default Home;
