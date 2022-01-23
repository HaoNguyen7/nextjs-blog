import Layout from '../../components/layout';
;

export default function User({users}){
    return(
        <>
            <Layout>
                <ul>
                    {
                        users.map((user) => (<p key={user.id}>{user.name}</p>))
                    }
                </ul>        
            </Layout>
        </>
    )
}

export async function getStaticProps(){
    const response = await fetch('http://localhost:3000/api/hello')
    const data = await response.json()
    return {
        props:{
            users:data
        }
    }
}