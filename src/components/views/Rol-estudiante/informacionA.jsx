import React from 'react';
import AnimatedPage from '../../animatedPage';


const InformacionA = () => {

  return (
    <AnimatedPage>
       <div className="  p-8 m-auto rounded-md   ">
      <div className="  bg-[#e5e2ed] rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Matemáticas Avanzadas</h1>
        <p className="text-gray-800 text-lg mb-6">Horario: Lunes a Viernes, 9:00 AM - 11:00 AM</p>
        <p className="text-gray-800 text-lg mb-6">Profesor: Carlos Rigoberto</p>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Contenido del curso:</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sem vitae risus efficitur aliquet. Ut posuere mattis felis, eget finibus quam cursus et. Proin ullamcorper metus id erat interdum, at finibus dolor lacinia. Sed eu hendrerit sapien.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Recursos:</h2>
          <ul className="text-gray-800">
            <li>Recurso 1</li>
            <li>Recurso 2</li>
            <li>Recurso 3</li>
          </ul>
        </div>
      </div>
    </div>
    </AnimatedPage>
   
  );
}

export default InformacionA;