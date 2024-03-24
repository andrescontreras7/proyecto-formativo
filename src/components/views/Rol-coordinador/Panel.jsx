import React, { useState } from 'react';
import Aside from './AsideCO';
import { Link } from 'react-router-dom';
const Panel = () => {
  return (
    <>
      <div className='flex bg-[#A6DCF1] min-h-screen'>
        <aside className='w-[15%]'>
          <Aside />
        </aside>
        <section className='w-[80%] m-auto h-full'>
          <div className='w-[100%] m-auto bg-[#925FE2] bg-opacity-50 mt-1 rounded-xl h-[3rem] font-semibold text-xl p-2'>Panel de control</div>
          <article className='bg-[#86A7E7] overflow-y-scroll shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] h-[90vh] flex flex-col mt-4 rounded-xl'>
            <div className='w-[90%] mt-8 mb-4  mx-auto rounded-md bg-white h-[3rem] transition-all duration-300'>
              <h1 className='text-center text-xl  font-semibold mt-1'>
                ¿Qué desea hacer hoy?</h1>
            </div>
            <div className=' flex flex-wrap justify-center'>
              <Link to="/Registrardocente">
                <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                  <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
                    <img className='w-20' src="/public/registarprofesor.png" alt="Docente" draggable="false" />
                  </div>

                  <p className='font-semibold font-Roboto   mt-2' >Registrar Docente</p>
                </button>
              </Link>


              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/administardocente.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Administrar docente</p>
              </button>
              <button>
                <Link to="/Areas" className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                  <div className='bg-white  mt-1 flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                    <img className='w-16' src="/public/registrarasignatura.png" alt="Docente" draggable="false" />
                  </div>
                  <p className='font-semibold font-Roboto p-2 mt-2'>Registrar asignatura</p>
                </Link>
              </button>
              <Link to="/Informes">
                <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                  <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
                    <img className='w-16' src="/public/informe-observador.png" alt="Docente" draggable="false" />
                  </div>
                  <p className='font-semibold font-Roboto mt-2'>Informe observadores</p>
                </button>
              </Link>

              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/r-estudiante.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Registrar alumno</p>
              </button>
              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/observador.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Observador</p>
              </Link>
              <Link to="/Gestion" className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="https://s3-alpha-sig.figma.com/img/d668/a850/1eb1685c5e804273e8a0979e4b73a40b?Expires=1702252800&Signature=cgO8LkfOGsnzfpi73vpXkwNTtofTN7p9vIDQSWV1DuN5c-aRhwcphbyfHtzxGfyAfpU1712UXyeCRtxPqhcNXYZP81Xi739R3~cGy1v-dDJatIFVfrYLhZX7IDv1H8bNEu72O6UkkssAQOjF6FZzJOkuoUi0hqmlUzFGk4praVrkrAxlGHIjQegt5f2Bde5EbypJkiwvx9fWz6-lrWD3Bb-eN7~~30EFqLi7-6wCc33o8EWrCDQhBJh~V5~XBb6AIFUx~5KgfHYbKbh1zR-q5gNttpc9hPY~FCLbvUGDeUlXAPbj0pE2GU1oxKNt1FtJFbhXZ30mPCreQu1lTLUpWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Docente" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Registrar Alumno </p>
              </Link>
              <Link to="/Informes" className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="https://s3-alpha-sig.figma.com/img/d668/a850/1eb1685c5e804273e8a0979e4b73a40b?Expires=1702252800&Signature=cgO8LkfOGsnzfpi73vpXkwNTtofTN7p9vIDQSWV1DuN5c-aRhwcphbyfHtzxGfyAfpU1712UXyeCRtxPqhcNXYZP81Xi739R3~cGy1v-dDJatIFVfrYLhZX7IDv1H8bNEu72O6UkkssAQOjF6FZzJOkuoUi0hqmlUzFGk4praVrkrAxlGHIjQegt5f2Bde5EbypJkiwvx9fWz6-lrWD3Bb-eN7~~30EFqLi7-6wCc33o8EWrCDQhBJh~V5~XBb6AIFUx~5KgfHYbKbh1zR-q5gNttpc9hPY~FCLbvUGDeUlXAPbj0pE2GU1oxKNt1FtJFbhXZ30mPCreQu1lTLUpWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Docente" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Informes Observador</p>
              </Link>-
              <Link to="/Registrardocente" className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="https://s3-alpha-sig.figma.com/img/9b14/e431/af1d428229c4d98c05d860879836579e?Expires=1702857600&Signature=jjqEWsjTRCydOkH5BFg1xMvI8xzEjaiY4XcPHUCOIdfomKPs9l-3L0hMGhUGHkPT60Z32XPB8mUCtZwWmB6L-z6vricBJS~TxKH~l8UZc8NmShwIVfhN7gdD6zbkd6hFKzw~eTtc15znMI0bSBd4tEPEG~eAXuBJhI6CBHVTjXl0FCIHSUcUBZ0doqFU-Ca6nMKd62XzWevxxF-ilQ5WxSk7iZ9tKTaddjNmNxy~ekDt8W8LXAXGDLi98O0EusA8WY5uK-AgfQWk~DbQqhPsjkfn0w6cxqTLK~06xqaDbLSQiQ2TXcoJI5sn~5-FRWyufNq1JCFhgv-BnbqOw0pSIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Docente" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Registrar Docente</p>
              </Link>
              <Link to="/Listado" className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="https://s3-alpha-sig.figma.com/img/9b14/e431/af1d428229c4d98c05d860879836579e?Expires=1702857600&Signature=jjqEWsjTRCydOkH5BFg1xMvI8xzEjaiY4XcPHUCOIdfomKPs9l-3L0hMGhUGHkPT60Z32XPB8mUCtZwWmB6L-z6vricBJS~TxKH~l8UZc8NmShwIVfhN7gdD6zbkd6hFKzw~eTtc15znMI0bSBd4tEPEG~eAXuBJhI6CBHVTjXl0FCIHSUcUBZ0doqFU-Ca6nMKd62XzWevxxF-ilQ5WxSk7iZ9tKTaddjNmNxy~ekDt8W8LXAXGDLi98O0EusA8WY5uK-AgfQWk~DbQqhPsjkfn0w6cxqTLK~06xqaDbLSQiQ2TXcoJI5sn~5-FRWyufNq1JCFhgv-BnbqOw0pSIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Docente" />
              </button>-
              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/lista.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Listado de estudiantes</p>
              </button>
              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/areas y asignaturas.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Administar areas y asignaturas</p>
              </button>
              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/registro de asignaturas.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Listado de estudiante</p>
              </Link>
              <button className='w-[15vw] h-[25vh] m-4 flex flex-col bg-[#A6DCF1] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#7365b2]'>
                <div className='bg-white flex justify-center items-center  w-[50%] h-[60%] rounded-full'>
                  <img className='w-16' src="/public/desempeño.png" alt="Docente" draggable="false" />
                </div>
                <p className='font-semibold font-Roboto   mt-2'>Estudiantes por desempeño</p>
              </button>

            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Panel;