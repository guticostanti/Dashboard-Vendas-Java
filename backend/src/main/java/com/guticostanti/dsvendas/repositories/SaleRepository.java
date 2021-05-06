package com.guticostanti.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guticostanti.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
