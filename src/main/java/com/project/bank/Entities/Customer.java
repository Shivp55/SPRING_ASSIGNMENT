package com.project.bank.Entities;


import jakarta.persistence.Entity;

@Entity
public class Customer {


//	@GeneratedValue(strategy=GenerationType.AUTO)

	private int customer_id;
	private String name;
	private String email;
	private String address;
	private String postal_code;
	private String password;
	private String ph_no;
	private String dob;
	private String gender;





	public Customer(int customer_id, String name, String email, String address, String postal_code, String password,
			String ph_no, String dob, String gender) {
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
	}


	public Customer() {
		super();
		// TODO Auto-generated constructor stub
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


		@Override
	public String toString() {
		return "Customer [customer_id=" + customer_id + ", name=" + name + ", email=" + email + ", address=" + address
				+ ", postal_code=" + postal_code + ", password=" + password + ", ph_no=" + ph_no + ", dob=" + dob
				+ ", gender=" + gender + "]";
	}






}
