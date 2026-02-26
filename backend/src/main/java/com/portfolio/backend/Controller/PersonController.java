package com.portfolio.backend.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.backend.Service.PersonService;
import com.portfolio.backend.model.Person;

@RestController
@RequestMapping("api/person")
@CrossOrigin(origins = { "http://localhost:4200",
		"https://personal-portfolio-orpin-one-49.vercel.app/"
		})
public class PersonController {
	
	private  final PersonService personService;

	
	public PersonController(PersonService personService) {
		this.personService=personService;
	}
	
	
	@PostMapping("/register")
    public ResponseEntity<Person> registerPerson(@RequestBody Person person) {
        Person savedPerson = personService.savePerson(person);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPerson);
    }
	
	@GetMapping("/{firebaseUid}")
	public ResponseEntity<Person> findPersonById(@PathVariable String firebaseUid){
		return ResponseEntity.ok(this.personService.findPerson(firebaseUid));
	}
	
}
