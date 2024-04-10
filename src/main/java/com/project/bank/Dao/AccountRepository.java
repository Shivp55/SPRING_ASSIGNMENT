package com.project.bank.Dao;

import org.springframework.data.repository.CrudRepository;

import com.project.bank.Entities.Account;



public interface AccountRepository extends CrudRepository<Account, Integer> {
	
}
