import pywhatkit as kit
import pandas as pd
import time
import random
import urllib.parse
from datetime import datetime

#configuracion

file_path = "FORMATO_DATABASE.xlsx"
output_file_path = "FORMATO_ENVIAR_PROCESADO.xlsx"
daily_message_limit = 500
block_size = 500
block_wait_time = 75


#cargar los datos desde el archivo procesado
df = pd.read_excel(file_path)

#Vaidar que ñas columnas necearias existan en el archiva
required_columns = ["ENLACE.WHATSAPP"]
if not all(column in df.columns for column in required_columns):
    raise ValueError(f"El archivo {file_path} no contiene las columnas necesaarias: {required_columns}")

#variaBles para el control de envios
messages_sent = 0


#ENVIAR MENSAJES
for index, row in df.iterrows():
    if messages_sent >= daily_message_limit:
        print("Limite diario de mensajes alcanzado. Deteniendo el envio.")
        break
    whatsapp_link = row["ENLACE.WHATSAPP"]
    if pd.notnull(whatsapp_link):
        try:
            
            phone = whatsapp_link.split("phone=")[1].split("&")[0]
            enconded_message = whatsapp_link.split("text=")[1]
            message = urllib.parse.unquote(enconded_message)

            kit.sendwhatmsg_instantly(f"+{phone}", message, wait_time=20)
            message_sent += 1
            print(f"Mensaje enviado a {phone}. Total mensajes enviados: {messages_sent}")


            randomWait = random.randint(30, block_wait_time)
            print(f"Esperando {randomWait} segundos antes del siguiente envio...")
            time.sleep(randomWait)


            if messages_sent % block_size == 0:
                print(f"esperando {block_wait_time//60} minutos antes de continuar...")
                time.sleep(block_wait_time)
        except Exception as e:
            print(f"Error al enviar mensaje a {whatsapp_link}: {e}")

#Guardar el archivo procesado
df.to_excel(output_file_path, index=False)
print(f"Proceso de envio finalizado. Archivo guardado en {output_file_path}")