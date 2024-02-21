import Cell from "../components/Cell";

const System = () => {
  return (
    <div className="bg-[url('./wallpaper.png')] w-full min-h-screen py-4 bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="bg-white/[0.6] w-11/12 md:w-[750px] lg:w-[1000px] scale-90 md:scale-100 h-[400px] xs2:h-[500px] xs:h-2/3 p-2 flex items-center justify-center rounded-lg">
        <table className="scale-[0.7] xs2:scale-[0.9] xs:scale-100 xs2:w-full h-full">
          <thead className="h-12">
            <tr>
              <th>TIPO DE ANUNCIO</th>
              <th>
                <Cell type="primary" label={"Membresia Silver"} round={true} />
              </th>
              <th>
                <Cell type="secondary" label={"Membresia Gold"} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Cell type="primary" label={"Anuncios"} round={true} />
              </td>
              <td>10 anuncios</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <td>
                <Cell type="secondary" label={"Duracion"} round={true} />
              </td>
              <td>30 dias</td>
              <td>Hasta su venta</td>
            </tr>
            <tr>
              <td>
                <Cell
                  type="primary"
                  label={"Anuncio en destacados"}
                  round={true}
                />
              </td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./x1.png" alt="X" /></td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./ok1.png" alt="O" /></td>
            </tr>
            <tr>
              <td>
                <Cell
                  type="secondary"
                  label={"Venta con Financiamiento"}
                  round={true}
                />
              </td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./x1.png" alt="X" /></td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./ok1.png" alt="O" /></td>
            </tr>
            <tr>
              <td>
                <Cell
                  type="primary"
                  label={"Sello de auto verificado"}
                  round={true}
                />
              </td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./x1.png" alt="X" /></td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./ok1.png" alt="O" /></td>
            </tr>
            <tr>
              <td>
                <Cell
                  type="secondary"
                  label={"Garantia Motriz Incluida"}
                  round={true}
                />
              </td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./x1.png" alt="X" /></td>
              <td><img className="w-[30px] h-[30px] m-auto" src="./ok1.png" alt="O" /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="w-[100px] lg:w-4/5 p-2 lg:h-[40px] bg-blue-500 rounded-md text-white">
                  $600.00 al mes
                </button>
              </td>
              <td>
                <button className="w-[100px] lg:w-4/5 p-2 lg:h-[40px] bg-blue-900 rounded-md text-white">
                  $3,600.00 al mes
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default System;
