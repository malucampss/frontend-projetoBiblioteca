function enviarFormulario(){
    const LivroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
         "ano publicacao": document.querySelectorAll("input")[3].value,
         "isbn": document.querySelectorAll("input")[4].value,
         "quant total": Number (document.querySelectorAll("input")[5].value),
         "quant disponivel": Number (document.querySelectorAll("input")[6].value),
         "valor aquisicao": Number (document.querySelectorAll("input")[7].value),
         "status livro emprestado":document.querySelectorAll("input")[8].value
        
        }

        try{
         await fetch("http://localhost.3333/novo/livro", {
            method: "POST",
            body: JSON.stringify(LivroDTO)
        });

        if(!respostaServidor.ok){
            throw new Error("Erro ao enviar os dados para o servidor. contate o administrador do sistema");
        }

        alert("Livro cadastrado com sucesso!");
}

        } catch(error) {
            console.log(error);
            alert(`Erro ao se comunicar com o servidor. ${error}`);
        }
        