import Link from 'next/link'
import Layout from "../components/layout";
import styled from 'styled-components'


const About = () => {
  return(
    <Layout title="About">
      <FlexContainer>
        <img src='/static/js-logo-1.png' alt='JavaScript' height='200px'/>
        <img src='/static/react-logo.png' alt='React' height='200px'/>
        <img src='/static/gatsby-logo.png' alt='Gatsby js' height='200px'/>
        <img src='/static/next-logo.png' alt='Next js' height='200px'/>
      </FlexContainer>
      <p>A Javascript Programer</p>
    </Layout>
  )
}

export default About

const FlexContainer = styled.div`
  display: flex;
  margin: 10rem auto;
  justify-content: space-between;
`