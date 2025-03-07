import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    created_at: String
}, {
    toJSON: { virtuals: true }
});

postSchema.virtual('short_description').get(function () {
    return this.description.substr(0, 50) + '...'
});

postSchema.virtual('created_at_formatted').get(function () {
    return changeFormatDate(this.created_at);
})

function changeFormatDate(date_st) {
    const date = new Date(date_st);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
     
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;