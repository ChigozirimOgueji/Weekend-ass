// 2.Recreate the filter function Create a simple phone book app 
// that collects user input, (phone number and name and email) , 
// validates inputs and out puts  it to the user.

const phoneBookForm = document.getElementById('phone-book-form');
    const phoneBookTable = document.getElementById('phone-book').getElementsByTagName('tbody')[0];

    phoneBookForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get the form data
      const name = document.getElementById('name').value;
      const phoneNumber = document.getElementById('phone-number').value;

      // Create a new row for the phone book table
      const newRow = document.createElement('tr');

      // Create cells for the row
      const nameCell = document.createElement('td');
      const phoneNumberCell = document.createElement('td');

      // Set the cell values
      nameCell.textContent = name;
      phoneNumberCell.textContent = phoneNumber;

      // Append the cells to the row
      newRow.appendChild(nameCell);
      newRow.appendChild(phoneNumberCell);

      // Append the row to the table body
      phoneBookTable.appendChild(newRow);
    });