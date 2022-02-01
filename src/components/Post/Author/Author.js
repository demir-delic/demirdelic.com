// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-email']}
          href={getContactHref('email', author.contacts.email)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong> Contact me</strong>
        </a>
      </p>
    </div>
  );
};

export default Author;
