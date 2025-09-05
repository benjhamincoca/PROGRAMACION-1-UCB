import json

def mostrar_estudiantes_desde_json(nombre_archivo="estudiantes.json"):
    """Lee el archivo JSON y muestra los estudiantes en forma de lista."""
    try:
        with open(nombre_archivo, 'r') as archivo:
            estudiantes = json.load(archivo)

        if not estudiantes:
            print(f"El archivo '{nombre_archivo}' está vacío o no contiene estudiantes.")
            return

        print(f"--- Lista de estudiantes desde el archivo '{nombre_archivo}' ---")
        for i, estudiante in enumerate(estudiantes, 1):
            print(f"Estudiante {i}:")
            print(f"  Nombre: {estudiante['nombre']}")
            print(f"  Edad: {estudiante['edad']}")
            print(f"  Correo: {estudiante['correo']}")
            print(f"  Carrera: {estudiante['carrera']}")
            print(f"  Teléfono: {estudiante['telefono']}")
            print("-" * 20)
    except FileNotFoundError:
        print(f"Error: No se encontró el archivo '{nombre_archivo}'.")
    except json.JSONDecodeError:
        print(f"Error: El archivo '{nombre_archivo}' no tiene un formato JSON válido.")

if __name__ == "__main__":
    mostrar_estudiantes_desde_json()