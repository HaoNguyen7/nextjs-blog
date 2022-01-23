export default function hanlder(req,res) {
    const list = [
        {id: 1, name:"Nguyễn Văn A"},
        {id: 2, name:"Trần Văn C"},
        {id: 3, name:"Ngô Bá D"}
    ]
    res.status(200).json(list)
}