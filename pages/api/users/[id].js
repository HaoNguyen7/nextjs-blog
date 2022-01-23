import { getUserDetail} from '../../../lib/users'
export default async function handler(req,res) {
    const {id} = req.query
    const user = await getUserDetail(id)
    res.json(user)
}