const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    email: {
        type: String,
        required: [true, "The email is required."]
    }
});