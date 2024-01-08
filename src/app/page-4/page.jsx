import style from './page-4.module.scss';
import Image from 'next/image';
export default function page() {
    return (
        <div className="bg-primary d-flex align-items-start align-items-lg-center justify-content-center z-n1" style={{minHeight:"100vh"}}>
            <div className={`z-0 position-absolute bg-white rounded-4 ${style.bgWhite}`} ></div>
            <div className="m-5" style={{width:1050, zIndex:1}}>
                <div className="row">
                    <div className={`col-lg-4 col-md-6 ${style.col1}`} style={{backgroundColor:"rgba(251, 137, 107, 1)", borderTopLeftRadius:20}}>
                        <div className="text-white px-4 pt-5 pb-3 mx-1 my-4">
                        <h6 className='d-flex align-items-center size-17 mb-4'><Image src="/icons/search-icon.png" className='me-2' width={18} height={18} alt=''/> 
                        Search</h6>
                        <ul className='size-13'>
                            <li className='mb-1 p-2'> SEO/Google Ads </li>
                            <li className='mb-1 p-2'>Youtube Ads</li>
                            <li className='mb-1 p-2'>Google shopping</li>
                        </ul>
                        </div>
                    </div>
                     <div className={`col-lg-4 col-md-6 ${style.col2}`} style={{backgroundColor:"rgba(251, 107, 107, 1)"}}>
                    <div className="text-white px-4 pt-5 pb-3 mx-1 my-4">
                        <h6 className='d-flex align-items-center size-17 mb-4'> <Image alt='' src="/icons/cro-icon.png" className='me-2' width={18} height={18}/> <span>CRO</span> </h6>
                        <ul className='size-13 text-capitalize'>
                            <li className='mb-1 p-2'> analysis</li>
                            <li className='mb-1 p-2'>multi variant testing</li>
                            <li className='mb-1 p-2'>landing pages</li>
                        </ul>
                        </div>
                    </div>
                    <div className={`col-lg-4  col-md-6 ${style.col3}`} style={{backgroundColor:"rgba(241, 168, 100, 1)", borderTopRightRadius:20}}>
                    <div className="text-white px-4 pt-5 pb-3 mx-1 my-4">
                        <h6 className='d-flex align-items-center size-17 mb-4'> <Image alt='' src="/icons/social.png" className='me-2' width={18} height={18}/> <span>Social Media</span> </h6>
                        <ul className='size-13 text-capitalize'>
                            <li className='mb-1 p-2'> facebook</li>
                            <li className='mb-1 p-2'>Linkedin</li>
                            <li className='mb-1 p-2'>Tik tok </li>
                        </ul>
                        </div>
                    </div> 
                    <div className={`col-lg-4  col-md-6 ${style.col4}`} style={{backgroundColor:"rgba(251, 211, 107, 1)", borderBottomLeftRadius:20}}>
                        <div className="text-color-page4 px-4 pt-5 pb-3 mx-1 my-4">
                    <h6 className='size-17 mb-4'> <Image src="/icons/search-icon.png" className='me-2' width={18} height={18}/> <span>Other services</span> </h6> 
                    <ul className='size-13'>
                        <li className='mb-1 p-2'>Marketing</li>
                        <li className='mb-1 p-2'>Digital tools</li>
                        <li className='mb-1 p-2'>Banner advertising</li>
                    </ul>   
                    </div>
                     </div>
                    <div className={`col-lg-8 ${style.col5}`} style={{backgroundColor:"rgba(72, 82, 88, 1)", borderBottomRightRadius:20}}>
                        <div className={`text-white px-4 pt-5 pb-3 mx-1 my-4 ${style.textCont}`} style={{width:"65%"}}>
                        <h6 className='size-17 mb-4 fw-bold'>Do you want to ncrease your sales reach your goals? </h6>
                        <p className='size-13 mb-4'>Schedule a free, no-obligation conversation with one of our experts to quickly improve the results of your business.</p>
                        <button className='bg-white border-0 text-color-page4 px-3 py-2 size-14 '>Book a conversation </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

