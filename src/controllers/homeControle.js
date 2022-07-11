const Contato = require("../models/contatoModel")



module.exports.index = async(req, res) => {
    const contatos = await Contato.buscaContatos()

    res.render("index", { contatos })

}