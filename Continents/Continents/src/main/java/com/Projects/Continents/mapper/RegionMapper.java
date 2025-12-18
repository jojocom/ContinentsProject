package com.Projects.Continents.mapper;

import com.Projects.Continents.model.Region;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;

import java.util.List;

@Mapper
public interface RegionMapper {
    @Results({
        @Result(property="regionId", column="region_id"),
        @Result(property="name", column="name")
    })
    List<Region> findAll();
}
