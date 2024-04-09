
function storeCustomerData(name, email, addr, postal, password, ph_no, dob, gender, accountType) {
	const userArray = {
		'name': name,
		'email': email,
		'address': addr,
		'postal_code': postal,
		'password': password,
		'dob': dob,
		'gender': gender,
		'accnt_type': accountType,
		'ph_no': ph_no,
		'role': 'ROLE_USER'
	}
	console.log(userArray)
	$.ajax({
		url: "/CITIBANK/add-user",
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(userArray),
		success: function(response) {
			if (response != null) {
				console.log(response)
				swal("Account Created, Proceed to Login?", {
					buttons: {
						cancel: "Cancel",
						Proceed: {
							text: "Proceed!",
						},
					},
				})
					.then((value) => {
						switch (value) {
							case "Proceed":
								window.open('/CITIBANK/login', "_self");
								break; // Add break statement here

							case "cancel":
								swal("Come Back Soon", "Account Created!", "success");
								window.open('/CITIBANK/index.html', "_self");
								break;
						}
					});



				/*swal({
					title: "Account Created",
					text: "Please Login",
					icon: "success",
					button: "OK",
				});
				*/
			}
			else {
				alert("Data not aduthenticated or invalid");
				console.log(response);

			}

		},
		error: function(xhr, status, error) {
			// Handle the error here
			console.error("Failed to load resource:", error);
			// Optionally, you can display a user-friendly error message
			swal("Oops!!", "Email Already Exists!! Please Login", "error");
		}
	});

}

function storeAccountToDatabase(account_no, customer_id, account_type, balance, status) {

	const accountArray = {
		"account_number": account_no,
		"customer_id": customer_id,
		"account_type": account_type,
		"balance": balance,
		"status": status
	}

	$.ajax({
		url: "/CITIBANK/admin/add-account-by-admin",
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(accountArray),
		success: function(response) {
			if (response != null) {
				console.log(response)
				swal({
					title: "Account Created",
					text: "Please Login",
					icon: "success",
					button: "OK",
				});
			}
			else {
				alert("Data not aduthenticated or invalid");
				console.log(response);

			}

		},
		error: function(xhr, status, error) {
			// Handle the error here
			console.error("Failed to load resource:", error);
			// Optionally, you can display a user-friendly error message
			swal("Oops!!", "Customer Account Already Exists", "error");
		}
	});
}

function storeTransactionData() {

}