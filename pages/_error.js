import Layout from "../components/hoc/layout.component"
 
const Error = ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry! Status Code ${statusCode}`}
  </Layout>
)

 export const getStaticProps = ({ res, err }) => {
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
   return { props: {statusCode} }
 }


export default Error
