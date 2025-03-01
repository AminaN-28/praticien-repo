package com.example.praticienapi.services;

import com.example.praticienapi.entities.Praticien;
import com.example.praticienapi.repositories.PraticienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PraticienService {

    @Autowired
    private PraticienRepository praticienRepository;

    public List<Praticien> getAllPraticiens() {
        return praticienRepository.findAll();
    }

    public Praticien savePraticien(Praticien praticien) {
        return praticienRepository.save(praticien);
    }

    public void deletePraticien(String id) {
        praticienRepository.deleteById(id);
    }

    // Find a practitioner by ID
    public Optional<Praticien> getPraticienById(String id) {
        return praticienRepository.findById(id);
    }

}
