package com.example.praticienapi.entities;

import com.example.praticienapi.enums.TypeAdresse;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Adresses {
    private String street;
    private String city;
    private String postalCode;
    private String country;
    private TypeAdresse addressType;  // Enum pour le type d'adresse

    // Constructeurs, Getters & Setters
    public Adresses() {}

    public Adresses(String street, String city, String postalCode, String country, TypeAdresse addressType) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
        this.addressType = addressType;
    }

    public String getSreet() { return street; }
    public void setSreet(String street) { this.street = street; }

    public String getCity() { return city; }
    public void setCity(String ville) { this.city = city; }

    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String codePostal) { this.postalCode = postalCode; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public TypeAdresse getAddressType() { return addressType; }
    public void setAddressType(TypeAdresse addressType) { this.addressType = addressType; }
}
