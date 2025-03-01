package com.example.praticienapi.controllers;

import com.example.praticienapi.entities.Praticien;
import com.example.praticienapi.services.AuthService;
import com.example.praticienapi.services.PraticienService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;



@CrossOrigin
@RestController
@RequestMapping("/api/praticiens")
@Tag(name = "Praticiens", description = "Gestion des praticiens médicaux")
public class PraticienController {
    @Autowired
    private PraticienService praticienService;
    private AuthService authService ;

    public PraticienController(PraticienService praticienService) {

        this.praticienService = praticienService;
    }

    // Create or update a practitioner
    @PostMapping("/create")
    @Operation(summary = "Créer un praticien", description = "Ajoute un nouveau praticien")
    public Praticien savePraticien(@RequestBody Praticien praticien) {
        //if (!validateToken(token)) {
          //  , @RequestHeader("Authorization") String token
           // throw new RuntimeException("Unauthorized: Invalid or expired token");
        //}
        return praticienService.savePraticien(praticien);
    }

    // Delete a practitioner
    @DeleteMapping("/{id}")
    @Operation(summary = "Supprimer un praticien", description = "Supprimer un  praticien")
    public void deletePraticien(@PathVariable String id) {
        //@RequestHeader("Authorization") String token
        //if (!validateToken(token)) {
        //    throw new RuntimeException("Unauthorized: Invalid or expired token");
        //}
        praticienService.deletePraticien(id);
    }


    @GetMapping("/all")
    @Operation(summary = "Lister tous les praticiens", description = "Retourne la liste des praticiens")
    public List<Praticien> getAllPraticiens() {
        //if (!validateToken(token)) {
        //    @RequestHeader("Authorization") String token
        // //   throw new RuntimeException("Unauthorized: Invalid or expired token");
        //}
        return praticienService.getAllPraticiens();
    }


    // Fetch practitioner by ID
    @GetMapping("/{id}")
    @Operation(summary = "Recuperer un praticien", description = "recupere les détails d'un praticien via son ID")
    public Praticien getPraticienById(@PathVariable String id) {
        // if (!validateToken(token)) {
        //  , @RequestHeader("Authorization") String token
        //   throw new RuntimeException("Unauthorized: Invalid or expired token");
        // }

        Optional<Praticien> praticien = praticienService.getPraticienById(id);
        return (Praticien) ((Optional<?>) praticien).orElseThrow(() -> new RuntimeException("Praticien not found"));
    }

    @PutMapping("update/{id}")
     @Operation(summary = "Modifier un praticien", description = "Modifie les détails d'un praticien via son ID")
    public Praticien updatePraticien(
            @PathVariable String id,
            @RequestBody Praticien praticienDetails

    ) {
        //if (!validateToken(token)) {
          //  @RequestHeader("Authorization") String token
          //(  throw new RuntimeException("Unauthorized: Invalid or expired token");
        //  }


        Optional<Praticien> praticienOptional = praticienService.getPraticienById(id);
        if (praticienOptional.isEmpty()) {
            throw new RuntimeException("Praticien not found");
        }

        Praticien praticien = praticienOptional.get();


        praticien.setFirstname(praticienDetails.getFirstname());
        praticien.setLastname(praticienDetails.getLastname());
        praticien.setEmail(praticienDetails.getEmail());
        praticien.setPhone(praticienDetails.getPhone());
        praticien.setAdresses(praticienDetails.getAdresses());
        praticien.setSpecialities(praticienDetails.getSpecialities());

        return praticienService.savePraticien(praticien);
    }


    // Token Validation Method
    private boolean validateToken(String token) {
        // Extract token if prefixed with "Bearer"

        String jwt = token.replace("Bearer ", "");
        return authService.validateToken(jwt);
    }
}
