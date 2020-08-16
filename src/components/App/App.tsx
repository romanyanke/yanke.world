import React from 'react'
import styles from './App.module.css'
import Header from '../Header'
import Content from '../Content'

const App = () => (
  <section className={styles.root}>
    <Header />
    <Content />
  </section>
)

export default App
