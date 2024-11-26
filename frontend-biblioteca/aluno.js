function enviarFormulario(){
    const AlunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "sobrenome": document.querySelectorAll("input")[1].value,
        "data nascimento": Number(document.querySelectorAll("input")[2].value),
         "endereco": document.querySelectorAll("input")[3].value,
         "email": document.querySelectorAll("input")[4].value,
         "celular": Number (document.querySelectorAll("input")[5].value)
        
        }

        try{
         await fetch("http://localhost.3333/novo/aluno", {
            method: "POST",
            body: JSON.stringify(AlunoDTO)
        });

        if(!respostaServidor.ok){
            throw new Error("Erro ao enviar os dados para o servidor. contate o administrador do sistema");
        }

        alert("Aluno cadastrado com sucesso!");
}

        } catch(error) {
            console.log(error);
            alert(`Erro ao se comunicar com o servidor. ${error}`);
        }
        