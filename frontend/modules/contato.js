import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.eventes();
    }

    eventes() {
        if (!this.form) return;
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            this.validate(e)
        })
    }
    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (!nomeInput.value) {
            error = true
            alert("O nome n pode está vazio")
        }

        console.log(validator.isEmail(emailInput.value))

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            error = true
            alert("E-mail invalido")
        }

        if (!telefoneInput.value && !emailInput.value) {
            error = true
            alert("Pelo menos um contato deve ser enviado")
        }
        if (!error) el.submit();
    }

}