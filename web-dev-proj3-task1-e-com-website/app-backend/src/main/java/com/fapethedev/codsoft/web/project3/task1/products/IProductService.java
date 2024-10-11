package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService
{
    List<Product> getAllProduct();

    List<Product> searchProducts(String name);
}
