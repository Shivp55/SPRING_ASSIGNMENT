package com.project.bank.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@GetMapping("")
	public String  Home() {
		return "index";
	}
	
//	@RequestMapping("/login")
//	public String loginUser() {
//		return "/CITIBANK/admin-signin.html";
//	}


}