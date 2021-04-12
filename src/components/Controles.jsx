function Controles({
  reproduciendo,
  alternarReproduccion,
  cancionAnterior,
  siguienteCancion,
}) {
  return (
    <div className="container card-footer bg-white">
      <button onClick={() => cancionAnterior()}>
        <i className="fas fa-angle-left"></i>
      </button>
      {reproduciendo ? (
        <button onClick={() => alternarReproduccion()}>
          <i className="fas fa-pause"></i>
        </button>
      ) : (
        <button onClick={() => alternarReproduccion()}>
          <i className="fas fa-play"></i>
        </button>
      )}
      <button onClick={() => siguienteCancion()}>
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Controles;
