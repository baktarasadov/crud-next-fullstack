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
                const students: Array<StudentType> = await student.find({});
                res.status(200).json({
                    data: students,
                    success: true
                })
            } catch (err) {
                res.status(400).json({
                    message: err,
                    success: false
                })
            }
            break;
        case "POST":
            try {
                const createData = await student.create(req.body);
                res.status(200).json({
                    data: createData,
                    success: true
                })
            } catch (error) {
                res.status(400).json({
                    error: error, success: false
                })

            }
            break

        default:
            break;
    }

}