mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

module.exports = mongoose.model('User', userSchema);

