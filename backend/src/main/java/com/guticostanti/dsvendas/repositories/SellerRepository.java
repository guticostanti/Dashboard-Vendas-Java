package com.guticostanti.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guticostanti.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
