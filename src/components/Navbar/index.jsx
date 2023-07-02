import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <div className="Nav1">
          <img src="/images/logo.webp" alt="" />
          <ul>
            <li>Veículos <p>▼</p></li>
            <li>Comprar <p>▼</p></li>
            <li>Serviços <p>▼</p></li>
          </ul>
        </div>

        <div className="Nav2">
          <ul>
            <li><img src="/images/pesquisa.png"/>Busca</li>
            <li><img src="/images/ferramenta.png"/>Concessionárias</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
