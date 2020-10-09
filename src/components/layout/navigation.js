import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import classNames from 'classnames';
import { Tween } from 'react-gsap';

// Query
const query = graphql`
  query Navigation {
    navigation: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown" }
        relativeDirectory: { regex: "/navigation/" }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___order], order: ASC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            name
            url
          }
        }
      }
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const data = useStaticQuery(query);
  const navigation = data.navigation.nodes;

  console.log(navigation);

  return (
    <>
      <button
        type="button"
        className="navigation-toggle"
        onClick={toggleNavigation}
      >
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--one',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--two',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--three',
            { 'is-open': isOpen },
          )}
        />
      </button>

      <nav className={classNames('navigation', { 'is-open': isOpen })}>
        <ul className="navigation__list">
          <Tween
            from={{ y: '-50', opacity: 0 }}
            ease="power1.out"
            stagger={0.2}
          >
            {navigation.map(
              ({ childMarkdownRemark: item }) =>
                console.log(item) || (
                  <li key={item.frontmatter.id} className="navigation__item">
                    <Link
                      to={item.frontmatter.url}
                      className="navigation__link"
                      activeClassName="navigation__link--active"
                    >
                      {item.frontmatter.name}
                    </Link>
                  </li>
                ),
            )}
          </Tween>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
