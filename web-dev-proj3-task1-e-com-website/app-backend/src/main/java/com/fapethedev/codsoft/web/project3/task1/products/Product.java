package com.fapethedev.codsoft.web.project3.task1.products;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "href")
    private String href;

    @Column(name = "image_src")
    private String imageSrc;

    @Column(name = "image_alt")
    private String imageAlt;

    private Double price;

    private String color;

    private Double rating;

    @Column(name = "review_count")
    private Integer reviewCount;

    @ManyToMany
    private List<Color> colors;

    @ManyToMany
    private List<Size> sizes;

}
