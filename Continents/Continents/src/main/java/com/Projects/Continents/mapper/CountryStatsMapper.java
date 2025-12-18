package com.Projects.Continents.mapper;

import com.Projects.Continents.model.CountryStats;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface CountryStatsMapper {

    List<CountryStats> findMaxGdpPerPopulationForAllCountries();
}
