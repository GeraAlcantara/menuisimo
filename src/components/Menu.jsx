/* TODO: Crear el Menu iterando dentro de las secciones y iterando dentro de los platillos XD */
import { Data } from "../data/dataexample";
function Menu() {
  /* const menusection =  */
  const sections = Data.sections;
  return (
    <main>
      {sections.map((section, idx) => (
        <section key={idx + section.name} className='py-2'>
          <header className={section.highlighted ? "bg-black text-white py-5" : "border-t-2 border-black border-b-2 py-5"}>
            <h2 className={section.highlighted ? "font-bold text-2xl tracking-tight ml-4" : "font-bold text-2xl tracking-tight"}>{section.name}</h2>{" "}
            {/* TODO: tomar info de la data */}
          </header>
          {/* contenedor platillos */}
          {section.dishes.map((dish, idx) => (
            <div key={dish.name + idx} className='w-full flex justify-between py-5'>
              <div className='w-10/12'>
                <h3 className='text-lg font-bold'>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <div>
                <span className='font-bold text-lg'>{`$${dish.price}`}</span>
              </div>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}

export default Menu;
