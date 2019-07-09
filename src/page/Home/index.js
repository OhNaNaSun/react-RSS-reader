import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Input } from 'antd';

const { Search } = Input;

const Home = () => (
  <div className="Home">
    Home hahaha
    <StickyContainer>
      <div>Geo location placeholder</div>
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight,
        }) => (
          <header style={style}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </header>
        )}
      </Sticky>
      <div style={{ height: '700px', background: 'blue' }} />
    </StickyContainer>
  </div>
);

export default Home;
