import Layout from "../components/layout"
 
 
const Error = ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode
      ? `An error, could not load user data: ${statusCode} occurred on server`
      : 'An error couldn\'t get that page, sorry!!! '}
  </Layout>
)

export const getStaticProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}


export default Error