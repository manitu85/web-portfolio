import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const Post = () => {

  const router = useRouter()
  const { title } = router.query

  console.log(router);
  

  return(
    <Layout title={title}>
      <p style={{ width: '80vw' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
        eaque! Ad explicabo eum cumque, voluptate quaerat perferendis eligendi
        eveniet sint dolorem in odit sed mollitia, eos rerum, quod saepe atque!
      </p>
    </Layout>
  )
}

export default Post