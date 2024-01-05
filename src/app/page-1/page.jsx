import Link from 'next/link';
import style from './page-1.module.scss'
import Image from 'next/image';
export default function page() {
    const dates =[
        {date: "Oct,21,2021",
         type:"Pro Annual",
         receipt:"Download"},
         {date: "Oct,21,2021",
         type:"Pro Annual",
         receipt:"Download"},  {date: "Oct,21,2021",
         type:"Pro Annual",
         receipt:"Download"},  {date: "Oct,21,2021",
         type:"Pro Annual",
         receipt:"Download"},
    ]
    const navbar=[
        {icon:"general", title :"General"},
        {icon:"password", title :"Password"},
        {icon:"message", title :"İnvitations"},
        {icon:"billing", title :"Billing"},
        {icon:"apps", title :"Apps"},
    ]
    return (
        <div className={`d-flex align-items-center justify-content-center ${style.area}`} >
            <div className={style.bgOrange} ></div>
            <div className={`d-flex overflow-hidden  ${style.container}`}>
                <div className={`d-flex flex-column gap-5 p-4 ${style.navLeft}`}>
                    <div className="d-flex">
                        <Image src="/profil.jpeg" width={55} height={55} className='rounded-3 me-2'  /> 
                        <div className='d-flex flex-column text-color' >
                            <span className='fw-bold size-15'>Ildiko Gaspar</span>
                            <span className='text-muted size-14'> @igaspar </span>
                        </div>
                    </div>
                    <ul>
                        {navbar.map((o,i)=>{
                            return<>
                                  <li>
                        <Link href="#" className={`d-flex align-items-center gap-3  ${style.navLink} `} >
                            <Image src={`/icons/${o.icon}.png`} width={20} height={20} />
                     <span className='text-color' >{o.title}</span>
                    </Link>
                        </li>
                            </>
                        })}
                    </ul>
                </div>
                <div style={{width:"80%"}} className='p-4' >
                    <h1 className='fs-3 fw-bold mb-5 text-color'>Billing</h1>
                    <div className='row mb-5'>
                        <div className="col-8">
                            <div className="d-flex flex-column mb-4 text-color">
                                <h6 className='size-14 fw-bold'>Order History</h6>
                                <span className='text-muted size-13'>Manage billing information</span>
                            </div>
                            <div className=''>
                                <table className='table table-borderless' style={{marginBottom:0}}>
                                    <tr className='text-muted size-14'>
                                        <td className='pb-3'>
                                            Date
                                        </td>
                                        <td className='pb-3'>
                                            Type
                                        </td>
                                        <td className='pb-3'>
                                            Receipt
                                        </td>
                                    </tr>
                                    {dates.map((o,i)=>{
                                        return <>
                                        <tr className='size-14 text-color'>
                                            <td className='pb-3'>{o.date} </td>
                                            <td className='pb-3'> {o.type} </td>
                                            <td className='pb-3'> 
                                            <button className="btn border size-14 px-3">
                                            {o.receipt}
                                            </button>
                                            </td>
                                        </tr>
                                        </>
                                    })
                                     }
                                 
                                </table>
                                <Link href="#" className='border-bottom-orange size-14 text-orange'>Load more</Link>
                            </div>
                        </div>
                       <div className="col-4">
                        <div className="rounded-4 bg-orange text-white p-4 d-flex flex-column justify-content-center" style={{maxWidth:260}}>
                            <p>Your Plan</p>
                            <h6 className='fs-4 fw-bold'>Pro Annual</h6>
                            <span className='size-14'>Renews on Nov.2021</span>
                            <button className='btn text-white border mt-3'>Cancel Subscription</button>
                        </div>
                      </div>
                    </div>
                   <div>
                     <div className='text-color mb-2'>
                        <h6 className='size-14 mb-1 fw-bold'>Payment Method</h6>
                        <span className='text-muted size-13'>Manage billing information and view receip 
                        </span>
                    </div>
                    <div>
                       <Image src="/visa.png" width={40} height={40}/>
                       <span className='ms-2 size-13'>Visa ending 2555</span>
                   </div>
                    </div>
                  </div>
                </div>
        </div>
    );
}


