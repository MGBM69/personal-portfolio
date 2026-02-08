package com.portfolio.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portfolio.backend.model.Person;

public interface PersonRepository extends JpaRepository<Person,Long> {
	Person findByFirebaseUid(String firebaseUid);
	Person findByEmail(String email);

}
