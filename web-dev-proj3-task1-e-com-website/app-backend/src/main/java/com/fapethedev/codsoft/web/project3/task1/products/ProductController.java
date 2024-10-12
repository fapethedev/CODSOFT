package com.fapethedev.codsoft.web.project3.task1.products;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "cors.origins")
@RequiredArgsConstructor
@RequestMapping(path = { "/products", "/products/"})
@RestController
public class ProductController {

    private final IProductService productService;

    @GetMapping(path = "/search", params = {"name", "page"})
    public ResponseEntity<Object> searchProduct(
            @RequestParam String productName, @RequestParam Pageable pageable) {
        Object response;

        if (pageable == null && productName.isEmpty())
        {
            return ResponseEntity.badRequest()
                    .body("/search must have at least one parameter either the name of the product or the page number");
        }
        else if (productName.isEmpty())
        {
            response = productService.searchProducts(pageable);
        }
        else if (pageable == null)
        {
            response = productService.searchProducts(productName);
        }
        else
        {
            response = productService.searchProducts(productName, pageable);
        }

        return ResponseEntity.ok(response);
    }
    
    @GetMapping(path = "{id}")
    public ResponseEntity<Product>findProduct(@PathVariable Long id)
    {
        var product = productService.findById(id);

        return ResponseEntity.ofNullable(product);
    }

    @GetMapping(params = "name")
    public ResponseEntity<Product>findProduct(@RequestParam String name)
    {
        var product = productService.findByName(name);

        return ResponseEntity.ofNullable(product);
    }

    @PostMapping
    public ResponseEntity<Product>save(@RequestBody Product request)
    {
        var product = productService.save(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @PatchMapping
    public ResponseEntity<Product>update(@RequestBody Product request)
    {
        var product = productService.update(request);

        return ResponseEntity.ok(product);
    }

    @DeleteMapping
    public ResponseEntity<Product>delete(@RequestBody Product product)
    {
        productService.delete(product);

        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Product>>getAll()
    {
        var products = productService.getAllProduct();

        return ResponseEntity.ok(products);
    }
}
