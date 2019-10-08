## RussianSpotify
## Objetivo
    - Construye un listado de botones en recorriendo el array de objetos `bands`.
    - Cuando un usuario pulse en alguno de los botones, se cambian los datos de la derecha con los datos de la derecha y muestra los datos de esa canción, estos datos se deben coger del array de objetos.
    - Al recargar la página, se carga por defecto el primer elemento del array en la parte derecha.
## Pasos
    1. Construye el HTML mínimo necesario
        1.1 Al menos un `header`, un `nav` y un `main`.
    2. Recorriendo el array de objetos, rellena la navegación de la izquierda con los botones de los grupos. Un botón por grupo.
        2.1 Recorre el array de bandas.
        2.2 Por cada elemento del array (banda), construye la estructura de navegación en javascript
            2.2.1 No te olvides de poner la imagen con sus atributos `src` y `alt`.
            2.2.2 Recuerda que para que se pueda hacer `click` debe haber un `button`. 
    3. Al pulsar en un botón, cambia los datos de la derecha para que muestren los datos adecuados que ha seleccionado el usuario
        2.1 Comprueba en qué botón ha pinchado el usuario (habrá 4 botones);
        2.2 En función del botón que haya pulsado el usuario recoge los datos del array que corresponda.
        2.3 Construye el HTML que se debe poner a la derecha.
            2.3.1 Para que el audio funcione, usa el tag `audio` de HTML.
        2.4 Añade el HTML construido al DOM
    4. Asegurate que la primera vez que el usuario entra, ve el primer elemento 
        4.1 Asegurate que al inicio se llama a la función que construye el DOM de la parte derecha con un elemento por defecto, para que no salga vacío.
## Bonus points
    - 10 points: El HTML valida en el W3C
    - 10 points: El CSS valida en el W3C
    - 10 points: La aplicación es fluida y no se rompe en diferentes pantallas
    - 20 points: La aplicación es responsive y se puede ver en el teléfono movil
    - 10 points: Se utiliza mucho más `document.createElement` que `innerHTML`.