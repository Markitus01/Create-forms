document.addEventListener('DOMContentLoaded',f_main);

function f_main()
{
        // 1
        let h21 = document.getElementsByTagName('h2')[0];
        let h2_1r = document.querySelector('h2');
        console.info(h2_1r.textContent);
        console.info(h21.textContent);
        // 2
        let lis = document.querySelectorAll('li');
        console.info(lis);
        // 3 >
        let labelFillesP = document.querySelectorAll('p > label');
        console.info(labelFillesP.length);
        // 4
        let h3_2 = document.getElementsByTagName('h3')[1];
        console.info(h3_2);
        // 5 ,
        let etisP_input = document.querySelectorAll('p , input');
        Array.from(etisP_input).forEach(
            function (v,i,a) {
                console.info(v);
            }
        );

        //Ex 6
        let containers = document.getElementsByClassName("container");
        Array.from(containers).forEach
        (
            function (e,p,a)
            {
                console.log(e);
            }
        );

        //Ex 7
        let desconeguts = document.getElementsByClassName("desconeguda");
        Array.from(desconeguts).forEach
        (
            function (e,p,a)
            {
                console.log(e);
            }
        );

        //Ex 8
        let nou = document.getElementById("nou");
        console.log(nou);

        //Ex 9
        let ok = document.getElementById("ok");
        console.log(ok);

        //Ex 10
        let sensacio = document.getElementsByName("sensació");
        Array.from(sensacio).forEach
        (
            function (e,p,a)
            {
                console.log(e);
            }
        );

        //Ex 11
        let gos = document.getElementsByName("gos");
        Array.from(gos).forEach
        (
            function (e,p,a)
            {
                console.log(e);
            }
        );

        //Ex 12 
        let etiquetes_a = document.querySelectorAll("li a");
        Array.from(etiquetes_a).forEach
        (
            function (e,p,a) // e = element, p = posicio, a = array
            {
                console.log(e);
            }
        );

        //Ex 13
        let pswd = document.querySelectorAll("input[type=password]");
        Array.from(pswd).forEach
        (
            function (e,p,a) // e = element, p = posicio, a = array
            {
                console.log(e);
            }
        );

        //Ex 14
        let text = document.querySelector("input[type=text]");
        console.log(text);

        //Ex 15
        let radio = document.querySelector("input[type=radio]");
        console.log(radio);

        //Ex 16
        let abbr = document.querySelectorAll("abbr[title]")[1];
        console.log(abbr);

        //Ex eliminar
        let code = document.querySelectorAll("table tr td code")[6];
        console.log(code);
        code.remove();
}

/*<!-- 1. Seleccionar la primera etiqueta h2. Mostrar el seu contingut per consola -->
   <!-- 2. Seleccionar totes les etiquetes li i mostrar la col·lecció per consola -->
   <!-- 3. Seleccionar les etiquetes label filles d'etiquetes p, mostrar la quantitat per consola -->
   <!-- 4. Seleccionar la segona etiqueta h3, mostrar-la per consola -->
   <!-- 5. Seleccionar totes les etiquetes p i input. Fer un recorregut i mostrar cada element de la col·lecció per consola -->
   <!-- 6. Seleccionar els elements amb la classe container. Mostrar el resultat per consola -->
   <!-- 7. Seleccionar els elements amb la classe desconeguda. Mostrar el resultat per consola -->
   <!-- 8. Seleccionar element amb id nou. Mostrar el resultat per consola -->
   <!-- 9. Seleccionar element amb id ok. Mostrar el resultat per consola -->
   <!-- 10. Seleccionar elements amb name sensació. Mostrar el resultat per consola -->
   <!-- 11. Seleccionar elements amb name gos. Mostrar el resultat per consola -->
   <!-- 12. Seleccionar totes les etiquetes a que hi ha dins d'etiquetes li. Mostrar el resultat per consola -->
   <!-- 13. Seleccionar totes les etiquetes input amb l'atribut type igual a password. Mostrar el resultat per consola -->
   <!-- 14. Seleccionar la primera etiqueta input amb l'atribut type igual a text. Mostrar el resultat per consola -->
   <!-- 15. Seleccionar la primera etiqueta input amb l'atribut type igual a radio. Mostrar el resultat per consola -->
   <!-- 16. Seleccionar la segona etiqueta abbr amb l'atribut title. Mostrar el resultat per consola -->
   <!-- 17. Seleccionar la tercera etiqueta li dins d'un ul. Mostrar el seu contingut per consola -->
   <!-- 18. Seleccionar la segona etiqueta mark. Mostrar el resultat per consola -->
   */