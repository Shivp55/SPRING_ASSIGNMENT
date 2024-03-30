//User signup page data storage
const url ="/CITIBANK/authenticate-user"
function storeData() {
	//Retriving data from form
	var fname = document.getElementById("fname");
	var mname = document.getElementById("mname");
	var lname = document.getElementById('lname');
	var email = document.getElementById('emailid');
	var password = document.getElementById('password');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var accnt = document.getElementById('selectaccnt');
	var dt = document.getElementById('date');
	var post = document.getElementById('post');
	var radio = document.querySelector('input[name="radio"]:checked').value;
	var rvalue;
	//Retriving radio value
	if (radio == 'male') {
		rvalue = document.getElementById('male').value;
	}
	else if (radio == 'female') {
		rvalue = document.getElementById('female').value;
	}
	else if (radio == 'others') {
		rvalue = document.getElementById('others').value;
	}

	// fname=fname.value;
	// console.log(fname);

	//json array initialization
	const userArray = {
		"name": fname.value + " " + mname.value + " " + lname.value,
		'email': email.value,
		'password': password.value,
		'ph_no': phone.value,
		'address': address.value,
		'date': dt.value,
		'accnt': accnt.value,
		'gender': rvalue,
		'postal_code': post.value
	}

	//initiatiating html session storage
	if (typeof (Storage) !== "undefined") {
		if (sessionStorage.clickcount) {
			//using counter to store data in session storage
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
			//Saving user data in session storage
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));




			//Retrieving user data
			var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var fname = user.name;
			var email = user.email;
			var phone = user.phone;
			var password = user.password;
			var address = user.address;
			var date = user.date;
			var accnt = user.accnt;
			var gender = user.gender;
			var post = user.post;



			//Sending data for creating table
			createTable(fname, phone, email, address, post, date, gender, accnt, password);


		} else {
			//Set counter to 1
			sessionStorage.clickcount = 1;
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
			var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var fname = user.name;
			var email = user.email;
			var phone = user.phone;
			var password = user.password;
			var address = user.address;
			var date = user.date;
			var accnt = user.accnt;

			createTable(fname, phone, email, address, date, accnt, password);
		}

	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
	}
}

function storeDataNewUser() {
	//Retriving data from form
	var fname = document.getElementById("fname");
	var mname = document.getElementById("mname");
	var lname = document.getElementById('lname');
	var email = document.getElementById('emailid');
	var password = document.getElementById('password');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	//var accnt = document.getElementById('selectaccnt');
	var dt = document.getElementById('date');
	var post = document.getElementById('post');
	var radio = document.querySelector('input[name="radio"]:checked').value;
	var rvalue;
	//Retriving radio value
	if (radio == 'male') {
		rvalue = document.getElementById('male').value;
	}
	else if (radio == 'female') {
		rvalue = document.getElementById('female').value;
	}
	else if (radio == 'others') {
		rvalue = document.getElementById('others').value;
	}

	// fname=fname.value;
	// console.log(fname);

	//json array initialization
	const userArray = {
		"name": fname.value + " " + mname.value + " " + lname.value,
		'email': email.value,
		'password': password.value,
		'phone': phone.value,
		'address': address.value,
		'date': dt.value,
		//'accnt': accnt.value,
		'gender': rvalue,
		'post': post.value
	}

	//initiatiating html session storage
	if (typeof (Storage) !== "undefined") {
		if (sessionStorage.clickcount) {
			//using counter to store data in session storage
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;

			const userArray = {
				"customer_id": sessionStorage.clickcount,
				"name": fname.value + " " + mname.value + " " + lname.value,
				'email': email.value,
				'password': password.value,
				'ph_no': phone.value,
				'address': address.value,
				'dob': dt.value,
				//'accnt': accnt.value,
				'gender': rvalue,
				'postal_code': post.value
			}

			//Saving user data in session storage
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));

			$.ajax({
				url: "http://localhost:8080/CITIBANK/add-user",
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(userArray),
				success: function(data) {
					//alert("Data addedd");
					console.log("Data sent Successfully");
				}
			});

			/*//Retrieving user data
			var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var cust_id=user.customer_id;
			var fname = user.name;
			var email = user.email;
			var phone = user.ph_no;
			var password = user.password;
			var address = user.address;
			var date = user.dob;
			// var accnt = user.accnt;
			var gender = user.gender;
			var post = user.postal_code;

			//Sending data for creating table
			createTableNewUser(cust_id,fname, phone, email, address, post, date, gender, password);
*/

		} else {
			//Set counter to 1
			sessionStorage.clickcount = 1;
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
			$.ajax({
				url: "http://localhost:8080/CITIBANK/add-user",
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(userArray),
				success: function(data) {
					//alert("Data addedd");
					console.log("Data sent Successfully");
				}
			});
			/*var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var fname = user.name;
			var email = user.email;
			var phone = user.phone;
			var password = user.password;
			var address = user.address;
			var date = user.date;
			// var accnt = user.accnt;
			var gender = user.gender;
			var post = user.post;

			createTableNewUser(fname, phone, email, address, post, date, gender, password);*/
		}

	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
	}
}




