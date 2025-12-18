package com.Projects.Continents.model;

import java.math.BigDecimal;

public class CountryFiltered {

    private String continentName;
    private String regionName;
    private String countryName;
    private Integer year;
    private Long population;
    private Long gdp;

    public String getContinentName() { return continentName; }
    public void setContinentName(String continentName) { this.continentName = continentName; }

    public String getRegionName() { return regionName; }
    public void setRegionName(String regionName) { this.regionName = regionName; }

    public String getCountryName() { return countryName; }
    public void setCountryName(String countryName) { this.countryName = countryName; }

    public Integer getYear() { return year; }
    public void setYear(Integer year) { this.year = year; }

    public Long getPopulation() { return population; }
    public void setPopulation(Long population) { this.population = population; }

    public Long getGdp() { return gdp; }
    public void setGdp(Long gdp) { this.gdp = gdp; }
}
