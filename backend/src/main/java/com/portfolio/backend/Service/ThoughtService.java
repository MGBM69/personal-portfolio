package com.portfolio.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.backend.Repository.ThoughtRepository;
import com.portfolio.backend.model.Thought;

@Service
public class ThoughtService {
	
	public final ThoughtRepository thoughtRepository;
	
	public ThoughtService(ThoughtRepository thoughtRepository) {
		this.thoughtRepository=thoughtRepository;
	}
	
	public Thought saveThought(Thought thought) {
        return thoughtRepository.save(thought);
    }

    public List<Thought> getAllThoughts() {
        return thoughtRepository.findAllByOrderByCreatedAtDesc();
    	
    }

}
