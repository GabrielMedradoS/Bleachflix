/* js está executando antes mesmo de o HTML carregar no navegador.
Desta forma ele carrega por ultimo */
window.onload = function () {
    var items = document.querySelector("#items")
    
    // todo event listener vai rodar uma funçao quando ocorrer
    items.addEventListener('wheel', event => {
        /*  console.log(event);
            consigo ver o deltaY ser negativo ou positivo,  logo: 
            if(event.deltaY < 0){
                console.log("scroll up")
            } else {
                console.log("scroll down");
            } */
        /* o target é quem esta disparando o evento do EventListener, no caso é
            o #items */
        if (event.deltaY > 0) {
            console.log(event)
            /* scrollBy funcionalidade para mover o scroll, no caso o eixo x e y */
            event.target.scrollBy(300, -0)
        } else {
            event.target.scrollBy(-300, -0)
        }
    })
    
/*     items.addEventListener('mouseover', mouseover => {
        mouseover.innerHTML = position: fixed
    }) */
}
