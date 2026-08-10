package br.com.xico.cliente.rest;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import br.com.xico.cliente.rest.model.Cliente;
import br.com.xico.cliente.rest.model.Genero;

@SpringBootApplication
public class TestaClienteREST {

    public static void main(String[] args) {
        SpringApplication.run(TestaClienteREST.class, args);
        testAdicionarCliente();
        testListarClientes();
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    public static void testAdicionarCliente() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/clientes";

        Cliente cliente = new Cliente();
        cliente.setNomeCompleto("Joãozinho da Silva Sauro");
        cliente.setGenero(Genero.MASCULINO);
        cliente.setRua("Uma Rua");
        cliente.setBairro("Um bairro");
        cliente.setNumero("123");
        cliente.setCidade("Angicos");
        cliente.setEmail("email@email.com");
        cliente.setTelefone("849999999");

        ResponseEntity<Cliente> responseEntity = restTemplate.postForEntity(url, cliente, Cliente.class);

        System.out.println("Status code do adicionarCliente: " + responseEntity.getStatusCode());

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            Cliente novoCliente = responseEntity.getBody();
            System.out.println("Novo cliente adicionado com ID: " + novoCliente.getId());
        } else {
            System.out.println("Erro ao adicionar cliente.");
        }
    }

    public static void testListarClientes() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/clientes";

        ResponseEntity<Cliente[]> responseEntity = restTemplate.getForEntity(url, Cliente[].class);

        System.out.println("Status code do listarClientes: " + responseEntity.getStatusCode());

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            List<Cliente> clientes = Arrays.asList(responseEntity.getBody());
            for (Cliente cliente : clientes) {
                System.out.println("ID: " + cliente.getId() + ", Nome: " + cliente.getNomeCompleto() + ", Gênero: " + cliente.getGenero());
            }
        } else {
            System.out.println("Erro ao listar clientes.");
        }
    }
}
