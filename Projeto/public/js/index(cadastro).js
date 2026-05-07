
var listaUsuarios = [];
var listaSenhas = [];

function Registrar() {

    var email = ipt_User.value.toLowerCase();
    var senha = ipt_Senha_User.value;
    var confirma = ipt_Confirmar_Senha.value;
    
    var msg_erro = "";

    if (email == "" || senha == "" || confirma == "") {
        msg_erro = "<span style='color: red;'> Preencha todos os campos!</span>";
    } 
    
    else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        msg_erro = "<span style='color: red;'> E-mail inválido!</span>";
    } 
   
    else if (senha.length < 8) {
        msg_erro = "<span style='color: red;'> Senha deve ter 8+ caracteres!</span>";
    } 
    
    else if (senha != confirma) {
        msg_erro = "<span style='color: red;'> As senhas não coincidem!</span>";
    }

    
    if (msg_erro != "") {
        div_msg.innerHTML = msg_erro;
    } else {
    
        let i = 0;
        while (i < 1) {
            listaUsuarios.push(email);
            listaSenhas.push(senha);
            console.log("Usuários:", listaUsuarios);
            i++;
        }

        div_msg.innerHTML = "<span style='color: green;'> Cadastro realizado!</span>";

        
        ipt_User.value = "";
        ipt_Senha_User.value = "";
        ipt_Confirmar_Senha.value = "";
    }
}