import validator from "validator";

export default class Contato {
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
        const emailInput = el.querySelector('input[name="email"]');
        let error = false;


        if (!validator.isEmail(emailInput.value)) {
            error = true
            alert("E-mail invalido")
        }

        if (!error) el.submit();
    }

}