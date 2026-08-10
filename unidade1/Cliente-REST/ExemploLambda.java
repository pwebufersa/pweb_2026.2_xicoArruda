import java.util.Arrays;
import java.util.List;

public class ExemploLambda {

    public static void main(String[] args) {
        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        // List<Integer> numeros = criarListaDeNumeros(8591651);
        // List<Integer> numeros = criarListaDeNumeros(99999999);

        long startTimeIterativo = System.nanoTime();
        int somaIterativa = somarNumerosIterativo(numeros);
        long endTimeIterativo = System.nanoTime();
        double durationIterativo = (endTimeIterativo - startTimeIterativo) / 1_000_000.0;

        long startTimeFuncional = System.nanoTime();
        int somaFuncional = somarNumerosFuncional(numeros);
        long endTimeFuncional = System.nanoTime();
        double durationFuncional = (endTimeFuncional - startTimeFuncional) / 1_000_000.0;

        long startTimeFuncionalParalela = System.nanoTime();
        int somaFuncionalParalela = somarNumerosFuncionalParalela(numeros);
        long endTimeFuncionalParalela = System.nanoTime();
        double durationFuncionalParalela = (endTimeFuncionalParalela - startTimeFuncionalParalela) / 1_000_000.0;

        System.out.println("A soma dos números é (iterativa): " + somaIterativa);
        System.out.printf("Tempo de execução (iterativa): %.6f milissegundos\n", durationIterativo);
        System.out.println("A soma dos números é (funcional): " + somaFuncional);
        System.out.printf("Tempo de execução (funcional): %.6f milissegundos\n", durationFuncional);
        System.out.println("A soma dos números é (funcional paralela): " + somaFuncionalParalela);
        System.out.printf("Tempo de execução (funcional paralela): %.6f milissegundos\n", durationFuncionalParalela);
    }

    public static int somarNumerosIterativo(List<Integer> numeros) {
        int soma = 0;
        for (int num : numeros) {
            soma += num;
        }
        return soma;
    }

    public static int somarNumerosFuncional(List<Integer> numeros) {
        return numeros.stream().reduce(0, Integer::sum);
    }

    public static int somarNumerosFuncionalParalela(List<Integer> numeros) {
        return numeros.parallelStream().mapToInt(Integer::intValue).sum();
    }

    public static List<Integer> criarListaDeNumeros(int tamanho) {
        Integer[] array = new Integer[tamanho];
        for (int i = 0; i < tamanho; i++) {
            array[i] = i + 1;
        }
        return Arrays.asList(array);
    }
}
