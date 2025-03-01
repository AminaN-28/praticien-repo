package com.example.praticienapi.controllers;

import com.example.praticienapi.services.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/protected")
@Tag(name = "Secure", description = "Assure la sécurité de la Gestion des praticiens")
public class SecureController {

    @Autowired
    private AuthService authService;

    @GetMapping
    @Operation(summary = "Securiser un backend", description = "Securiser les endpoints ")
    public String secureEndpoint(@RequestHeader("Authorization") String token) {
        if (authService.validateToken(token.replace("Bearer ", ""))) {
            return "Access granted";
        } else {
            throw new RuntimeException("Unauthorized");
        }
    }
}
