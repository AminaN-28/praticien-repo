package com.example.praticienapi.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class AuthService {
    @Value("${supabase.jwt.secret}")
    private String jwtSecret;

    public boolean validateToken(String token) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(Base64.getEncoder().encodeToString(jwtSecret.getBytes()))
                    .parseClaimsJws(token)
                    .getBody();
            return claims != null;
        } catch (Exception e) {
            return false;
        }
    }
}
