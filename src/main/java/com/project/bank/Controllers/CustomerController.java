package com.project.bank.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.bank.Entities.Customer;
import com.project.bank.Services.CustomerServices;



@RestController
public class CustomerController {

	private final CustomerServices customerService;

	public CustomerController(CustomerServices customerService) {
		this.customerService = customerService;
	}

	@GetMapping("/test")
	public String Hello() {
		return "hello you are in the test controller";
	}

	@PostMapping("/authenticate-user")
	public ResponseEntity<String> authenticateUser(@RequestBody Customer customer) {
		// Single User Authentication
		if ("admin@gmail.com".equals(customer.getEmail()) && "Admin@1234".equals(customer.getPassword())) {
            // Authentication successful
            return ResponseEntity.ok("success");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }

		}



	@PostMapping("/add-user")
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
		Customer c = null;
		try {
			c = customerService.addCustomer(customer);
			return ResponseEntity.of(Optional.of(c));

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping("/get-users")
	public ResponseEntity<List<Customer>> getCustomers()
	{
		return ResponseEntity.ok(customerService.listCustomers());
	}
}