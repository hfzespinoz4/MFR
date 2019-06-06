# Construye tu propia Pokedex

En este ejercicio tendrás que construir una pokedex como la que se muestra en la imagen.
Para ello, tienes disponible una pequeña plantilla en html sobre como debería ser la estructura de cada una de las tarjetas de los Pokemon.

![Pokedex Demo](https://media.giphy.com/media/RimwMAVDbA3CvNk5O0/giphy.gif)

Tu deber es ayudar a Ash Ketchum de Pueblo Paleta a desarrollar el resto de la aplicación para que pueda llevar la cuenta de cuántos Pokemon ha capturado hasta este momento. Para ello tendrás que:

- Reutilizar la plantilla proporcionada tantas veces como Pokemon quieras incluir (En la carpeta [media](../media) tienes 16 imágenes con los Pokemon. Esto es solo una muestra, usa tantos como quieras).
- Asignar clases a los elementos HTML que consideres necesario. Ten en cuenta que dentro de tu fichero `styles.css` solo puedes incluir clases `.clase` o IDs `#id`.
- En el apartado [solution](../solution) tienes una posibilidad de como podría ser implementado. Prueba a realizar el ejercicio primero tú mismo. Ten en cuenta que mirando la solución no aprenderás tanto como si lo intentas hacer tú. No te preocupes si no sale a la primera, pregunta las dudas que tengas y ten en cuenta que es normal que haya cosas que no sepas implementar.

## Consejos

- Antes de ponerte a escribir tu código, piensa primero en la estructura del documento. Localiza e identifica las partes comunes de cada una de las tarjetas (la imagen, el número, el nombre del pokemon, etc).
- Una vez localizadas, en la plantilla HTML busca esas partes y nombra las clases de forma acorde a lo que vaya a ir en cada contenedor, te será más fácil reutilizar luego tu código de CSS.
- La plantilla es solo una pequeña ayuda, si quieres hacerlo de otra forma, siéntete totalmente libre de implementar tu propio código HTML.
- No te agobies pensando que tienes que pensar como hacer todas esas tarjetas. En realidad solo tienes que hacer una! El código para el resto será el mismo, simplemente tendrás que modificar el contenido.
- No desesperes! Los profesores están para ayudarte, si te atascas pregunta a cualquier de tus compañeros o a los profesores, mucho ánimo!

## Bonus points

- Intenta realizar el efecto al pasar el ratón sobre cada una de las tarjetas pokemon. Recuerda que el selector necesario para realizar esta acción es `:hover`
- Intenta realizar la animación inicial del logo. Aunque hay varias maneras de hacerlo, una opción es utilizar el selector css `@keyframes`