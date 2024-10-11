package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long> {
    Optional<Size> findByName(String name);
}
