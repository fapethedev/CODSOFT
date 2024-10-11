package com.fapethedev.codsoft.web.project3.task1.products;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ColorService implements IColorService
{
    private final ColorRepository colorRepository;

    @Override
    public Color findById(Long id) {
        return colorRepository.findById(id).orElse(null);
    }

    @Override
    public Color findByName(String name) {
        return colorRepository.findByName(name).orElse(null);
    }

    @Override
    public Color save(Color color) {
        return colorRepository.save(color);
    }

    @Override
    public Color update(Color color) {
        return colorRepository.save(color);
    }

    @Override
    public void delete(Color color) {
        colorRepository.delete(color);
    }

    @Override
    public List<Color> findAll() {
        return colorRepository.findAll();
    }
}
