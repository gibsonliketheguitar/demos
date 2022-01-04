// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    seconds: number,
    id: string | string[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { pid } = req.query
    const seconds = Math.floor(Math.random() * 100) * 1000
    console.log(pid, seconds)

    async function DelayCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(res.status(200).json({ name: 'John Doe', seconds: seconds, id: pid }))
            }, seconds)
        })

    }
    await DelayCall()
    res.end()
}
