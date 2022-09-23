paquete com. bootcamp;

funciones de clase pública {
    public static void main(String[] args) {
        holamundo();
        holamundo( 4);
        holamundo("Alex");


        String rperfecto = devolverperfecto();
        Sistema. fuera. println("perfecto");

    }

    público estático vacío holamundo() {
        Sistema. fuera. println("hola mundo");

    }
    private static void holamundo(Nombre de cadena) {
        Sistema. fuera. println("Hola" +nombre);
    }

    privado vacío estático  holamundo(Número entero ){
        Sistema. fuera. println("el numero es: " + número);
    }


    private static String devolverperfecto() {
        volver "perfecto";
    }
    int estático privado suma(int num1 ,int num2){
        devolver num1 + num2;
    }

}
