Crea un juego para que un usuario tenga que adivinar un número entre cero y 100:

- El usuario tiene que introducir un número a través de un input y enviarlo a través de un botón. 
- Tenemos que avisarle cada vez que pulse el botón de enviar de si el número es correcto y si no, comprobar si se ha pasado por arriba o por abajo y avisarle.
- Si sobrepasa los 10 intentos le avisamos que ha perdido e iniciamos el juego otra vez
Cómo hacerlo:

1. Crea el HTML necesario: input, botón, número de vidas...etc.
2. Crea los estilos básicos para que se vea bien
3. Crea una variable que te de un número al azar entre cero y 100
3. Crea una variable que registre los intentos que ha hecho el usuario. Al principio vale cero
3. Registra el click en el botón
4. Crea una función que compruebe si el número que ha introducido el usuario es igual al númbero al azar. 
    4.1 Si es igual: felicita al usuario visualmente y reinicia el contador de intentos a cero y crea otro número al azar 
    4.2 Si es mayor: Avisa al usuario que se ha pasado, restale una vida y continúa.
    4.3 Si es menor: Avisa al usuario que se ha ido por arriba, restale una vida y continúa.
5. Si el usuario llega a 10 intentos, avísale que ha perdido y reinicia todos los valores.