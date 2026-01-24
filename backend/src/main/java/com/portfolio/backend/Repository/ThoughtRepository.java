package com.portfolio.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portfolio.backend.model.Thought;




public interface ThoughtRepository extends JpaRepository<Thought,Long> {
	
	List<Thought> findAllByOrderByCreatedAtDesc();
	

}
