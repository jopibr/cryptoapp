import React, {useEffect, useState} from 'react';
import {Button, Typography, Menu, Avatar} from "antd";
import {Link} from "react-router-dom";
import {HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png"

const {Title} = Typography;

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screeSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screeSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screeSize])


    return (
        <div className="nav-container">
            <div className='logo-container'>
                <Avatar src={icon} size='large'/>
                <Title level={2} className='logo'>
                    <Link to='/'>Criptoverse</Link>
                </Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme={"dark"}>
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    );
}

export default NavBar;