//Sign In form Data storage
function storeUserSignInData() {
	var email = document.getElementById('emailid');
	var password = document.getElementById('password');

	const userArray = {
		'email': email.value,
		'password': password.value
	}

	if (typeof (Storage) !== "undefined") {
		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
			var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var email = user.email;
			var password = user.password;
			//console.log(email, password);
			$.ajax({
				url: url,
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(userArray),
				success: function(response) {
					if (response == "success") {
						window.open('/CITIBANK/AdminPages/Admin.html', "_self")
					}
					else {
						alert("Data not aduthenticated or invalid");
						console.log(response);

					}

				}
			});
			//createUserSignInTable(email, password);


		} else {
			sessionStorage.clickcount = 1;
			localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
			var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
			var email = user.email;
			var password = user.password;
			//console.log(email, password);
			$.ajax({
				url: url,
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(userArray),
				success: function(response) {
					if (response == "success") {
						window.open('/CITIBANK/AdminPages/Admin.html', "_self")
					}
					else {
						alert("Data not aduthenticated or invalid");
						console.log(response);

					}

				}
			});
			//createUserSignInTable(email, password);
		}

	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
	}
}

function storeAccountData(data) {
    var account_no = document.getElementById("account_no");
    var cust_id = document.getElementById("cust_id");
    var balance = document.getElementById("balance_amt");
    var accnt = document.getElementById('selectaccnt');

    var radio = document.querySelector('input[name="radio"]:checked').value;
    var rvalue;
    //Retriving radio value
    if (radio == 'active') {
        rvalue = document.getElementById('active').value;
    }
    else if (radio == 'inactive') {
        rvalue = document.getElementById('inactive').value;
    }


    // fname=fname.value;
    // console.log(fname);

    //json array initialization
    const userArray = {
        "account_number": account_no.value,
        'balance': balance.value,
        'account_type': accnt.value,
        'status': rvalue,
        'customer_id': cust_id.value,
    }

    //initiatiating html session storage
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            //using counter to store data in session storage
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            //Saving account data in session storage
            localStorage.setItem("account(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));

            $.ajax({
                url: "http://localhost:8080/CITIBANK/add-account",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(userArray),
                success: function (data) {
                    //alert("Data addedd");
                    console.log("Data sent Successfully");
                }
            });

            //Retrieving account data
           /* var account = JSON.parse(localStorage.getItem('account(' + sessionStorage.clickcount + ')'));
            var account_number = account.account_number;
            var balance_amt = account.balance;
            var account_type = account.account_type;
            var status = account.status;
            var customer_id = account.customer_id;
*/
            //Sending data for creating table
           // createTableAccount(account_number, balance_amt, account_type, status, customer_id);


        } else {
            //Set counter to 1
            sessionStorage.clickcount = 1;
            localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
            $.ajax({
                url: "http://localhost:8080/CITIBANK/add-account",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(userArray),
                success: function (data) {
                    //alert("Data addedd");
                    console.log(data);
                    console.log("Data sent Successfully");
                }
            });

           /* //Retrieving account data
            var account = JSON.parse(localStorage.getItem('account(' + sessionStorage.clickcount + ')'));
            var account_number = account.account_number;
            var balance_amt = account.balance;
            var account_type = account.account_type;
            var status = account.status;
            var customer_id = account.customer_id;
*/
            //Sending data for creating table
           // createTableAccount(account_number, balance_amt, account_type, status, customer_id);
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
