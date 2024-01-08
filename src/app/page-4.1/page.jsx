import style from './page-4.1.module.scss';
import Image from 'next/image';

export default function page() {
    const data = [{
        bgColor: 'rgba(251, 137, 107, 1)',
        icon: <Image src="/icons/search-icon.png" className='me-2' width={18} height={18} alt='' />,
        title: 'Search',
        items: [{
            name: 'SEO/Google Ads'
        }, {
            name: 'Youtube Ad'
        }, {
            name: 'Google shopping'
        }]
    }, {
        bgColor: 'rgba(251, 107, 107, 1)',
        icon: <Image alt='' src="/icons/cro-icon.png" className='me-2' width={18} height={18} />,
        title: 'CRO',
        items: [{
            name: 'Analysis'
        }, {
            name: 'Multi Variant Testing'
        }, {
            name: 'Landing Pages'
        }]
    }, {
        bgColor: 'rgba(241, 168, 100, 1)',
        icon: <Image alt='' src="/icons/social.png" className='me-2' width={18} height={18} />,
        title: 'Social Media',
        items: [{
            name: 'Facebook'
        }, {
            name: 'Linkedin'
        }, {
            name: 'Tik Tok'
        }]
    }, {
        bgColor: 'rgba(251, 211, 107, 1)',
        icon: <Image src="/icons/search-icon.png" className='me-2' width={18} height={18} alt='' />,
        title: 'Other services',
        items: [{
            name: 'Marketing'
        }, {
            name: 'Digital tools'
        }, {
            name: 'Banner advertising'
        }]
    }, {
        bgColor: 'rgba(72, 82, 88, 1)',
        icon: null,
        title: 'Do you want to ncrease your sales reach your goals?',
        customContent: <>
            <p>Schedule a free, no-obligation conversation with one of our experts to quickly improve the results of your business.</p>

            <button className='bg-white border-0 text-color-page4 px-3 py-2 size-14'>Book a conversation</button>
        </>,
        items: []
    }];

    return (
        <div className="bg-primary d-flex align-items-start align-items-lg-center justify-content-center z-n1" style={{ minHeight: "100vh" }}>
            <div className={`${style.itemsContainer}`}>
                {data.map((o, i) => <div key={i} className={style.item} style={{ 'backgroundColor': o.bgColor }}>
                    <div className='d-flex align-items-center mb-3'>
                        {o.icon}
                        {o.title}
                    </div>

                    {o.items.length > 0 && <ul className='size-13'>
                        {o.items.map((item, index) => <li className='mb-1 p-2 ps-0' key={index}>{item.name}</li>)}
                    </ul>}

                    {o.customContent}
                </div>)}
            </div>
        </div >
    );
}

