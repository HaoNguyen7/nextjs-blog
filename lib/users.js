export async function getAllUserIds(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data.map(user => {
        return {
          params: {
            id: user.id
          }
        }
    })
}

export async function getUserDetail(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()

    return user
    
}