import json

def ingresar_estudiantes():
    """Permite al usuario ingresar los datos de los estudiantes."""
    estudiantes = []
    print("--- Ingreso de datos de estudiantes ---")
    while True:
        nombre = input("Nombre del estudiante (o 'salir' para terminar): ")
        if nombre.lower() == 'salir':
            break

        while True:
            try:
                edad = int(input("Edad: "))
                break
            except ValueError:
                print("Por favor, ingresa una edad válida (número).")

        correo = input("Correo electrónico: ")
        carrera = input("Carrera: ")
        telefono = input("Número de teléfono: ")

        estudiante = {
            "nombre": nombre,
            "edad": edad,
            "correo": correo,
            "carrera": carrera,
            "telefono": telefono
        }
        estudiantes.append(estudiante)
        print("-" * 20)
    return estudiantes

def mostrar_estudiantes(estudiantes):
    """Muestra la lista de estudiantes ingresada."""
    if not estudiantes:
        print("\nNo se ingresaron estudiantes.")
        return

    print("\n--- Lista de estudiantes registrados ---")
    for i, estudiante in enumerate(estudiantes, 1):
        print(f"Estudiante {i}:")
        print(f"  Nombre: {estudiante['nombre']}")
        print(f"  Edad: {estudiante['edad']}")
        print(f"  Correo: {estudiante['correo']}")
        print(f"  Carrera: {estudiante['carrera']}")
        print(f"  Teléfono: {estudiante['telefono']}")
        print("-" * 20)

def guardar_json(datos, nombre_archivo="estudiantes.json"):
    """Guarda los datos en un archivo JSON."""
    try:
        with open(nombre_archivo, 'w') as archivo:
            json.dump(datos, archivo, indent=4)
        print(f"\nDatos guardados exitosamente en '{nombre_archivo}'.")
    except IOError as e:
        print(f"\nError al guardar el archivo: {e}")

if __name__ == "__main__":
    lista_estudiantes = ingresar_estudiantes()
    mostrar_estudiantes(lista_estudiantes)
    guardar_json(lista_estudiantes)