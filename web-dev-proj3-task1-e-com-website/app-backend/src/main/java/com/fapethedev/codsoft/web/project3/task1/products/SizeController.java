package com.fapethedev.codsoft.web.project3.task1.products;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping(path = {"/sizes", "/sizes/"})
@RestController
public class SizeController {

    private final ISizeService sizeService;

    @GetMapping(path = "{id}")
    public ResponseEntity<Size> findSize(@PathVariable Long id)
    {
        var size = sizeService.findById(id);

        return ResponseEntity.ofNullable(size);
    }

    @GetMapping(params = "name")
    public ResponseEntity<Size>findSize(@RequestParam String name)
    {
        var size = sizeService.findByName(name);

        return ResponseEntity.ofNullable(size);
    }

    @PostMapping
    public ResponseEntity<Size>save(@RequestBody Size request)
    {
        var size = sizeService.save(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(size);
    }

    @PatchMapping
    public ResponseEntity<Size>update(@RequestBody Size request)
    {
        var size = sizeService.update(request);

        return ResponseEntity.ok(size);
    }

    @DeleteMapping
    public ResponseEntity<Size>delete(@RequestBody Size size)
    {
        sizeService.delete(size);

        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Size>>getAll()
    {
        var sizes = sizeService.findAll();

        return ResponseEntity.ok(sizes);
    }
}
