document.addEventListener("DOMContentLoaded", function(){

    let div = document.querySelector("div");
    let boton = document.querySelector("button");



    //Creo el event listener para cuando se haga clic en el div salte la alerta

    div.addEventListener("click", function(){
        alert("Hola! Soy el div");
    })

    //Creo el event listener para cuando se haga clic en el botón salte la otra alerta que acepta el parámetro "e"
    //Llamaremos al stopPropagation sobre el objeto "e"
    boton.addEventListener("click", function(e){
        e.stopPropagation();
        alert("¡Hola!");
    })



})


/*1- Un evento es algo que sucede con el programa, por ejemplo un click. Esto devolverá una respuesta del programa.
2- Para manejar los eventos con javascript utilizamos document.addEventListener("evento", funcion()). Lo que "maneja" al evento en sí es la función que programamos. Por ejemplo, quiero que al hacer clic en un botón la consola me devuelva algo. Para eso crearíamos una variable que contenga el botón que queremos. Entonces haríamos let boton = document.getElementsByTagName("button") y posteriormente haríamos boton.addEventListener("click", function(){console.log("Hola")})
3- Creo que es mejor utilizar el addEventListener en Javascript como práctica porque cuando un programa es muy complejo pierde eficiencia. Además un mismo archivo javascript se puede usar en varios archivos html, de este modo no repetimos código innecesariamente y prevenimos errores. También, la función del HTML es darle estructura a la página o aplicación mientras que los archivos javascript se utilizan para darle funcionalidad a la página, por lo que sería más correcto utilizar el addEventListener allí.
4-  mouseover: lo utilizaría, por ejemplo, para un tooltip que explique algo de una página ya que el evento ocurre cuando un usuario mantiene el puntero sobre un elemento.
focus: cuando quiero que al hacer algo un elemento gane el foco. Podría ser útil para un CTA o un tutorial.
keydown: cuando el usuario presiona una tecla. Podría ser útil si el usuario presiona la flecha hacia abajo para seguir bajando, y si no hay más contenido que le salte una alerta advirtiéndole eso.
5- La solución se encuentra en la rama "solución" de mi repositorio */