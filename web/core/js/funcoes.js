/**
 *
 * @param {arr} urls - array das urls
 * Adiciona os scripts js a pagina
 */
export function criaScript(urls) {
    urls.forEach(element => {
        var divEl = document.createElement("script")
        divEl.setAttribute('src', element)
        document.querySelector("body").appendChild(divEl)
    });
}