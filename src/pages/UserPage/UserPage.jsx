import React from "react";
import CloneFlixLogo from "../../components/CloneFlixLogo/CloneFlixLogo";
import User from "../../components/User/User";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="UserPage">
      <div className="UserPage-Header">
        <div>
          <CloneFlixLogo className="UserPage-Logo" />
        </div>
      </div>
      <div className="UserPage-Content">
        <h1>Quem esta Assistindo ?</h1>
        <div className="UserPage-Users">
          <User
            user="Bruna"
            img="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <User
            user="Rafael"
            img="https://preview.redd.it/mxurtidg56c11.png?auto=webp&s=085e7f8bea9d12f0d1532b78c2f924e7b680224e"
          />
          <User
            user="Wellington"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TwhejcB_QAKNx7TGviTcx0BPMINC33WFlCHMUKGFWA9CTmtE_dX3Ty5_FW04ueIcpBQ&usqp=CAU"
          />
        </div>
        <button>Gerenciar Perfis</button>
      </div>
    </div>
  );
};

export default UserPage;
