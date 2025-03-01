package com.example.praticienapi.repositories;

import com.example.praticienapi.entities.Praticien;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PraticienRepository extends MongoRepository<Praticien,String> {
}
