package com.project.bank.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.bank.Dao.CustomerRepository;
import com.project.bank.Entities.Customer;



public class UserDetailsServiceImpl implements UserDetailsService{


	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		Customer customer=customerRepository.getUserByUsername(username);
		System.out.println("Hii");
		System.out.println(customer);
		
		if(customer == null) {
			throw new UsernameNotFoundException("Could not find user");
		}
		
		CustomUserDetails customUserDetails = new CustomUserDetails(customer);
		
		return customUserDetails;
	}

}
