/**
 *
 * @param {arr} urls - array das urls
 * Adiciona os scripts js a pagina
 */
export function criaScript(urls) {
    urls.forEach(element => {
        var script = document.createElement("script")
        script.setAttribute('src', element)
        document.querySelector("body").appendChild(script)
    });
}