package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService
{
    Product findById(Long id);

    Product findByName(String name);

    Product save(Product product);

    Product update(Product product);

    void delete(Product product);
    
    List<Product> getAllProduct();

    List<Product> searchProducts(String name);

    List<Product> searchProducts(Pageable pageable);
    
    List<Product> searchProducts(String name, Pageable pageable);
}
