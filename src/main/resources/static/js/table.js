// Load script
var filerefjs = document.createElement('script');
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "https://unpkg.com/sweetalert/dist/sweetalert.min.js");
function createTable(fname, phone, email, address, post, date, gender, accnt, password) {
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
	const cellsData = [fname, phone, email, address, post, date, gender, accnt, password];
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

function createTableNewUser(fname, phone, email, address, post, date, gender, password) {
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
	const cellsData = [fname, phone, email, address, post, date, gender, password];
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


function createTableAccount(account_number, balance_amt, account_type, status, customer_id) {

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
	const cellsData = [email, password];
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

		// Add event listener to the first column
		const firstCell = row.querySelector("td");
		// Inside createAddCustomerTable function, add event listener to first cell
		if (firstCell) {


			firstCell.addEventListener("click", function() {
				// Display modal
				var customerId = firstCell.textContent.trim();
				//console.log(customerId)
				
				// Make AJAX call to fetch JSON data
				$.ajax({
					url: '/CITIBANK/get-userId/' + customerId, // Modify the URL according to your Spring controller mapping
					type: 'GET',
					contentType: "application/json",
					success: function(data) {
						//console.log(data.customer_id, customerId);
						var customerIdLong = Number(parseInt(customerId));;
						console.log(data.customer_id, customerIdLong);
						// Populate modal table with fetched data
						if (data.customer_id == customerIdLong) {
							swal("Yay!", "User Found", "success");

							var modal = document.getElementById("myModal");
							modal.style.display = "block";
		
							var modalTable = document.getElementById("modal-table");
							var tbody = modalTable.querySelector("tbody");
							//console.log(tbody)
							if (!tbody) {
								tbody = document.createElement("tbody");
								modalTable.appendChild(tbody);
							}

							// Check if modalTable and tbody are found
							if (!modalTable) {
								console.error("Modal table element not found");
								return;
							}
							if (!tbody) {
								console.error("Tbody element not found inside modal table");
								return;
							}
							// Check if data is an array, if not wrap it into an array
							if (!Array.isArray(data)) {
								data = [data];
							}

							// Iterate over each object in the JSON list
							data.forEach(function(item) {
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
							var tableRows = tbody.querySelectorAll('tr');

							// Add event listeners to each row
							tableRows.forEach(function(row) {
								// Event listener for mouse entering the row
								row.addEventListener('mouseenter', function() {
									row.style.backgroundColor = 'green'; // Change background color on hover
									row.style.color='white';
								});

								// Event listener for mouse leaving the row
								row.addEventListener('mouseleave', function() {
									row.style.backgroundColor = 'lightcyan'; // Reset background color when mouse leaves
									row.style.color='black';
								});
							});


						}
						else {
							//Deleting the entry which is not available in the customer table
							
							//Sweet Alert for Confirming whether to delete the entry or not
							swal({
								title: "Oops, No Data Found!!",
								text: "Do You want to delete the account",
								icon: "error",
								buttons: true,
								dangerMode: true,
							})
								.then((willDelete) => {
									if (willDelete) {
										//var table= document.getElementById("kt-datatable");
										$.ajax({
											url: '/CITIBANK/delete-userId/' + customerId, // Modify the URL according to your Spring controller mapping
											type: 'DELETE',
											contentType: "application/json",
											success: function(data) {
												swal({
													title: "Poof! Your imaginary file has been deleted!",
													icon: "success",
													timer: 2000, // Show the alert for 3 seconds
													buttons: false // Hide the close button
												}).then(function() {
													// Reload the page after 3 seconds
													setTimeout(function() {
														location.reload();
													}, 1500);
												});
											},

										});
										/*swal("Poof! Your imaginary file has been deleted!", {
											icon: "success",
										});*/
									} else {
										swal("Go Easy!","You Saved Your Entry From Deleting!","info");
									}
								});			
						}
					},
					error: function(xhr, status, error) {
						console.log('Error:', error);
					}
				});
			});
		}

		// Close the modal when the user clicks on the close button
		// Close the modal when the user clicks on the close button
		var closeBtn = document.getElementsByClassName("close")[0];
		closeBtn.addEventListener("click", function() {
			var modal = document.getElementById("myModal");
			modal.style.display = "none";
			// Clear modal data
			var modalTable = document.getElementById("modal-table");
			//var modalTable = document.getElementById("modal-table");
			var tbody = modalTable.querySelector("tbody");
			tbody.innerHTML = "";
		});

		// Close the modal when the user clicks outside of it
		window.addEventListener("click", function(event) {
			var modal = document.getElementById("myModal");
			if (event.target == modal) {
				modal.style.display = "none";
				// Clear modal data
				var modalTable = document.getElementById("modal-table");
				var tbody = modalTable.querySelector("tbody");
				tbody.innerHTML = "";
			}
		});

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

function createAddUserTable(jsonList) {
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

function reloadAndCreateUserTable(jsonList) {
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
	createAddUserTable(jsonList);
}

