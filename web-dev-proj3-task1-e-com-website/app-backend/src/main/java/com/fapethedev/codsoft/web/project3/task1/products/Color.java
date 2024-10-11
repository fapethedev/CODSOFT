package com.fapethedev.codsoft.web.project3.task1.products;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "colors")
@Getter
@Setter
@NoArgsConstructor
public class Color
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", unique = false, nullable = false)
    private String name;

    @Column(name = "classes", unique = false, nullable = false)
    private String classes;

    @Column(name = "selected_classes", unique = false, nullable = false)
    private String selectedClasses;

    public Color(String name, String classes, String selectedClasses) {
        this.name = name;
        this.classes = classes;
        this.selectedClasses = selectedClasses;
    }
}
