package com.Projects.Continents.mapper;

import com.Projects.Continents.model.Continent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;

import java.util.List;

@Mapper
public interface ContinentMapper {
    @Results({
        @Result(property="continentId", column="continent_id"),
        @Result(property="name", column="name")
    })
    List<Continent> findAll();
}
