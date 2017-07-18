import React from 'react';
import Helmet from 'react-helmet';

const Home = () => (
  <div>
    <Helmet
      title="Home"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:description', content: 'description of Home' },
        { name: 'twitter:image', content: 'http://path/to/image' },
        { property: 'og:title', content: 'Home' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://path/to/this/url' },
        { property: 'og:image', content: 'http://path/to/image' },
        { property: 'og:description', content: 'description of Home' },
      ]}
    />
    <h2>Home</h2>
  </div>
)

export default Home;
