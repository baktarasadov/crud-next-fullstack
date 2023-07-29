import { dbConnect } from '@/config/connect';
import student, { StudentType } from '@/models/student';
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const requestType: String | undefined = req.method;
    switch (requestType) {
        case "GET":
            try {
                const data: Array<StudentType> = await student.find({});
                res.status(200).json({
                    data: data,
                    success: true
                })
            } catch (err) {
                res.status(400).json({
                    message: err,
                    success: false
                })
            }
            break;

        default:
            break;
    }

}