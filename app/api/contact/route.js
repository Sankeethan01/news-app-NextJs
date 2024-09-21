import contactModel from '../../../models/contactModel';
import connectMongo from '../../../utils/connectMongo';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        const contact = { name, email, message };
        await connectMongo();
        await contactModel.create(contact);
        return Response.json({ message: 'Enquiry has been sent!' })
    } catch (error) {
        return Response.json({ message: error._message })
    }

}