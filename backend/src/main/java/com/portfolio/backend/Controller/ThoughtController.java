package com.portfolio.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.backend.Service.ThoughtService;
import com.portfolio.backend.model.Thought;

@RestController
@RequestMapping("/api/thoughts")
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://banuka.dev",
        "https://www.banuka.dev",
        "https://personal-portfolio-three-delta-43.vercel.app"
})
public class ThoughtController {

    private final ThoughtService thoughtService;
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public ThoughtController(ThoughtService thoughtService) {
        this.thoughtService = thoughtService;
    }

    // POST: Add new thought
    @PostMapping
    public ResponseEntity<Thought> addThought(@RequestBody Thought thought) {
        Thought savedThought = thoughtService.saveThought(thought);
        messagingTemplate.convertAndSend("/server2client/thoughts", savedThought);
//        System.out.println("Broadcasting thought: " + savedThought.getName());
        return ResponseEntity.ok(savedThought);
    }

    // GET: Fetch all thoughts
    @GetMapping
    public ResponseEntity<List<Thought>> getAllThoughts() {
    	
        return ResponseEntity.ok(thoughtService.getAllThoughts());
    }
}

