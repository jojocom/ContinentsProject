package com.Projects.Continents;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan("com.Projects.Continents.mapper")
public class ContinentsApplication {
    public static void main(String[] args) {
        SpringApplication.run(ContinentsApplication.class, args);
    }
}
