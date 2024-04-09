package com.project.bank.Services;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.bank.Dao.AccountRepository;
import com.project.bank.Dao.AdminRepository;
import com.project.bank.Dao.CustomerRepository;
import com.project.bank.Entities.Account;
import com.project.bank.Entities.Admin;
import com.project.bank.Entities.Customer;

import antlr.collections.List;

@Service
public class AdminServices {
	
//	@Autowired
	private  final CustomerRepository customerRepository;
public AdminServices(CustomerRepository customerRepository) {
	super();
	this.customerRepository = customerRepository;
}

//	
	@Autowired
	private AccountRepository accountRepository;
	


	@Autowired
	private AdminRepository adminRepository;

	public Admin authenticateAdmin(String email, String password) {
		Admin a = null;
		try {

			a = this.adminRepository.findByEmailAndPassword(email, password);
			System.out.println(a);
			return a;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return a;
	}
	
	public ArrayList<Account> getAllAccounts(){
		ArrayList<Account> account=null;
		try {
			account = (ArrayList<Account>) accountRepository.findAll();
			return account;
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return account;
	}
	
	public Account addAccount(Account account) {
		Account a=null;
		try {
			System.out.println(account);
			a=accountRepository.save(account);
//			System.out.println("hii");
//			System.out.println(a);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return a;
	}
	
	public Customer getCustomerById(int id) {
		Customer c= null;
		try {
			c=customerRepository.findById(id);
			return c;
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		return c;
	}

}