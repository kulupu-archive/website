import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>On-chain governance</>,
    description: (
      <>
        Referendum proposals are submitted by users, and voted by coin holders. This user-driven governance system allows Kulupu to enact runtime upgrade easily.
      </>
    ),
  },
  {
    title: <>Forkless upgrade</>,
    description: (
      <>
        Thanks to the power of Substrate and WebAssembly, runtime upgrade can be activated without hard forks, greatly reducing the risks of network split.
      </>
    ),
  },
  {
    title: <>Voluntary taxation and treasury</>,
    description: (
      <>
        A public-good treasury system is both available and voluntary. Coin holders have the final say on how funds are spent.
      </>
    ),
  },
  {
    title: <>Actor-based smart contract</>,
    description: (
      <>
        Actor-based smart contract aims at solving some of the outstanding issues in normal call-based smart contract system like in Ethereum.
      </>
    ),
  },
  {
    title: <>Built on Substrate</>,
    description: (
      <>
        Kulupu uses the same underlying framework that is used to build Polkadot, allowing easy interoperability with the ecosystem.
      </>
    ),
  },
  {
    title: <>Signed mining</>,
    description: (
      <>
        Kulupu empowers a new design of proof-of-work algorithm called signed mining, reducing the risks of hashpower rental 51% attacks and malware mining. It is also ASIC-resistant and has no pre-mine.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
