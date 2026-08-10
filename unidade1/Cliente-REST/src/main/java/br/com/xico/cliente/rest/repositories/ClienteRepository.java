package br.com.xico.cliente.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.xico.cliente.rest.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
