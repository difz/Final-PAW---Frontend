mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const categorySpendingSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('CategorySpending', categorySpendingSchema);