    // Most of this code makes no sense for our project and needs to be refactored or straight up abandoned.

const newFormHandler = async (event) => {
    event.preventDefault();
  
    

    app.post('/addtoCart', (req, res) => {
      const addtoCart = document.querySelector('#add-to-cart').value.trim();
    
      // Define your SQL query to insert data
      const query = 'INSERT INTO my_table (column1, column2) VALUES (?, ?)';
    
      pool.execute(query, [data1, data2], (err, results) => {
        if (err) {
          console.error('Error adding data to the database:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data added successfully!');
          res.status(200).json({ message: 'Data added successfully!' });
        }
      });
    });

    // ------------------------------------------------------------------------------------------
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#add-to-cart')
    .addEventListener('submit', newFormHandler);


    //Aston says: All of the above is pointless and I do not understand why it is here.

