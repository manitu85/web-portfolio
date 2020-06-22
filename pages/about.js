import React from 'react'
import Layout from '../components/hoc/layout.component'
import { GridContainer } from '../components/styles/container.styles'



const About = () => {
  return(
    <Layout title="About">
      <p>A Javascript Developer</p>
      <GridContainer>
        <img src='/static/js-logo-1.png' alt='JavaScript' height='150px'/>
        <img src='/static/react-logo.png' alt='React' height='150px'/>
        <img src='/static/redux-logo.jpg' alt='Redux' height='150px'/>
        <img src='/static/gatsby-logo.png' alt='Gatsby js' height='150px'/>
        <img src='/static/next-logo.png' alt='Next js' height='150px'/>
        <img src='/static/graphql-logo.png' alt='GraphQl' height='150px'/>
        <img src='/static/apollo-logo.png' alt='Apollo Client' height='150px'/>
        <img src='/static/node-logo.png' alt='Node' height='150px'/>
      </GridContainer>
    </Layout>
  )
}



export default About

