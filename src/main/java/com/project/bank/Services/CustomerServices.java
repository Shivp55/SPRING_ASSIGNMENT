package com.project.bank.Services;


import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.bank.Entities.Customer;

@Component
public class CustomerServices {

	public CustomerServices() throws Exception {

	}

	public final String fileLocation = new ClassPathResource("static/json/customers.json").getFile().getAbsolutePath();
	public String getUser(String email, String password){
		String c="";
		try {

//			ObjectMapper objectMapper = new ObjectMapper();
//			List<Customer> jsonArray= objectMapper.readValue(null, null)
//			c=list.stream().filter(e->e.getEmail()==email && e.getPassword()==password).findFirst().get();
			if(email=="admin@gmail.com" && password=="Admin@1234") {
				System.out.println(email);
				System.out.println(password);

				c="success";

			}
		}catch(Exception e) {
			e.printStackTrace();
		}

		return c;
	}

	public List<Customer> listCustomers(){
		try {

			//String fileLocation="./src/main/resources/customers.json";
			ObjectMapper objectMapper= new ObjectMapper();
			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
			File file=new File(fileLocation);
			if(file.isFile()) {
				ArrayList<Customer> customerList=new ArrayList<>(Arrays.asList(objectMapper.readValue(file,Customer[].class)));
				return customerList;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}

		return Collections.emptyList();

	}

	public Customer addCustomer(Customer c) {
		try {

			//String fileLocation="./src/main/resources/customers.json";
			ObjectMapper objectMapper= new ObjectMapper();
			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
			File file=new File(fileLocation);
			if(file.isFile()) {
				ArrayList<Customer> customerList=new ArrayList<>(Arrays.asList(objectMapper.readValue(file,Customer[].class)));

				customerList.add(c);
				objectMapper.writeValue(file, customerList);
			}
			else {
				objectMapper.writeValue(file, c);
			}

		}catch(Exception e) {
			e.printStackTrace();


		}
		return c;
	}
	
	

}

