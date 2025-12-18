package com.Projects.Continents.controller;

import com.Projects.Continents.model.Continent;
import com.Projects.Continents.model.Country;
import com.Projects.Continents.model.Region;
import com.Projects.Continents.model.Language;
import com.Projects.Continents.model.CountryStats;
import com.Projects.Continents.model.CountryFiltered;
import com.Projects.Continents.service.NationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class NationController {

    private final NationService nationService;

    public NationController(NationService nationService) {
        this.nationService = nationService;
    }

    @GetMapping("/continents")
    public List<Continent> getContinents() {
        return nationService.getAllContinents();
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return nationService.getAllCountries();
    }

    @GetMapping("/regions")
    public List<Region> getRegions() {
        return nationService.getAllRegions();
    }


    @GetMapping("/countries/{countryId}/languages")
    public List<Language> getCountryLanguages(
            @PathVariable Integer countryId) {
        return nationService.getLanguagesByCountry(countryId);
    }

    @GetMapping("/countries-stats/max-ratio")
    public List<CountryStats> getCountriesStatsMaxRatio() {
        return nationService.getCountriesStatsMaxRatio();
    }

    // @GetMapping("/countries-filtered/all")
    // public List<CountryFiltered> getCountriesFilteredAll() {
    //     return nationService.getCountriesFilteredAll();
    // }
    
    @GetMapping("/countries-filtered")
    public List<CountryFiltered> getCountriesFilteredAll(@RequestParam(required = false) Integer regionId,
                                                                 @RequestParam(required = false) Integer yearFrom,
                                                                 @RequestParam(required = false) Integer yearTo,
                                                                 @RequestParam(defaultValue = "0") int page,
                                                                 @RequestParam(defaultValue = "10") int size) {
     int offset = page * size;
     return nationService.getFilteredCountries(regionId, yearFrom, yearTo, offset, size);
 }



}
