package com.Projects.Continents.mapper;

import com.Projects.Continents.model.Country;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Result;
import java.util.List;

@Mapper
public interface CountryMapper {

    @Results({
        @Result(property = "countryId", column = "country_id"),
        @Result(property = "name", column = "name"),
        @Result(property = "area", column = "area"),
        @Result(property = "nationalDay", column = "national_day"),
        @Result(property = "countryCode2", column = "country_code2"),
        @Result(property = "countryCode3", column = "country_code3"),
        @Result(property = "regionId", column = "region_id")
    })
    List<Country> findAll();
}
