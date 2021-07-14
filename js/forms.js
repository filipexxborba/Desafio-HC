// Validação do input e salvar no localStorage
const forms = document.querySelectorAll('form');

forms.forEach( (form, element) => {
    const emails = document.querySelectorAll('input');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (emails[element].value != ''){
            localStorage.setItem("email", emails[element].value)
            console.log(localStorage.getItem("email"));
            emails[element].value = "Cadastrado!";
            setTimeout(() =>{
                emails[element].value = '';
            }, 2000);
        }
        else{
            emails[element].value = "Inválido.";
            setTimeout(() =>{
                emails[element].value = '';
            }, 2000);
        }  
    });
});





