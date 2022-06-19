import React, { useState } from 'react';
import { FiShoppingCart, FiChevronLeft, FiSliders, FiMoreVertical } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

function Product(props) {

    const [menu, setMenu] = useState(["Filter", "Popularity", "Newest"]);
    const [product, setProduct] = useState(
        [
            {
                "name": "TMA-2 HD",
                "stars": 4.6,
                "review": 86,
                "image": "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/Aiaiai_TMA2_Preset_D-LYTDMJcf-large.png",
                "price": 350
            },
            {
                "name": "CO2-cable",
                "stars": 4.4,
                "review": 75,
                "image": "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/a05-min-vzUddACO-large.png",
                "price": 200
            },
            {
                "name": "TMA-2 HD",
                "stars": 4.6,
                "review": 86,
                "image": "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/Aiaiai_TMA2_Preset_D-LYTDMJcf-large.png",
                "price": 350
            },
            {
                "name": "CO2-cable",
                "stars": 4.4,
                "review": 75,
                "image": "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/a05-min-vzUddACO-large.png",
                "price": 200
            }
        ]
    )

    const printMenu = () => {
        return menu.map((value, index) => {
            if (index == 0) {
                return (
                    <Button icon={<FiSliders className='mx-2' />} style={{ height: '41px', width: '100px', borderRadius: '10px' }}>
                        {value}
                    </Button>
                )
            } else {
                return (
                    <a className='menu-button' key={index} href="">{value}</a>
                )
            }
        })
    }

    const printProduct = () => {
        return product.map((value, index) => {
            return (
                <div className='col-6' key={index}>
                    <div className='p-2' style={{ background: 'white', borderRadius: '20px', width: "155px", margin: '10px 8px' }}>
                        <div className='d-flex justify-content-center' style={{ width: '125px', height: '125px' }}>
                            <img src={value.image} style={{ maxWidth: '100%' }} />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px' }}>{value.name}</p>
                            <p style={{ fontSize: '12px', fontWeight: '700', marginTop: '-1rem' }}>USD {value.price}</p>
                        </div>
                        <div className='d-flex justify-content-around' style={{ fontSize: '10px' }}>
                            <div className='d-flex'>
                                <AiFillStar className='my-1 mx-1' style={{ color: 'yellow' }} />
                                <p>{value.stars}</p>
                            </div>
                            <div>
                                <p>{value.review} Reviews</p>
                            </div>
                            <div>
                                <FiMoreVertical />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div style={{ paddingTop: '16px' }}>
            <div className='div-content row' style={{ fontSize: '20px' }}>
                <div className='col-6'>
                    <Link to='/'>
                        <FiChevronLeft style={{color:'black'}}/>
                    </Link>
                </div>
                <div className='col-6 d-flex justify-content-end my-2'>
                    <FiShoppingCart />
                </div>
            </div>
            <div className='div-content'>
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '20px' }}>Headphone</p>
                <p style={{ fontWeight: '700', fontSize: '24px', lineHeight: '32px' }}>TMA Wireless 2</p>
            </div>
            <div className='div-content d-flex justify-content-around align-items-center'>
                {printMenu()}
            </div>
            <div style={{ borderRadius: '35px', backgroundColor: '#F6F6F6',height:'80vh' }}>
                <div className='div-content row' style={{ paddingTop: '22px' }}>
                    {printProduct()}
                </div>
            </div>
        </div>
    );
}

export default Product;