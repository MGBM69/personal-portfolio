package com.portfolio.backend.Service;

import org.springframework.stereotype.Service;

import com.portfolio.backend.Repository.PersonRepository;
import com.portfolio.backend.model.Person;

@Service
public class PersonService {
	
	public final PersonRepository personRepository;
	
	public PersonService(PersonRepository personRepository) {
		this.personRepository=personRepository;
	}
	
	public Person savePerson(Person person) {
		return this.personRepository.save(person);
		
	}
	
	 public Person findPerson(String firebaseuid) throws UserNotFoundException {
		
		Person person= this.personRepository.findByFirebaseUid(firebaseuid);
		 if(person == null) {
			 throw new UserNotFoundException("User Not Found!");
		 }
		 
		 return person;
	 }

}
