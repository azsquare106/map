package com.azsquare.map.controller;


import com.azsquare.map.model.Position;
import com.azsquare.map.model.User;
import com.azsquare.map.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


@Controller
public class MapController {

    @Autowired
    private MapService mapService;


    @GetMapping("/")
    public String getHome(){
        return "home-map";
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
        List<User> users = new ArrayList<>();
        User user = new User();
        user.setName("Carlos");
        user.setLastName("Nieblas");
        user.setNumberOfPlaces(2);
        user.setType("Traveler");
        users.add(user);

        return ResponseEntity.ok().body(users);
    }


    @PostMapping("/search")
    public ResponseEntity<?> getPosition(@RequestBody String search){


         List<Position> positions = new ArrayList<>();
         positions.add(new Position("33.779","-97.808"));
         positions.add(new Position("33.300","-96.808"));

        return ResponseEntity.ok().body(positions);
    }




}
