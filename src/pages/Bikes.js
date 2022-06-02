import React from 'react';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Bikes() {

    // IMAGES AMBIANCE PAGE PRODUITS - PROPS TRANSMIS AU COMPONENT CAROUSEL
    const items = [
        {
            altText: 'Slide 1',
            caption: 'DISPONIBLE EN BOUTIQUE OU SUR LE SITE',
            key: 1,
            src: './images/ambiance-1.jpeg'
        },
        {
            altText: 'Slide 2',
            caption: 'EXCLUSIVITÉ EN LIGNE',
            key: 2,
            src: './images/ambiance-2.jpeg'
        },
        {
            altText: 'Slide 3',
            caption: 'NOS EXPERTS À VOTRE DISPOSITION POUR DES CONSEILS PERSONNALISÉS',
            key: 3,
            src: './images/ambiance-3.jpeg'
        }
    ]

    // DATAS VÉLOS
    const bikes = [
        {
            key: 1,
            name: 'Wilier Urta Sram Eagle',
            ref: 'WILIER-URTA-SRAM-EAGLE',
            quantity: 4,
            src: 'https://evolutionbikes.it/wp-content/uploads/2021/04/wilier-urta_slr_cv_u1_bis.jpg',
            price: 7580,
            color: 'black' 
        },
        {
            key: 2,
            name: 'Canyon Lux CF SLX',
            ref: 'LUX-CF-SLX-9.0',
            quantity: 8,
            src: 'https://biketoday.news/storage/articles/25/1531244180.jpg',
            price: 5990,
            color: 'black'
        },
        {
            key: 3,
            name: 'Canyon Lux XC',
            ref: 'LUX-XC',
            quantity: 8,
            src: 'https://www.mtbr.com/attachments/lux-cf-sl-8-pro-race_radical_red-small-jpg.1851722/',
            price: 3890,
            color: 'red'
        },
        {
            key: 4,
            name: 'Massi Aire Carbon SL',
            ref: 'MASSI-AIRE-CARBON-SL',
            quantity: 11,
            src: 'https://www.monvelo.com/wp-content/uploads/2020/01/052237_1g.jpg',
            price: 2900,
            color: 'black'
        },
        {
            key: 5,
            name: 'Canyon VTT',
            ref: 'CFR-XC-FR',
            quantity: 18,
            src: 'https://off.road.cc/sites/default/files/styles/970wide/public/thumbnails/image/lux-cf-slx-9-race-team_team_replica.jpg',
            price: 4800,
            color: 'black'
        },
        {
            key: 6,
            name: 'Canyon Lux CF',
            ref: 'CANYON-LUX-CF-SLX-9.0-PRO-RACE',
            quantity: 6,
            src: 'https://cdn.mtbdatabase.com/wp-content/uploads/2021/08/02043226/2019-Canyon-Lux-CF-SLX-9.0-Pro-Race.jpg',
            price: 6680,
            color: 'blue'
        },
        {
            key: 7,
            name: 'Procaliber 9.5',
            ref: 'PROCALIBER-9.5',
            quantity: 21,
            src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/Supercaliber_Checkerboard_Procaliber?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440&fit=fit,1',
            price: 3100,
            color: 'white'
        },
        {
            key: 8,
            name: 'Pure Cycling Nerve AL 8.0',
            ref: 'PURE-CYCLING-NERVE-AL-8.0',
            quantity: 26,
            src: 'https://www.sportguide.ch/wp-content/uploads/2014/05/nerve-al-8_c1068_ch-web.jpg',
            price: 2100,
            color: 'black'
        },
        {
            key: 9,
            name: 'Canyon Nerve AL',
            ref: 'CANYON-NERVE-AL',
            quantity: 4,
            src: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2014/08/Canyon-Nerve-AL-6.0-PACK-SHOT.jpg',
            price: 2590,
            color: 'grey'
        },
        {
            key: 10,
            name: 'Square Cross Base U',
            ref: 'SQUARE-CROSS-BASE-U',
            quantity: 8,
            src: 'https://www.ghost-bikes.com/fileadmin/_processed_/4/d/csm_ghost-bikes-square-cross-base-u-90_54797ac397.png',
            price: 649,
            color: 'blue'
        },
        {
            key: 11,
            name: 'Square Cross Essential U',
            ref: 'SQUARE-CROSS-ESSENTIAL-U',
            quantity: 9,
            src: 'https://www.ghost-bikes.com/fileadmin/_processed_/d/4/csm_74SC1015_PY20_SQUARE_CROSS_ESSENTIAL_U_AL_SILVER_027642c4b4.png',
            price: 849,
            color: 'grey'
        },
        {
            key: 12,
            name: 'Bulls Cross Bike',
            ref: 'BULLS-CROSS-BIKE',
            quantity: 66,
            src: 'https://marktplatz.bike/static/images/Modelle/BULLS/2016/Fahrrad/Cross-Bike-2/Diamant/side_001_bike-detail-1x.png',
            price: 100,
            color: 'black'
        },
        {
            key: 13,
            name: 'E-Caliber 9.9 XTR',
            ref: 'E-Caliber-9.9-XTR',
            quantity: 5,
            src: 'https://orbitvubikestudio.com/wp-content/uploads/sites/2/2021/07/turquoise-bike-side-packshot-915x654.jpg',
            price: 12100,
            color: 'blue'
        },
        {
            key: 14,
            name: 'Fourstroke 01',
            ref: 'FOURSTROKE-01',
            quantity: 25,
            src: 'https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-22-10503-007-bmc-fourstroke-01-two-mountain-bike-grey-01.png',
            price: 9000,
            color: 'white'
        }
    ]

    return (
      <>
        <Navbar />

        <div className="bikes_container">

            <Carousel items={items} />
            
            <Cards bikes={bikes} />

        </div>

        <Footer />
      </>
    );
}

export default Bikes;