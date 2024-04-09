package com.project.bank.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private ObjectMapper objectMapper; // Jackson ObjectMapper for JSON serialization/deserialization

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        for (GrantedAuthority authority : authorities) {
            if (authority.getAuthority().equals("ROLE_ADMIN")) {
                // Redirect to admin page with user details
                response.sendRedirect("/CITIBANK/AdminPages/admin.html?username=" + authentication.getName());
                return;
            } else if (authority.getAuthority().equals("ROLE_USER")) {
                // Redirect to user page with user details
                response.sendRedirect("/CITIBANK/UserPages/user.html?username=" + authentication.getName());
                return;
            }
        }
        // If no specific role is matched, redirect to a default page
        response.sendRedirect("/CITIBANK/default.html");
    }
}
