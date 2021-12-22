import { NextApiRequest, NextApiResponse } from "next";
let cats = require('../../../db/data.json');


const CatsAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    //GET
    if (req.method === "GET") {
        try {
            // const booksDocument = catData
            res.status(200).json({ messages: 'OK', result: { data: cats } })
        } catch {
            res.status(500).json({ messages: 'Server error' })
        }
    }
}


export default CatsAPI