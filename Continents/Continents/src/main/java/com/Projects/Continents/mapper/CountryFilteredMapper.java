package com.Projects.Continents.mapper;

import com.Projects.Continents.model.CountryFiltered;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface CountryFilteredMapper {
    List<CountryFiltered> findFilteredAllCountries(
        @Param("regionId") Integer regionId,
        @Param("yearFrom") Integer yearFrom,
        @Param("yearTo") Integer yearTo,
        @Param("offset") int offset,
        @Param("limit") int limit
    );
}
