import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import styled from 'styled-components'
// import Error from './_error'
import Error from 'next/error'


export default ({ user, statusCode }) => {

  // console.table(user)

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return(
    <Layout title='Home'>
      <Container>
        <img src={user.avatar_url} alt='' width='100px'/>
        <h1>{user.login}</h1>
        <a href={user.html_url}>{user.html_url}</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae dignissimos, repellat nemo dolores earum perferendis laborum veniam mollitia dolorem numquam eos. Accusamus quidem tempora, dolorum officiis ea iste minus delectus voluptatum quasi, dolor nam. Rem dolores dolore explicabo esse consequuntur odit consectetur dicta. Asperiores alias tempora a explicabo, natus aliquid et voluptate illo. Eos nemo ratione explicabo deleniti itaque ab, facere qui voluptates sunt eius facilis, perspiciatis optio quod necessitatibus consequatur quos unde laudantium nihil excepturi modi laboriosam suscipit pariatur sapiente et. Repellat vero, maxime earum accusamus tenetur at reiciendis aspernatur, ab harum ipsa voluptate sequi temporibus possimus architecto.</p>
        <a href={user.repos_url}>{user.repos_url}</a>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await axios.get('https://api.github.com/users/manitu85')
  const statusCode = res.status > 200 ? res.status : false
  const data = await res.data

  return {
    props: {
      user: data,
      statusCode
    },
  }
}


const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 2rem;
`

// // export default Index




