import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="flex justify-center items-center">
    <header className="p-10" style={{backgroundColor:"rgba(233, 184, 202, 1)", border:"2px solid rgba(0, 0, 0, 1)", color:"black"}}>
      <h1 className="text-5xl py-2 font-bold">Vision Fashion</h1>
      <p className="text-md text-slate-400" style={{color:"black"}}>
        Fashion es una tienda de ropa en linea que tiene como objetivo brindarte el mejor servicio para que obtengas tus prendas de ropa favoritas al mejor precio posible, al registrarte y formar parte de esta comunidad, aceptas los terminos y condiciones establecidas por nosotros. ¡No te preocupes comprar mediante nuestra pagina web es totalmente seguro y no representa ningun riesgo para la seguridad de ningun cliente!.Empieza ya dandole click al siguiente boton:
      </p>

      <Link
        className="text-white px-4 py-2 rounded-md mt-4 inline-block " style={{backgroundColor:"rgba(255, 83, 165, 0.8)", border:"2px solid rgba(0, 0, 0, 1)", color:"black"}}
        to="/register"
      >
        Empezar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
