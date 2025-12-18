package com.Projects.Continents.mapper;

import com.Projects.Continents.model.Language;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Result;
import java.util.List;

@Mapper
public interface LanguageMapper {

    List<Language> findByCountryId(Integer countryId);
}


