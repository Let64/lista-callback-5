function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando dowload de [${nomeArquivo}]`);
    setTimeout (() => {
        callbackConclusao();
    }, 1500)
}
simularDownload("dados_cliente.cvs",() => {
    console.log("Dowload finalizado com sucesso no disco!");
});
console.log("[Node.js] Linha seguinte executada imediatamente sem travar");

