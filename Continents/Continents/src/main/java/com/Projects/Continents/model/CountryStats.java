package com.Projects.Continents.model;

import java.math.BigDecimal;

public class CountryStats {

    private String name;
    private Long countryId;
    private String countryCode3;
    private Integer year;
    private Long population;
    private Long gdp;


    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getCountryId() { return countryId; }
    public void setCountryId(Long countryId) { this.countryId = countryId; }

    public String getCountryCode3() { return countryCode3; }
    public void setCountryCode3(String countryCode3) { this.countryCode3 = countryCode3; }

    public Integer getYear() { return year; }
    public void setYear(Integer year) { this.year = year; }

    public Long getPopulation() { return population; }
    public void setPopulation(Long population) { this.population = population; }

    public Long getGdp() { return gdp; }
    public void setGdp(Long gdp) { this.gdp = gdp; }
}
