import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import WhitelabelHero from '../components/WhitelabelHero';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero />
        <Partners />
        <Features />
        <Newsletter />
        <WhitelabelHero isHome />
      </Layout>
    );
  }
}
