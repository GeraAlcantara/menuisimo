import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Data } from "../src/data/dataexample";

export default function Home() {
  return (
    <div className={`container m-auto ${styles.container}`}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-10'>
          <header className='mb-4 flex justify-center items-center'>
            <h1 className='text-[12rem] md:text-[16rem] lg:text-[20rem] text-center w-[3ch] leading-[0.8] relative top-0 uppercase tracking-tight break-words font-serif '>
              Menu
            </h1>
          </header>

          {Data.menu.sections.map((section, idx) => (
            <div key={idx + section.name} className=''>
              <header
                className={
                  section.highlighted ? "bg-black text-white py-3 ml-[-32px] border-t-2 border-black border-b-2" : "border-t-2 border-black border-b-2 py-3"
                }
              >
                <h2 className={section.highlighted ? "font-bold text-2xl tracking-tight ml-8" : "font-bold text-2xl tracking-tight"}>{section.name}</h2>{" "}
              </header>

              <div className='py-2'>
                {section.dishes.map((dish, idx) => (
                  <div key={dish.name + idx} className='w-full flex justify-between my-4'>
                    <div className='w-10/12'>
                      <h3 className='text-lg font-bold'>{dish.name}</h3>
                      <p>{dish.description}</p>
                    </div>
                    <div>
                      <span className='font-bold text-lg'>{`$${dish.price}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div>
            <header className='border-t-2 border-black border-b-2 py-3'>
              <h2 className='font-bold text-2xl tracking-tight'>Bebidas</h2>
            </header>
            <div className='py-2 w-full justify-between '>
              {Data.menu.drinks.map((drink, idx) => (
                <div key={drink.name + idx} className='flex justify-between my-1'>
                  <div className='w-10/12'>
                    <h3 className='text-lg font-bold'>{drink.name}</h3>
                  </div>
                  <div>
                    <span className='font-bold text-lg'>{`$${drink.price}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col items-center md:items-start md:flex-row md:justify-between pt-4 pb-10 border-t-2 border-black mt-4'>
        <h3 className='mb-2 md:mb-0 font-serif text-2xl md:text-2xl'>{Data.restName}</h3>
        <p className='text-center md:text-left mb-2 md:mb-0'>{Data.address} </p>
        <i className='mb-2 md:mb-0'>{`Telefono: ${Data.phone}`}</i>
      </footer>
    </div>
  );
}

/* 
<div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`container m-auto ${styles.container}`}>
        
        <section>
          <header className='py-4 mb-4 flex justify-center items-center'>
            <h1 className='text-[12rem] text-center w-[3ch] leading-[0.8] uppercase tracking-tight break-words font-serif '>Menu</h1>
          </header>
          {Data.sections.map((section, idx) => (
            <div key={idx + section.name} className='py-2'>
              <header className={section.highlighted ? "bg-black text-white py-5" : "border-t-2 border-black border-b-2 py-5"}>
                <h2 className={section.highlighted ? "font-bold text-2xl tracking-tight ml-4" : "font-bold text-2xl tracking-tight"}>{section.name}</h2>{" "}
                
              </header>
           
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
            </div>
          ))}
        </section>
      </main>
    </div>

*/

/* 
<div className={`container m-auto ${styles.container}`}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col'>
        <Header></Header>
        <Menu></Menu>
        <Footer></Footer>
      </main>
    </div>
*/
