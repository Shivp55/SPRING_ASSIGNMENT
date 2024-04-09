package com.project.bank.Entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.InMemoryUserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.UserDetailsManagerConfigurer;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int customer_id;
	private String name;
	
	@Column(unique=true)
	private String email;
	private String address;
	private String postal_code;
	private String password;
	private String ph_no;
	private String dob;
	private String gender;
	private String accnt_type;
	@Column(columnDefinition = "VARCHAR(255) DEFAULT 'ROLE_USER'")
	private String role;
	
	



	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}




	public Customer(int customer_id, String name, String email, String address, String postal_code, String password,
			String ph_no, String dob, String gender, String accnt_type, String role) {
		super();
		this.customer_id = customer_id;
		this.name = name;
		this.email = email;
		this.address = address;
		this.postal_code = postal_code;
		this.password = password;
		this.ph_no = ph_no;
		this.dob = dob;
		this.gender = gender;
		this.accnt_type = accnt_type;
		this.role = role;
	}




	public int getCustomer_id() {
		return customer_id;
	}




	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public String getPostal_code() {
		return postal_code;
	}




	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public String getPh_no() {
		return ph_no;
	}




	public void setPh_no(String ph_no) {
		this.ph_no = ph_no;
	}




	public String getDob() {
		return dob;
	}




	public void setDob(String dob) {
		this.dob = dob;
	}




	public String getGender() {
		return gender;
	}




	public void setGender(String gender) {
		this.gender = gender;
	}




	public String getAccnt_type() {
		return accnt_type;
	}




	public void setAccnt_type(String accnt_type) {
		this.accnt_type = accnt_type;
	}




	public String getRole() {
		return role;
	}




	public void setRole(String role) {
		this.role = role;
	}




	@Override
	public String toString() {
		return "User [customer_id=" + customer_id + ", name=" + name + ", email=" + email + ", address=" + address
				+ ", postal_code=" + postal_code + ", password=" + password + ", ph_no=" + ph_no + ", dob=" + dob
				+ ", gender=" + gender + ", accnt_type=" + accnt_type + ", role=" + role + "]";
	}




	public static UserDetailsManagerConfigurer<AuthenticationManagerBuilder, InMemoryUserDetailsManagerConfigurer<AuthenticationManagerBuilder>>.UserDetailsBuilder withUsername(
			String string) {
		// TODO Auto-generated method stub
		return null;
	}
}