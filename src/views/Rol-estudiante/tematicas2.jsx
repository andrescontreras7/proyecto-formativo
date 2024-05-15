import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layout from '../../components/layaout';
import { IoAdd } from "react-icons/io5";

function CustomContent1() {
  return (
    <div>
      <h2>Título del Acordeón 1</h2>
      <p>Este es un párrafo con más información para el acordeón 1.</p>
    </div>
  );
}

function CustomContent2() {
  return (
    <div>
      <h2>Título del Acordeón 2</h2>
      <p>Este es un párrafo con más información para el acordeón 2.</p>
    </div>
  );
}

function CustomContent3() {
  return (
    <div>
      <h2>Título del Acordeón 3</h2>
      <p>Este es un párrafo con más información para el acordeón 3.</p>
    </div>
  );
}

function CustomContent4() {
  return (
    <div>
      <h2>Título del Acordeón 4</h2>
      <p>Este es un párrafo con más información para el acordeón 4.</p>
    </div>
  );
}

function CustomContent5() {
  return (
    <div>
      <h2>Título del Acordeón 5</h2>
      <p>Este es un párrafo con más información para el acordeón 5.</p>
    </div>
  );
}

export default function App() {
  return (
    <Layout titulo={"Asignaturas "} icono={<HiArrowSmallLeft className='text-xl' />}>
      {/* Cuadrado grande blanco que encierra todo con bordes redondos */}
      <div className="bg-white rounded-lg p-8 mt-16 mb-16 mx-10 shadow-lg relative">
        {/* Botón de agregar */}
        <button className="absolute top-[-70px] right-0 rounded-xl bg-blue-500 text-white p-2 flex items-center">
          <IoAdd className="mr-2" /> Agregar
        </button>
        {/* Título de "Temas" */}
        <h1 className="text-2xl font-semibold mb-4">Temas</h1>
        {/* Fondo más pequeño que cierra solo el acordeón */}
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            <CustomContent1 />
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            <CustomContent2 />
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            <CustomContent3 />
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
            <CustomContent4 />
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
            <CustomContent5 />
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}
