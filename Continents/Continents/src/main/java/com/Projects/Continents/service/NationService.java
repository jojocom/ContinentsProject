package com.Projects.Continents.service;

import com.Projects.Continents.mapper.CountryMapper;
import com.Projects.Continents.model.Country;
import com.Projects.Continents.mapper.ContinentMapper;
import com.Projects.Continents.model.Continent;
import com.Projects.Continents.mapper.LanguageMapper;
import com.Projects.Continents.model.Language;
import com.Projects.Continents.mapper.RegionMapper;
import com.Projects.Continents.model.Region;
import com.Projects.Continents.mapper.CountryStatsMapper;
import com.Projects.Continents.mapper.CountryFilteredMapper;
import com.Projects.Continents.model.CountryStats;
import com.Projects.Continents.model.CountryFiltered;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NationService {

    private final CountryMapper countryMapper;
    private final ContinentMapper continentMapper;
    private final LanguageMapper languageMapper;
    private final CountryStatsMapper countryStatsMapper;
    private final CountryFilteredMapper countryFilteredMapper;
    private final RegionMapper regionMapper;

    public NationService(CountryMapper countryMapper,ContinentMapper continentMapper,LanguageMapper languageMapper, CountryStatsMapper countryStatsMapper, CountryFilteredMapper countryFilteredMapper,RegionMapper regionMapper) {
        this.countryMapper = countryMapper;
        this.continentMapper = continentMapper;
        this.languageMapper = languageMapper;
        this.countryStatsMapper = countryStatsMapper;
        this.countryFilteredMapper = countryFilteredMapper;
        this.regionMapper = regionMapper;
    }

    public List<Continent> getAllContinents() {
        return continentMapper.findAll();
    }

    public List<Region> getAllRegions() {
        return regionMapper.findAll();
    }


    public List<Country> getAllCountries() {
        return countryMapper.findAll();
    }

    public List<Language> getLanguagesByCountry(Integer countryId) {
        return languageMapper.findByCountryId(countryId);
    }

    public List<CountryStats> getCountriesStatsMaxRatio() {
        return countryStatsMapper.findMaxGdpPerPopulationForAllCountries();
    }

    // public List<CountryFiltered> getCountriesFilteredAll() {
    //     return countryFilteredMapper.findFilteredAllCountries();
    // }

    // public List<CountryFiltered> getFilteredCountries(
    //         Integer regionId,
    //         Integer yearFrom,
    //         Integer yearTo) {
    //
    //     return countryFilteredMapper.findFilteredAllCountries(
    //         regionId,
    //         yearFrom,
    //         yearTo
    //     );

    public List<CountryFiltered> getFilteredCountries(Integer regionId, Integer yearFrom,
                                                      Integer yearTo, int offset, int limit) {
          return countryFilteredMapper.findFilteredAllCountries(regionId, yearFrom, yearTo, offset, limit);
    }

}
