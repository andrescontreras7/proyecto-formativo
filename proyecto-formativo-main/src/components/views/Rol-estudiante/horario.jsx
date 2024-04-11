import Aside from '../../_aside';
import { IoAddCircleOutline } from 'react-icons/io5';



const Horario = () => {


return (
<>
<div className="flex  bg-[#A6DCF1] h-screen">
 
        <aside className="w-[20%] flex flex-wrap ">
            <Aside/>
        </aside>
   <div className=" flex flex-col  2xl:mr-[4.5rem]  max-[1455px]:mr-20 w-full justify-center  items-center ">
     <div className="flex bg-[#AEE4F5] rounded-3xl shadow-3xl shadow-[0_8px_48px_8px_rgba(0,0,0,0.08)]  p-8 justify-center items-center ">
     <div className="   w-[800px]  ">
        <div className=" flex w-full justify-center border-2 border-gray-700 items-center bg-[#925FE2] bg-opacity-30 h-96 rounded-2xl" >
                <h1 className="font-semibold text-2xl text-gray-800 m-4">
                    <a href="" className="flex justify-center items-center flex-col">
                        <IoAddCircleOutline className="text-[100px] "/>
                        Crear un Horario 
                    </a>
                </h1>
        </div>

     </div>
    </div>
   </div>
        
</div>
    












</>
)

}
export default Horario