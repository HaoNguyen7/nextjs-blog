import Layout from '../../components/layout';
import { getUserDetail, getAllUserIds} from '../../lib/users'

export default function UserDetail ({user}) {
  console.log(user.name)
    return (<>
        <Layout>
            <p>{user.name}</p>
        </Layout>
    </>)
}

<style jsx>{`
  p{
    color: red;
  }
`}</style>

export async function getStaticProps({ params }) {
    const user = await getUserDetail(params.id)
    return {
      props: {
        user
      }
    }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  const paths = data.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: false }
}