package com.project.bank.Controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.bank.Entities.Account;
import com.project.bank.Services.AccountServices;




@RestController
public class AccountController {


	private final AccountServices accountService;

	public AccountController(AccountServices accountService) {
		this.accountService = accountService;
	}

	@GetMapping("/test-account")
	public String test() {
		return "This is for testing";
	}


	@PostMapping("/add-account")
	@CrossOrigin(origins ="*")
	public ResponseEntity<Account> addAccount(@RequestBody Account account){

		Account a =null;
		try {
			a=accountService.addAccount(account);
			return ResponseEntity.of(Optional.of(a));

		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

		}
	}


}