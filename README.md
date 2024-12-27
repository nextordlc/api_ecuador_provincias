# api_ecuador_provincias
Hola, mi nombre es Nestor, esta aplicación es un servicio de API REST full.
La finalidad de esta API es proporcionar una lista de provincias, cantones y parroquias existentes en el país de Ecuador.
Su uso de libre, y el código esta a su disposición para que puedan darles mejoras o para agregar este servicio en sus páginas web o aplicaciones web.
Aunque este servicio está disponible en https://api-ecuador-provincias.onrender.com/api/  
Sin embargo es poco recomendable usar el link debido a que el repositorio cuenta con limitaciones de uso, es decir, despúes de un determinado número de consultas la api deja de funcionar.
Para esto usted puede descargar el código, mejorarlo y subirlo a su propio hosting o cloud service

DETALLES DE USO

Mensaje de servicio en funcionamiento:
"El servicio está conectado y funcionando correctamente"
Cuando se ingresa directamente a la url del servicio sin pasar ningún otro parámetro devuelve este mensaje en la pantalla de su navegador
Ejemplos de url:
https://api-ecuador-provincias.onrender.com/
https://www.you_url.com/

Mensaje en formato json:
Cuando se pasa el parámetro "api" en la url devuelve un mensaje en formato json dando algunos detalles de la API REST:
ejemplo del mensaje:
{
    "message": "Bienvenido a API REST ECUADOR, este servicio fue desarrollado para listar provincias, cantones y parroquias del país de Ecuador, su uso es libre",
    "details": "Para más detalles de la configuración y uso de esta API REST dirigase a la página: **Ingrese link**",
    "licence": "Apache License 2.0"
}
Ejemplos de url:
https://api-ecuador-provincias.onrender.com/api/
https://www.you_url.com/api/

LISTAR PROVINCIAS
Lista completa de las provincias:
Para listar las pronvicas del país de Ecuador se debe pasar el parámetro "provincias" después del parámetro "api". Esto devolverá un JSON de un array con las provincias del ecuador con el siguiente formato:
[
    {
        "id": 1,
        "provincia": "Azuay"
    },
    {
    ...
    }
]
Donde:
id: hace referencia a un identificador de la provincia
provincia: Contiene el nombre de la provincia
Ejemplos de url:
https://api-ecuador-provincias.onrender.com/api/provincias/
https://www.you_url.com/api/provincias/

Mostrar detalles de la provincia
Para mostrar detalles individuales de la provincia debe enviar su identificador después del parámetro "provincias"
Ejemplos de url:
https://api-ecuador-provincias.onrender.com/api/provincias/9/
https://www.you_url.com/api/provincias/9/
Resultado esperado:
{
    "id": 9,
    "provincia": "Guayas"
}

MOSTRAR LA LISTA DE CANTONES DE UNA PROVINCIA
Para mostrar la lista completa de cantones de una prvincia se necesitan los siguientes parámetros:
https://you_url.com/api/provincias/:id/cantones/
Donde la id hace referencia al identificador de la provincia
Ejemplo de url:
https://api-ecuador-provincias.onrender.com/api/provincias/9/cantones/
Resultado esperado, en formato JSON, devuelve un array de objetos con las claves: id, canton, id_provincia
Donde:
id = hace referencia al identificador del cantón
canton = nombre del cantón
id_provincia = hace referencia al identificador de la provincia a la que pertenece el cantón
Ejemplo de resultado de la url anterior:
[
    {
        "id": 75,
        "canton": "Guayaquil",
        "id_provincia": 9
    },
    {
        "id": 76,
        "canton": "Alfredo Baquerizo Moreno (Juján)",
        "id_provincia": 9
    },
    {
        "id": 77,
        "canton": "Balao",
        "id_provincia": 9
    },
    ...
]

Mostrar detalle individual de un cantón
Para mostrar el detalle individual de un cantón se necesitan los siguientes parámetros:
https://you_url.com/api/cantones/:id
Donde la id hace referencia al identificador del cantón al que se quiere obtener el detalle individual
Ejemplo de url:
https://api-ecuador-provincias.onrender.com/api/cantones/75
Resultado esperado, en formato JSON: devuelve un objeto con las claves: id, canton, id_provincia
Donde:
id = hace referencia al identificador del cantón
canton = nombre del cantón
id_provincia = hace referencia al identificador de la provincia a la que pertenece el cantón
Ejemplo de resultado de la url anterior:
{
    "id": 75,
    "canton": "Guayaquil",
    "id_provincia": 9
}

MOSTRAR LA LISTA DE PARROQUIAS DE UN CANTÓN
Para mostrar la lista completa de parroquias de un cantón se necesitan los siguientes parámetros:
https://you_url.com/api/cantones/:id/parroquias/
Donde la id hace referencia al identificador del cantón al cual se requiere listar sus provincias
Ejemplo de url:
https://api-ecuador-provincias.onrender.com/api/cantones/75/parroquias
Resultado esperado, en formato JSON, devuelve un array de objetos con las claves: id, parroquia, id_canton
Donde:
id = hace referencia al identificador de la parroquia
parroquia = nombre de la parroquia
id_canton = hace referencia al identificador del cantón al que pertenece la parroquia
Ejemplo de resultado de la url anterior:
[
    {
        "id": 510,
        "parroquia": "Ayacucho",
        "id_canton": 75
    },
    {
        "id": 511,
        "parroquia": "Bolívar (Sagrario)",
        "id_canton": 75
    },
    {
        "id": 512,
        "parroquia": "Carbo (Concepción)",
        "id_canton": 75
    },
    ...
]

Mostrar detalle individual de una parroquia
Para mostrar el detalle individual de una parroquia se necesitan los siguientes parámetros:
https://you_url.com/api/parroquias/:id
Donde la id hace referencia al identificador de la parroquia de la que se quiere obtener el detalle individual
Ejemplo de url:
https://api-ecuador-provincias.onrender.com/api/parroquias/516
Resultado esperado, en formato JSON: devuelve un objeto con las claves: id, parroquia, id_canton
Donde:
id = hace referencia al identificador de la parroquia
parroquia = nombre de la parroquia
id_canton = hace referencia al identificador del cantón al que pertenece la parroquia
Ejemplo de resultado de la url anterior:
{
    "id": 516,
    "parroquia": "Nueve de Octubre",
    "id_canton": 75
}
