package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);

    List<Product> findByNameContainingIgnoreCase(String name);

    Page<Product> findAllByNameContainingIgnoreCase(String name, Pageable pageable);

}
