import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-images"
import styles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div class={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          <Img fluid={} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={} />
      </div>
    </Layout>
  )
}
