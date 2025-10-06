class pasajero {
    //Atributos de la clase
    nombre = "";
    edad = 0;
    genero = "";
    tipo_boleto = "";

    //constructor
    constructor(paramNombre, paramEdad, paramGenero, paramTipoboleto){
        this.nombre = paramNombre;
        this.edad = paramEdad
        this.genero = paramGenero
        this.tipo_boleto = paramTipoboleto
    }
    //setters
    setNombre(paramNombre){this.nombre = paramNombre; }
    setEdad(paramEdad){this.edad = paramEdad; } 
    setGenero(paramGenero){this.genero = paramGenero; }
    setTipoboleto(paramTipoboleto){this.tipo_boleto = paramTipoboleto; }

    //Getters
    GetNombre(){return this.nombre;}
    GetEdad(){return this.edad;}
    GetGenero(){return this.genero;}
    GetTipoboleto(){return this.tipo_boleto;}

    //Mostrar los valores de los atributos
    ToString(){
        return "Pasajero: " +
        "Nombre: " + this.GetNombre() +
        "Edad: "   + this.GetEdad() + 
        "Genero: " + this.GetGenero() +
        "Tipo de Boleto: " + this.GetTipoboleto();
    }
}
