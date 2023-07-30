// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from '@/config/connect';
import student, { StudentType } from '@/models/student';
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const method: string | undefined = req.method;
    const id: string | string[] | undefined = req.query.id;
    switch (method) {
        case "GET":
            try {
                const getStudent: StudentType | null = await student.findById(id);
                res.json({ success: true, data: getStudent });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;
        case "DELETE":
            try {
                const deleteStudent: StudentType | null = await student.findByIdAndRemove(id);
                res.json({ success: true, data: deleteStudent });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;

        case "PATCH":
            try {
                const updateStudent: StudentType | null = await student.findByIdAndUpdate(
                    { _id: id },
                    { ...req.body }
                );
                res.json({ success: true, data: updateStudent });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;
    }
}