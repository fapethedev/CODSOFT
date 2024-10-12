package com.fapethedev.codsoft.web.project3.task1.products;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping(path = {"/colors", "/colors/"})
@RestController
public class ColorController {

    private final IColorService colorService;

    @GetMapping(path = "{id}")
    public ResponseEntity<Color>findColor(@PathVariable Long id)
    {
        var color = colorService.findById(id);

        return ResponseEntity.ofNullable(color);
    }

    @GetMapping(params = "name")
    public ResponseEntity<Color>findColor(@RequestParam String name)
    {
        var color = colorService.findByName(name);

        return ResponseEntity.ofNullable(color);
    }

    @PostMapping
    public ResponseEntity<Color>save(@RequestBody Color request)
    {
        var color = colorService.save(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(color);
    }

    @PatchMapping
    public ResponseEntity<Color>update(@RequestBody Color request)
    {
        var color = colorService.update(request);

        return ResponseEntity.ok(color);
    }

    @DeleteMapping
    public ResponseEntity<Color>delete(@RequestBody Color color)
    {
        colorService.delete(color);

        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Color>>getAll()
    {
        var colors = colorService.findAll();

        return ResponseEntity.ok(colors);
    }
}
