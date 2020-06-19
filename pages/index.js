import React from 'react'
import Layout from "../components/layout";
import styled from 'styled-components'



export default () => {
  return(
    <Layout title='Home'>
      <Container>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur error dolorem laudantium ipsum ducimus cupiditate deleniti odio aspernatur accusantium. Ea aspernatur impedit consectetur nobis!</p>
      </Container>
    </Layout>
  )
}


const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`

// // export default Index




