package dev.mikewang0520.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //Only deals with request and getting a response
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "*")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{ImbdId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String ImbdId) {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(ImbdId), HttpStatus.OK);
    }
}
