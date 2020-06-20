import React from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  grid-column-gap: 2rem;
  margin: 10rem 0;
`

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

