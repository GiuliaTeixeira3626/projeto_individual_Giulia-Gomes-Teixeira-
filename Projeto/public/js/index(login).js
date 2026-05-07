
let tentativas = 3;

function Validar() {
   
    var userLogin = ipt_Login_User.value.toLowerCase();
    var senhaLogin = ipt_Login_Senha.value;
    
    var msg_erro = "";
  
    var indice = listaUsuarios.indexOf(userLogin);

   
    if (userLogin == "" || senhaLogin == "") {
        div_msg.innerHTML = "<span style='color: red;'>Preencha todos os campos!</span>";
        return; 
    }

   
    if (userLogin.indexOf('@') == -1 || userLogin.indexOf('.') == -1) {
        div_msg.innerHTML = "<span style='color: red;'>E-mail inválido!</span>";
        return;
    }


    if (tentativas <= 0) {
        div_msg.innerHTML = "<b style='color: darkred;'>ACESSO BLOQUEADO!</b>";
        return;
    }

  
    if (indice == -1) {
        div_msg.innerHTML = "<span style='color: red;'>Usuário não cadastrado!</span>";
    } 
    
    
    else if (listaSenhas[indice] != senhaLogin) {
        
        let i = 0;
        while (i < 1) {
            tentativas--; 
            i++;
        }

        if (tentativas > 0) {
            msg_erro = `<span style='color: orange;'>Senha incorreta! Restam ${tentativas} tentativas.</span>`;
        } else {
            msg_erro = `<b style='color: red;'>Acesso bloqueado por segurança!</b>`;
        }
        div_msg.innerHTML = msg_erro;
    } 
    
    
    else {
        tentativas = 3; 
        div_msg.innerHTML = "<span style='color: green;'>Login realizado! Entrando...</span>";
        
    }
}