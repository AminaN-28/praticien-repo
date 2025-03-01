package com.example.praticienapi.entities;


import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "praticiens")
@Tag(name = "Praticien", description = "Modele / Entité")
public class Praticien {
    @Id
    private String id;

    // User's Identity
    private String lastname;
    private String firstname;
    private String email;
    private String phone;

    // Liste des adresses du praticien
    private List<String> adresses;

    // Liste des spécialités
    private List<String> specialities;

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getLastname() { return lastname; }
    public void setLastname(String lastname) { this.lastname = lastname; }

    public String getFirstname() { return firstname; }
    public void setFirstname(String firstname) { this.firstname = firstname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public List<String> getAdresses() { return adresses; }
    public void setAdresses(List adresses) { this.adresses = adresses; }

    public List<String> getSpecialities() { return specialities; }
    public void setSpecialities(List specialities) { this.specialities = specialities; }


}
