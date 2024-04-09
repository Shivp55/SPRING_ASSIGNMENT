//package com.project.bank.Services;
//
//import java.io.File;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//import java.util.Objects;
//import java.util.stream.Collectors;
//
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.stereotype.Component;
//
//import com.fasterxml.jackson.databind.DeserializationFeature;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.project.bank.Entities.Account;
//import com.project.bank.Entities.Customer;
//
//
//@Component
//public class AccountServices {
//
//	public AccountServices() throws Exception {
//
//	}
//
//	// Define the file location for JSON data
//	public final String fileLocation = new ClassPathResource("static/json/accounts.json").getFile().getAbsolutePath();
//	
//
//	public final String fileLocation1 = new ClassPathResource("static/json/customers.json").getFile().getAbsolutePath();
//
//	public List<Account> viewAccounts() {
//		try {
//
//			// String fileLocation="/resources/static/accounts.json";
//			ObjectMapper objectMapper = new ObjectMapper();
//			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
//			File file = new File(fileLocation);
//			if (file.isFile()) {
//				ArrayList<Account> accountsList = new ArrayList<>(
//						Arrays.asList(objectMapper.readValue(file, Account[].class)));
//				return accountsList;
//			}
//
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return Collections.emptyList();
//	}
//
//	public Account addAccount(Account account) {
//		try {
//			// String fileLocation="/resources/static/accounts.json";
//			ObjectMapper objectMapper = new ObjectMapper();
//			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
//			File file = new File(fileLocation);
//			if (file.isFile()) {
//				ArrayList<Account> accountsList = new ArrayList<>(
//						Arrays.asList(objectMapper.readValue(file, Account[].class)));
//				accountsList.add(account);
//				objectMapper.writeValue(file, accountsList);
//			} else {
//				objectMapper.writeValue(file, account);
//			}
//
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return account;
//	}
//
//	@SuppressWarnings("unchecked")
//	public Customer listCustomer(Long customer_id) {
//		Customer c= null;
//		try {
//			ObjectMapper objectMapper = new ObjectMapper();
//			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
//			File file = new File(fileLocation1);
//			if (file.isFile()) {
//				ArrayList<Customer> customerList = new ArrayList<>(Arrays.asList(objectMapper.readValue(file, Customer[].class)));
//				//System.out.println(customerList);
//				c= customerList.stream().filter(e->e.getCustomer_id()==customer_id).findFirst().get();
//				
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return c;
//	}
//	
//	public String deleteUser(Long id) {
//	    String message = "";
//	    try {
//	        ObjectMapper objectMapper = new ObjectMapper();
//	        objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
//	        //System.out.println(fileLocation);
//	        File file = new File(fileLocation);
//	        if (file.isFile()) {
//	            // Read the existing account list from the file
//	            Account[] accountArray = objectMapper.readValue(file, Account[].class);
//	            List<Account> accountList = new ArrayList<>(Arrays.asList(accountArray));
//
//	            // Remove the account with the specified ID from the list
//	            List<Account> updatedAccountList = accountList.stream()
//	                                            .filter(account -> !Objects.equals(account.getCustomer_id(), id))
//	                                            .collect(Collectors.toList());
//
//	            // Write the updated account list back to the file
//	            objectMapper.writeValue(file, updatedAccountList);
//
//	            // Set success message
//	            message = "success";
//	        }
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	        message = "Error occurred while deleting the account.";
//	    }
//	    return message;
//	}
//
//	
//}
