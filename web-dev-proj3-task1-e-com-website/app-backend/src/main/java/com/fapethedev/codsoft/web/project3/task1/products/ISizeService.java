package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ISizeService
{
    Size findById(Long id);

    Size findByName(String name);

    Size save(Size size);

    Size update(Size size);

    void delete(Size size);

    List<Size> findAll();
}
