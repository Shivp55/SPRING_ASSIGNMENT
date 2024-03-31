function createTable(fname, phone, email, address,post, date,gender, accnt, password) {
    // Create table body if it doesn't exist
    var tbl = document.getElementById("kt-datatable");
    var tbody = tbl.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    // Create row
    const row = document.createElement("tr");

    // Create cells and text nodes
    const cellsData = [fname, phone, email, address,post, date, gender,accnt, password];
    cellsData.forEach(data => {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        row.appendChild(cell);
    });

    // Append row to the table body
    tbody.appendChild(row);

    // Get all the rows of the table
    var tableRows = document.querySelectorAll('#kt-datatable tr');

    // Add event listeners to each row
    tableRows.forEach(function (row) {
        // Event listener for mouse entering the row
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = 'green'; // Change background color on hover
        });

        // Event listener for mouse leaving the row
        row.addEventListener('mouseleave', function () {
            row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
        });
    });

}

function createTableNewUser(fname, phone, email, address,post, date,gender, password) {
    // Create table body if it doesn't exist
    var tbl = document.getElementById("kt-datatable");
    var tbody = tbl.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    // Create row
    const row = document.createElement("tr");

    // Create cells and text nodes
    const cellsData = [fname, phone, email, address,post, date, gender,password];
    cellsData.forEach(data => {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        row.appendChild(cell);
    });

    // Append row to the table body
    tbody.appendChild(row);

    // Get all the rows of the table
    var tableRows = document.querySelectorAll('#kt-datatable tr');

    // Add event listeners to each row
    tableRows.forEach(function (row) {
        // Event listener for mouse entering the row
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = 'green'; // Change background color on hover
        });

        // Event listener for mouse leaving the row
        row.addEventListener('mouseleave', function () {
            row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
        });
    });

}


function createTableAccount(account_number, balance_amt, account_type, status, customer_id){

    // Create table body if it doesn't exist
    var tbl = document.getElementById("kt-datatable");
    var tbody = tbl.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    // Create row
    const row = document.createElement("tr");

    // Create cells and text nodes
    const cellsData = [account_number, balance_amt, account_type, status, customer_id];
    cellsData.forEach(data => {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        row.appendChild(cell);
    });

    // Append row to the table body
    tbody.appendChild(row);

    // Get all the rows of the table
    var tableRows = document.querySelectorAll('#kt-datatable tr');

    // Add event listeners to each row
    tableRows.forEach(function (row) {
        // Event listener for mouse entering the row
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = 'green'; // Change background color on hover
        });

        // Event listener for mouse leaving the row
        row.addEventListener('mouseleave', function () {
            row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
        });
    });


}



function createUserSignInTable(email, password) {
    // Create table body if it doesn't exist
    var tbl = document.getElementById("kt-datatable-1");
    var tbody = tbl.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    // Create row
    const row = document.createElement("tr");

    // Create cells and text nodes
    const cellsData = [email,password];
    cellsData.forEach(data => {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        row.appendChild(cell);
    });

    // Append row to the table body
    tbody.appendChild(row);

    // Get all the rows of the table
    var tableRows = document.querySelectorAll('#kt-datatable-1 tr');

    // Add event listeners to each row
    tableRows.forEach(function (row) {
        // Event listener for mouse entering the row
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = 'green'; // Change background color on hover
        });

        // Event listener for mouse leaving the row
        row.addEventListener('mouseleave', function () {
            row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
        });
    });

}

function createAddCustomerTable(jsonList) {
    // Get a reference to the table body
    var tbody = document.querySelector("#kt-datatable tbody");

    // Clear existing table contents
    tbody.innerHTML = "";

    // Iterate over each object in the JSON list
    jsonList.forEach(function(item) {
        // Create row
        const row = document.createElement("tr");

        // Create cells and text nodes
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(item[key]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }

        // Append row to the table body
        tbody.appendChild(row);
    });

    // Get all the rows of the table
    var tableRows = document.querySelectorAll('#kt-datatable tr');

    // Add event listeners to each row
    tableRows.forEach(function(row) {
        // Event listener for mouse entering the row
        row.addEventListener('mouseenter', function() {
            row.style.backgroundColor = 'green'; // Change background color on hover
        });

        // Event listener for mouse leaving the row
        row.addEventListener('mouseleave', function() {
            row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
        });
    });
}

function reloadAndCreateTable(jsonList) {
    // Clear existing table body
    var tbl = document.getElementById("kt-datatable");
    var tbody = tbl.querySelector("tbody");
    if (tbody) {
        tbody.innerHTML = ''; // Clear existing rows
    } else {
        // If tbody doesn't exist, create one
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    // Call the function to create new rows
    createAddCustomerTable(jsonList);
}


