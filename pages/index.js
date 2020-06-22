import React from 'react'
// import axios from 'axios'
import Layout from '../components/hoc/layout.component'
import { Container } from '../components/styles/container.styles'
import Error from './_error'


export default ({ user, errorCode }) => {
  // console.log(errorCode)

  if (errorCode) {
    return <Error statusCode={errorCode} />
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
  // doesn't work with axios
  // const res = await axios.get('https://api.github.com/users/manitu85lkjlk')
  // const statusCode = res.status > 200 ? res.status : false
  // const data = await res.data

  const res = await fetch('https://api.github.com/users/manitu85')
  const errorCode = res.status > 200 ? res.status : false
  const data = await res.json()

  return {
    props: {
      user: data,
      errorCode
    }
  }
}




// // export default Index




