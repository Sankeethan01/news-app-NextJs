import { model, models, Schema } from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
});

const contactModel = models.Contact || model('Contact',contactSchema);

export default contactModel;