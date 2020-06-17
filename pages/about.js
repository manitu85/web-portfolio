import Link from 'next/link'
import Layout from "../components/layout";


const About = () => {
  return(
    <Layout title="About">
      <p>A Javascript Programer</p>
      <img src='/static/js-logo-1.png' alt='JavaScript' height='200px'/>
    </Layout>
  )
}

export default About