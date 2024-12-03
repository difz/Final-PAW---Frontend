import mongoose from 'mongoose';

const spendingSchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true,
    },
    account_id: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    dateReceived: {
        type: Date,
        default: Date.now,
    },
});

//module.exports = mongoose.model('Spending', spendingSchema);
const Spending = mongoose.models.Spending || mongoose.model('Spending', spendingSchema);

export default Spending;