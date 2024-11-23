export default async function handler(req, res) {
  try {
    // Data dummy 
    const historyData = [
      {
        type: 'income',
        categoryName: 'Gaji',
        dateReceived: '01/01/2024',  
        amount: 3000000,
      },
      {
        type: 'spending',
        categoryName: 'Makan',
        dateReceived: '02/01/2024',
        amount: 50000,
      },
      {
        type: 'income',
        categoryName: 'Bonus',
        dateReceived: '03/01/2024',
        amount: 200000,
      },
      {
        type: 'spending',
        categoryName: 'Transportasi',
        dateReceived: '04/01/2024',
        amount: 30000,
      },
      {
        type: 'income',
        categoryName: 'Freelance',
        dateReceived: '06/01/2024',
        amount: 150000,
      },
      {
        type: 'spending',
        categoryName: 'Internet',
        dateReceived: '05/01/2024',
        amount: 150000,
      },
      {
        type: 'income',
        categoryName: 'Dividend',
        dateReceived: '07/01/2024',
        amount: 250000,
      },
      {
        type: 'spending',
        categoryName: 'Kesehatan',
        dateReceived: '09/01/2024',
        amount: 70000,
      },
      {
        type: 'income',
        categoryName: 'Rental Property',
        dateReceived: '08/11/2024',
        amount: 500000,
      },
      {
        type: 'spending',
        categoryName: 'Belanja',
        dateReceived: '10/11/2024',
        amount: 120000,
      },
      {
        type: 'spending',
        categoryName: 'Makan',
        dateReceived: '01/02/2024', 
        amount: 50000,
      },
      {
        type: 'income',
        categoryName: 'Bonus',
        dateReceived: '15/02/2024',  
        amount: 250000,
      },
      {
        type: 'spending',
        categoryName: 'Transportasi',
        dateReceived: '01/03/2024',  
        amount: 80000,
      },
      {
        type: 'income',
        categoryName: 'Investasi',
        dateReceived: '10/03/2024', 
        amount: 500000,
      },
      {
        type: 'spending',
        categoryName: 'Belanja',
        dateReceived: '05/04/2024',  
        amount: 150000,
      },
      {
        type: 'spending',
        categoryName: 'Hiburan',
        dateReceived: '20/04/2024',  
        amount: 60000,
      },
      {
        type: 'income',
        categoryName: 'Hadiah',
        dateReceived: '01/05/2024',  
        amount: 100000,
      },
      {
        type: 'spending',
        categoryName: 'Kesehatan',
        dateReceived: '15/05/2024',  
        amount: 120000,
      },
      {
        type: 'income',
        categoryName: 'Pekerjaan Freelance',
        dateReceived: '01/06/2024',  
        amount: 400000,
      },
    ];

    res.status(200).json(historyData);
  } catch (error) {
    console.error('Error fetching history data:', error);
    res.status(500).json({ error: 'Failed to fetch history data' });
  }
}
