import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import styles from './404.module.css'

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <meta
          http-equiv="refresh"
          content="0;url=https://www.playrole.com/kickstarter?utm_source=maximumfun.org&utm_medium=podcast&utm_campaign=storybreak"
        />
      </Helmet>
      <Layout articleClassNames={[styles.content]} isPlainFooter>
        <h1 className={styles.logo}>Role</h1>
        <h2 className="heading1">Thank you for your support!</h2>
        <p>
          You should be redirected to our Kickstarter in 1 second. If you aren't,{' '}
          <a href="https://www.playrole.com/kickstarter?utm_source=maximumfun.org&utm_medium=podcast&utm_campaign=storybreak">
            click here
          </a>
          .
        </p>
      </Layout>
    </>
  )
}