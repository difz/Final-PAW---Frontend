const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
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

// Cek apakah model "Income" sudah ada, jika ya, gunakan model yang sudah ada. Jika tidak, buat model baru.
const Income = mongoose.models.Income || mongoose.model('Income', incomeSchema);

export default Income;