package com.project.bank.Dao;

import org.springframework.data.repository.CrudRepository;

import com.project.bank.Entities.Admin;


public interface AdminRepository extends CrudRepository<Admin, Integer> {
	public Admin findById(int id);

	public Admin findByEmailAndPassword(String email, String password);
}
