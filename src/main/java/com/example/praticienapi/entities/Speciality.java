package com.example.praticienapi.entities;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Speciality {
    private String name;
    private String description;

    // Constructeurs, Getters & Setters
    public Speciality() {
    }

    public Speciality(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
