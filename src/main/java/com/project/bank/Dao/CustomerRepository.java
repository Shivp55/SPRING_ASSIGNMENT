package com.project.bank.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.bank.Entities.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	public Customer findById(int id);
	public Customer findByEmailAndPassword(String email, String password);
	
	@Query("Select c from Customer c where c.email= :email")
	public Customer getUserByUsername(@Param("email") String email);

	
	
}
