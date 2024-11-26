export default async function handler(req, res) {
  try {
    // Data dummy 
    const historyData = [
      {
        type: 'income',
        categoryName: 'Gaji',
        dateReceived: '01/01/2024',  
        amount: 300000,
      },
      {
        type: 'spending',
        categoryName: 'Makan',
        dateReceived: '02/01/2024',
        amount: 5000,
      },
      {
        type: 'income',
        categoryName: 'Bonus',
        dateReceived: '03/01/2024',
        amount: 20000,
      },
      {
        type: 'spending',
        categoryName: 'Transportasi',
        dateReceived: '04/01/2024',
        amount: 3000,
      },
      {
        type: 'income',
        categoryName: 'Freelance',
        dateReceived: '06/01/2024',
        amount: 15000,
      },
      {
        type: 'spending',
        categoryName: 'Internet',
        dateReceived: '05/01/2024',
        amount: 15000,
      },
      {
        type: 'income',
        categoryName: 'Dividend',
        dateReceived: '07/01/2024',
        amount: 25000,
      },
      {
        type: 'spending',
        categoryName: 'Kesehatan',
        dateReceived: '09/01/2024',
        amount: 7000,
      },
      {
        type: 'income',
        categoryName: 'Rental Property',
        dateReceived: '08/11/2024',
        amount: 50000,
      },
      {
        type: 'spending',
        categoryName: 'Belanja',
        dateReceived: '10/11/2024',
        amount: 12000,
      },
      {
        type: 'spending',
        categoryName: 'Makan',
        dateReceived: '01/02/2024', 
        amount: 5000,
      },
      {
        type: 'income',
        categoryName: 'Bonus',
        dateReceived: '15/02/2024',  
        amount: 25000,
      },
      {
        type: 'spending',
        categoryName: 'Transportasi',
        dateReceived: '01/03/2024',  
        amount: 8000,
      },
      {
        type: 'income',
        categoryName: 'Investasi',
        dateReceived: '10/03/2024', 
        amount: 50000,
      },
      {
        type: 'spending',
        categoryName: 'Belanja',
        dateReceived: '05/04/2024',  
        amount: 15000,
      },
      {
        type: 'spending',
        categoryName: 'Hiburan',
        dateReceived: '20/04/2024',  
        amount: 6000,
      },
      {
        type: 'income',
        categoryName: 'Hadiah',
        dateReceived: '01/05/2024',  
        amount: 10000,
      },
      {
        type: 'spending',
        categoryName: 'Kesehatan',
        dateReceived: '15/05/2024',  
        amount: 12000,
      },
      {
        type: 'income',
        categoryName: 'Pekerjaan Freelance',
        dateReceived: '01/06/2024',  
        amount: 40000,
      },
    ];

    // Pisahkan data berdasarkan tipe income dan spending
    const income = historyData.filter(item => item.type === 'income').map(item => ({
      date: item.dateReceived,
      amount: item.amount,
      description: item.categoryName
    }));

    const spending = historyData.filter(item => item.type === 'spending').map(item => ({
      date: item.dateReceived,
      amount: item.amount,
      description: item.categoryName
    }));

    // Bentuk data dalam format yang diharapkan oleh Grafik
    const cashFlowData = {
      income,
      spending,
    };

    res.status(200).json(cashFlowData);
  } catch (error) {
    console.error('Error fetching history data:', error);
    res.status(500).json({ error: 'Failed to fetch history data' });
  }
}
