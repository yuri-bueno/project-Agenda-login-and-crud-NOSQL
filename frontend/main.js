import "core-js/stable";
import "regenerator-runtime/runtime"
import Login from "./modules/login";
import Contato from "./modules/contato";

//import "./assets/css/style.css";



const login = new Login(".form-login")
const cadastro = new Login(".form-cadastro")

login.init();
cadastro.init();

const contato = new Contato(".form-contato")


contato.init();