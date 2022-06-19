import React, { useState } from 'react';
import { FiAlignLeft, FiSearch, FiArrowRight } from 'react-icons/fi';
import { Input, Space } from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
const logo = require('./logo.PNG');
const tda2 = require('./tda2.png');

function Home() {

    const [category, setCategory] = useState(["Headphone", "Headband", "EarPads"]);
    const [selectedCat, setSelectedCat] = useState(0)
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
            }
        ]
    )

    const printCategory = () => {
        return category.map((value, index) => {
            return (
                <a className={`${selectedCat == index ? 'type-button-selected' : 'type-button'}`} key={index}>{value}</a>
            )
        })
    }

    const printProduct = () => {
        return product.map((value, index) => {
            return (
                <div className='col-6' key={index}>
                    <div className='p-2' style={{ background: 'white', borderRadius: '20px', height: '213px', width: "155px" }}>
                        <div className='d-flex justify-content-center' style={{ width: '125px', height: '125px' }}>
                            <img src={value.image} style={{ maxWidth: '100%' }} />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px' }}>{value.name}</p>
                            <p style={{ fontSize: '12px', fontWeight: '700', marginTop: '-1rem' }}>USD {value.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div style={{ paddingTop: '16px' }}>
            <div className='row div-content'>
                <div className='col-4'>
                    <FiAlignLeft style={{ fontSize: '20px' }} />
                </div>
                <div className='col-4'>
                    <div style={{ height: '25px', width: '83.33px', margin: 'auto' }}>
                        <img src={logo} style={{ maxWidth: '100%' }} />
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <img src='https://randomuser.me/api/portraits/med/men/75.jpg' style={{ height: '35px', width: '35px', borderRadius: '50%' }} />
                </div>
            </div>
            <div className='div-content'>
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '20px' }}>Hi, Andrea</p>
                <p style={{ fontWeight: '700', fontSize: '24px', lineHeight: '32px' }}>What are you looking for today?</p>
            </div>
            <div className='div-content'>
                <Space direction='vertical' style={{ width: '100%' }}>
                    <Input placeholder='Search Headphone' style={{ height: '45px', borderRadius: '10px' }} prefix={<FiSearch style={{ fontSize: '20px', marginRight: '16px' }} className='text-muted' />} />
                </Space>
            </div>
            <div style={{ borderRadius: '35px', height: '100vh', backgroundColor: '#F6F6F6' }}>
                <div className='div-content d-flex justify-content-evenly' style={{ paddingTop: '32px' }}>
                    {printCategory()}
                </div>
                <div className='div-content'>
                    <div className='row' style={{ backgroundColor: 'white', borderRadius: '15px' }}>
                        <div className='col-6 p-4'>
                            <p style={{ fontWeight: '700', fontSize: '22px' }}>TMA-2 Modular Headphone</p>
                            <div style={{ fontSize: '14px', color: '#0ACF83', display: 'flex', marginTop: '24px', fontWeight: '700' }}>
                                <p>Shop now</p>
                                <FiArrowRight className='my-1 mx-2' />
                            </div>
                        </div>
                        <div className='col-6 p-4'>
                            <img src={tda2} style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                </div>
                <div className='div-content row'>
                    <div className='col-6'>
                        <p style={{ fontSize: '16px' }}>Featured Products</p>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <Link to="/product">
                            <a style={{ textDecoration: 'none', color: '#7F7F7F' }}>See all</a>
                        </Link>
                    </div>
                </div>
                <div className='div-content row'>
                    {printProduct()}
                </div>

            </div>
        </div>
    );
}

export default Home;