package com.fapethedev.codsoft.web.project3.task1.products;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SizeService implements ISizeService
{
    private final SizeRepository sizeRepository;

    @Override
    public Size findById(Long id) {
        return sizeRepository.findById(id).orElse(null);
    }

    @Override
    public Size findByName(String name) {
        return sizeRepository.findByName(name).orElse(null);
    }

    @Override
    public Size save(Size Size) {
        return sizeRepository.save(Size);
    }

    @Override
    public Size update(Size Size) {
        return sizeRepository.save(Size);
    }

    @Override
    public void delete(Size Size) {
        sizeRepository.delete(Size);
    }

    @Override
    public List<Size> findAll() {
        return sizeRepository.findAll();
    }
}
