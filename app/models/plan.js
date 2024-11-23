mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const planSchema = new mongoose.Schema({    
    id_user: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Plan', planSchema);