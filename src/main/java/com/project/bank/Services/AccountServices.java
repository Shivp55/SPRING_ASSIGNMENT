package com.project.bank.Services;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.bank.Entities.Account;


@Component
public class AccountServices {

	public AccountServices() {

	}

	public List<Account> viewAccounts(){
		try {

			String fileLocation="./src/main/resources/accounts.json";
			ObjectMapper objectMapper= new ObjectMapper();
			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
			File file=new File(fileLocation);
			if(file.isFile()) {
				ArrayList<Account> accountsList= new ArrayList<>(Arrays.asList(objectMapper.readValue(file, Account[].class)));
				return accountsList;
			}

		}catch(Exception e) {
			e.printStackTrace();
		}
		return Collections.emptyList();
	}

	public Account addAccount(Account account) {
		try {
			String fileLocation="./src/main/resources/accounts.json";
			ObjectMapper objectMapper= new ObjectMapper();
			objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
			File file=new File(fileLocation);
			if(file.isFile()) {
				ArrayList<Account> accountsList= new ArrayList<>(Arrays.asList(objectMapper.readValue(file, Account[].class)));
				accountsList.add(account);
				objectMapper.writeValue(file, accountsList);
			}
			else {
				objectMapper.writeValue(file, account);
			}

		}catch(Exception e) {
			e.printStackTrace();
		}
		return account;
	}
}

