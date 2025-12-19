# ContinentsProject


Continents folder -> Backend (Springboot 2.7.17)
mvnw.cmd clean install
mvnw.cmd spring-boot:run
Runs on http://localhost:8080 
eg
	http://localhost:8080/countries
	http://localhost:8080/countries-filtered
	http://localhost:8080/countries-filtered?regionId=21&yearTo=1995
	http://localhost:8080/regions
	http://localhost:8080/continents
	http://localhost:8080/countries/3/languages
	http://localhost:8080/countries-stats/max-ratio

continents-app folder -> Frontend (Angular CLI       : 21.0.3
								   Angular           : 21.0.6
							       Node.js           : 24.12.0)
Runs on http://localhost:4200
Angular calls http://localhost:8080/<requestName>


DB -> 12.2.1-MariaDB (with given .sql dump)
spring.datasource.url=jdbc:mariadb://localhost:3306/nation
spring.datasource.username=root
spring.datasource.password=root

