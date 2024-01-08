import Image from "next/image";
import Link from "next/link";
import style from './page-3.module.scss';

export default function page() {
    const links = [
        { link: "Repulation", active: false },
        { link: "New Users", active: true },
        { link: "Voters", active: false },
        { link: "Editors", active: false },
        { link: "Moderators", active: false },

    ]
    const cards = [
        {
            image: "/ellipse-1.png",
            name: "lelah nicolas",
            country: "troy, MI",
            badges: [
                { badge: "clothes" },
                { badge: "stem" }
            ]
        },
        {
            image: "/ellipse-2.png",
            name: "Jesus Weiss",
            country: "fort worth, TX",
            badges: [
                { badge: "headst" },
                { badge: "gadget" },
                { badge: "gadget" },
                { badge: "winter" },
            ]
        },
        {
            image: "/ellipse-3.png",
            name: "annie rice",
            country: "austin, TX",
            badges: [
                { badge: "road" },
                { badge: "mountain" },
                { badge: "trip" },
                { badge: "earth" },
                { badge: "nature" },
            ]
        },
        {
            image: "/ellipse-4.png",
            name: "robert brower",
            country: "cincinati, OH",
            badges: [
                { badge: "maintenance" },
                { badge: "gears" },
                { badge: "frames" },
                { badge: "repair" },
            ]
        },
        {
            image: "/ellipse-5.png",
            name: "amy campbell",
            country: "warrior, AL",
            badges: [
                { badge: "music" },
                { badge: "disks" },
            ]
        },
        {
            image: "/ellipse-6.png",
            name: "anthony s. morin",
            country: "lyndhurst, NJ",
            badges: [
                { badge: "vintage" },
                { badge: "electric" },
            ]
        },

    ]
    return (
        <div className="bg-primary d-flex align-items-start align-items-lg-center justify-content-lg-center justify-content-start" style={{ minHeight: "100vh" }}>
            <div className="bg-white p-5 rounded-3 m-3" style={{ maxWidth: 1000 }}>
                <h3 className="fw-bold mb-3">Users</h3>
                <div className="d-block d-lg-flex align-items-center gap-3 justify-content-between mb-5">
                    <div className="mb-3 ">
                        <input type="text" className="form-control py-2 px-4" placeholder="Search users" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center text-white">
                        {links.map((l, i) => {
                            return <Link key={i} href="#" className="rounded-3 px-3 py-2 size-13"
                                style={{ backgroundColor: l.active ? 'rgba(132, 159, 255, 1)' : '#fff', color: l.active ? '#fff' : 'gray' }} > {l.link}</Link>
                        })}
                    </div>
                </div>
                <div className="row">
                    {cards.map((o, i) => {
                        return <div className="col-lg-4 col-sm-6" key={i}>
                            <div className={`d-flex flex-row gap-3 bg-card-page3 p-3 rounded-3 mb-3 ${style.cards}`} style={{ minHeight: 150 }}>
                                <Image src={`${o.image}`} width={60} height={60} alt="" />
                                <div className="d-flex flex-column text-capitalize" >
                                    <span className="fw-bold mb-1">{o.name}</span>
                                    <span className="size-13 mb-3">{o.country}</span>
                                    <div className="d-flex flex-wrap">
                                        {o.badges.map((c, i) => {
                                            return <span className="badge border-page3 text-color-secondary-page3 bg-white rounded-3 me-1 mb-1">{c.badge}</span>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
}


