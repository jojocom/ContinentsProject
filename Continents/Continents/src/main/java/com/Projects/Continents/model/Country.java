package com.Projects.Continents.model;

import java.math.BigDecimal;
import java.util.Date;

public class Country {
    private BigDecimal countryId;
    private String name;
    private Long area;
    private Date nationalDay;
    private String countryCode2;
    private String countryCode3;
    private BigDecimal regionId;

    // Getters and setters
    public BigDecimal getCountryId() { return countryId; }
    public void setCountryId(BigDecimal countryId) { this.countryId = countryId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getArea() { return area; }
    public void setArea(Long area) { this.area = area; }

    public Date getNationalDay() { return nationalDay; }
    public void setNationalDay(Date nationalDay) { this.nationalDay = nationalDay; }

    public String getCountryCode2() { return countryCode2; }
    public void setCountryCode2(String countryCode2) { this.countryCode2 = countryCode2; }

    public String getCountryCode3() { return countryCode3; }
    public void setCountryCode3(String countryCode3) { this.countryCode3 = countryCode3; }

    public BigDecimal getRegionId() { return regionId; }
    public void setRegionId(BigDecimal regionId) { this.regionId = regionId; }
}
