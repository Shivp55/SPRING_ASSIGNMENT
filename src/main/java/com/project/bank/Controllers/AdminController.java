package com.project.bank.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.bank.Entities.Account;
import com.project.bank.Entities.Customer;
import com.project.bank.Services.AdminServices;


@RestController
public class AdminController {
	
	
	
	private final AdminServices adminService;
	public AdminController(AdminServices adminService) {
		super();
		this.adminService = adminService;
	}


	@GetMapping("/get-accounts")
	public ResponseEntity<ArrayList<Account>> getAccounts(){
		ArrayList<Account> account=null;
		
		try {
			account=adminService.getAllAccounts();
			return ResponseEntity.ok(account);
			
			
		}catch(Exception e) {
		
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@PostMapping("/add-account-by-admin")
	public ResponseEntity<Account> addUserAccount(@RequestBody Account account){
		Account a=null;
		System.out.println(account);
		try {		
			a=adminService.addAccount(account);
			if(a!=null) {
				return ResponseEntity.ok(a);
			}
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
		
		@GetMapping("get-userId/{id}")
		public ResponseEntity<Customer> getCustomerById(@PathVariable("id") int id) {
			Customer customer=null;
		
			try {
//				System.out.print
				customer=adminService.getCustomerById(id);
				return ResponseEntity.ok(customer);
				
				
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			
		}
		@GetMapping("/get-usersList")
		public ResponseEntity<List<Customer>> getAllUsers(){
			ArrayList<Customer> customer=null;
			try {
				customer=adminService.getAllCustomers();
				return ResponseEntity.ok(customer);
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			
			
		}
		
		
	

}