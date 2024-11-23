mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const accountSchema = new mongoose.Schema({
    id_user: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    balance: { type: Number, required: true }
});

module.exports = mongoose.model('Account', accountSchema)