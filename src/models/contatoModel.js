const mongoose = require("mongoose");
const validator = require("validator")


const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    telefone: { type: String, required: false, default: "" },
    criadoEm: { type: Date, default: Date.now },

})
const contatoModel = mongoose.model("contato", contatoSchema)

module.exports = contatoModel;

class contato {

    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;

    }




    async register() {
        this.valida()
        if (this.errors.length > 0) return
        this.contato = await contatoModel.create(this.body)
    }

    valida() {
        this.cleanUp()

        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("e-mail invalido")
        if (!this.body.nome) this.errors.push("Nome é um campo obrigátorio")
        if (!this.body.telefone && !this.body.email) this.errors.push("Pelo menos um contato deve ser enviado")



    }
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== "string") {
                this.body[key] = "";

            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await contatoModel.findByIdAndUpdate(id, this.body, { new: true })

    }

}

module.exports = contato;

contato.buscaPorId = async function(id) {
    if (typeof id !== 'string') return;
    return await contatoModel.findById(id) //informaçoes do contato

}

contato.buscaContatos = async function() {

    const contatos = await contatoModel.find().sort({ criadoEm: -1 }) //informaçoes do contato
    return contatos;
}

contato.delete = async function(id) {
    if (typeof id !== 'string') return;
    const contato = await contatoModel.findOneAndDelete({ _id: id })
    return contato
}