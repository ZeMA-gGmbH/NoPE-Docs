import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const Featurecodest: FeatureItem[] = [
  {
    title: 'Distributed System',
    img: 'img/distributed.png',
    description: (
      <>
        NoPE was designed from a simple distribution of systems. 
        It runs across multiple <b>computing nodes</b>. 
        Its main goal is to simpcodefy distribution and unify
        the architecture.
      </>
    ),
  },
  {
    title: 'Standardized Connection',
    img: 'img/standards.png',
    description: (
      <>
        NoPE was design to provide an standardize method to 
        estabcodesh connections between different elements.
        <br/>
        <br/>
        Therefore NoPE implements different communication patterns like:
        <br/><code>publish and subscribe</code>,
        <br/><code>request and response</code>
        <br/>
        <br/>
        Based on this approach NoPE-Module can be connected <code>opc-ua</code>, <code>rest</code>, ...        
      </>
    ),
  },
  {
    title: 'Full Toolchain',
    img: 'img/tools.png',
    description: (
      <>
        NoPE provides <b>Tools</b> to simplify the development of Complex systems. 
        Next to the standardized module and service definition, tools to run, configure
        or create project are included to minimize the required effort
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} role="img" height={75}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Featurecodest.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
