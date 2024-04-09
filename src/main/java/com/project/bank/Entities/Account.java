package com.project.bank.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;

//import jakarta.persistence.OneToOne;

@Entity
public class Account {

	@Id
	private Long customer_id;
	private Long account_number;
	private Long balance;
	private String account_type;
	private String status;
	
	public Long getAccount_number() {
		return account_number;
	}
	public void setAccount_number(Long account_number) {
		this.account_number = account_number;
	}
	public Long getBalance() {
		return balance;
	}
	public void setBalance(Long balance) {
		this.balance = balance;
	}
	public String getAccount_type() {
		return account_type;
	}
	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Long getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(Long customer_id) {
		this.customer_id = customer_id;
	}
	@Override
	public String toString() {
		return "Account [account_number=" + account_number + ", balance=" + balance + ", account_type=" + account_type
				+ ", status=" + status + ", customer_id=" + customer_id + "]";
	}

}