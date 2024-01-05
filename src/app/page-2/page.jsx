import Image from 'next/image';
import style from './page-2.module.scss';

export default function page() {
    const selects=[
        {background:"rgba(255, 236, 236, 1)",
         icon: "furniture.png",
         name:"furniture"},
         {background:"rgba(247, 236, 255, 1)",
         icon: "property.png",
         name:"property"},
         {background:"rgba(236, 240, 255, 1)",
         icon: "job.png",
         name:"job"},   
         {background:"rgba(215, 249, 243, 1)",
         icon: "travel.png",
         name:"travel"},
         {background:"rgba(226, 255, 212, 1)",
         icon: "boat.png",
         name:"boat"},   
         {background:"rgba(255, 255, 255, 1)",
         icon: "mc.png",
         name:"MC"},   
         {background:"rgba(255, 243, 201, 1)",
         icon: "economy.png",
         name:"economy"},  
        {background:"rgba(255, 217, 201, 1)",
         icon: "holiday.png",
         name:"holiday"},
    ]
    return (
        <div className="bg-page-2 d-flex justify-content-center align-items-start align-items-sm-center z-n1 position-relative overflow-scroll" style={{height:"100vh"}}>
            <div className={`position-absolute z-0 rounded-5 ${style.bgPurple}`}></div>
            <div className="bg-white p-5 rounded-5 mx-3 my-5" style={{zIndex:1}}>
                    <div className="row mb-3">
                        <div className="col-sm-8">
                        <input type="text" className='form-control py-2' placeholder='Search for a part-time job' /> 
                        </div>
                        <div className="col-sm-4">
                        <button className='btn-color-page2 rounded-3 border-0 text-white p-2 mt-sm-0 mt-1 d-flex align-items-center justify-content-center w-100'>
                        <Image src="/icons/btn-icon.png" className='me-2' width={18} height={18} />
                        <span style={{minWidth:66}} >Use map</span>
                        </button>
                        </div>                 
                    {/* <Image src="/icons/search-icon.png" width={18} height={18} className='position-absolute top-50'/> */}
                    </div>
                    <div className="row">
                        {selects.map((o,i)=>{
                            return <>
                            <div className="col-sm-3 col-xs-6">
                               <div className={`d-flex flex-column gap-2 align-items-center justify-content-center  py-4 rounded-3 mt-3 ${o.icon=== "mc.png" ? "border" : ""}`}  style={{backgroundColor:`${o.background}`}} >
                               <Image src={`/icons/${o.icon}`} width={24} height={24} />
                                <span className='text-capitalize'> {o.name} </span>
                               </div>
                            </div>
                            </>
                        })}
                  
                    </div>
            </div>
        </div>
    );
}

