package com.fapethedev.codsoft.web.project3.task1.products;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IColorService
{
    Color findById(Long id);

    Color findByName(String name);

    Color save(Color color);

    Color update(Color color);

    void delete(Color color);

    List<Color> findAll();
}
