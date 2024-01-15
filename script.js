document.addEventListener('DOMContentLoaded', function (){
    //DOM (Document Object Model)
    // funcions per crear i afegir elements
    
    // crear una nova etiqueta HTML
    let label = document.createElement('label');
    let caixa = document.createElement('input');
    //  afegir l'etiqueta al DOM
    // desti.appendChild(etiqueta);

    window.document.body.appendChild(caixa);
    
    // document.forms[1].appendChild(caixa); // 2n formulari
    // al final del 2n formulari


    // com afegir text en una etiqueta
    // opció 1
    //label.textContent = "Número de matrícula: ";
    // opció 2
    let text = document.createTextNode("Número de matrícula: ");
    label.appendChild(text);
    // .innerHTML, .outerHTML

    // SINTAXI before, after
    // origen.before(nouNode,[...,node2,node3]);
    // origen.after(nouNode,[...,node2,node3]);
    
    caixa.before(label);

    // gestió d'atributs
    caixa.setAttribute('type','text');
    caixa.setAttribute('id','nMat');

    let valor = caixa.getAttribute('value');
    console.info(valor); // null
    valor = caixa.getAttribute('id');
    console.info(valor);

    // alternativament
    //caixa.placeholder = 'ABC-1234 | A-1234-AB';
    caixa.setAttribute('placeholder','ABC-1234 | A-1234-AB');
    f_esborrarAtributs();

    f_insertAdjacentHTML();

    let nou_li = document.createElement("li");
    nou_li.textContent = "JQuery";
    let papi = document.getElementById("list");
    let qt_lis = document.getElementsByTagName("li").length;
    let ultim_li = document.getElementsByTagName("li")[qt_lis-1];
    papi.insertBefore(nou_li, ultim_li);
});

function f_esborrarAtributs()
{
    document.getElementById('nMat').removeAttribute('placeholder');
}

function f_insertAdjacentHTML()
{
    let ul = document.createElement("ul");
    ul.id = "list";

    document.body.append(ul);

    ul.insertAdjacentHTML("afterbegin", "<li>CSS</li>");
    ul.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
    ul.insertAdjacentHTML("afterend", "<p>Frontend developer</p>");
    ul.insertAdjacentHTML("beforeend", "<li>Javascript</li>");
    ul.insertAdjacentHTML("beforebegin", "<h2>Web Technology</h2>");
}
