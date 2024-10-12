package com.fapethedev.codsoft.web.project3.task1.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${cors.origins}")
    private String [] origins;
    @Value("${cors.path-pattern}")
    private String pathPattern;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping(pathPattern)
                .allowedOrigins(origins)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
