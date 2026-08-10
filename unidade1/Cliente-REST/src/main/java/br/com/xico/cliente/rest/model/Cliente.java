package br.com.xico.cliente.rest.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "clientes")
@Data
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCompleto;

    //@Enumerated(EnumType.STRING)
    private Genero genero;

    private String rua;
    private String bairro;
    private String numero;
    private String cidade;
    private String email;
    private String telefone;
}
