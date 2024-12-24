let passwordEl = document.getElementById("password-el")

function genePassword(){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+)'
    let length = 12
    let password = ""
    for(let i=0; i < length; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
        
    }
    passwordEl.value = password
}

function copyBtn(){
    passwordEl.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
    
}
    