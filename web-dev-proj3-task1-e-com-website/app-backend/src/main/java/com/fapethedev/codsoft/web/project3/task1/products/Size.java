package com.fapethedev.codsoft.web.project3.task1.products;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "sizes")
@Getter
@Setter
@NoArgsConstructor
public class Size
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @Column(name = "in_stock", columnDefinition = "BOOLEAN DEFAULT TRUE")
    private boolean inStock;

    public Size(String name, boolean inStock) {
        this.name = name;
        this.inStock = inStock;
    }
}
