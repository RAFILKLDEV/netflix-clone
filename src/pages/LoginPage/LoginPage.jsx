import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginPage-Content">
        <img
          src="https://www.gracenote.com/wp-content/uploads/2015/07/Movie-TV-Art-Mosaic-Comp1.jpg"
          alt=""
        />
        <div className="LoginPage-LoginBox">
          <h1>Entrar</h1>
          <input type="text" placeholder="Email ou Número de telefone" />
          <input type="password" placeholder="Senha" />
          <Link to={"/user"}>
            <button>Entrar</button>
          </Link>

          <div className="LoginPage-LoginBox-Help">
            <div>
              <input type="checkbox" name="checkbox" id="" />
              <label for="checkbox">Lembrar de mim</label>
            </div>
            <div className="div">Precisa de ajuda ?</div>
          </div>
          <div className="LoginPage-LoginBox-CAPTCHA">
            <div>Novo por aqui? Assine agora.</div>
            <div>
              Esta página é protegida pelo Google reCAPTCHA para garantir que
              você não é um robô. Saiba mais.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
