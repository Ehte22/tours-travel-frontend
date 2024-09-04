import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Button, Container, IconButton, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SideBarContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';


const pages = [
    { page: "HOME", to: "/" },
    { page: "HOTELS", to: "/hotels" },
    { page: "FLIGHTS", to: "/flights" },
    { page: "CABS", to: "/cabs" },
    { page: "TOURS", to: "/tours" },
    { page: "BLOGS", to: "/blogs" }
];

const Header = () => {
    const { setOpen } = useContext(SideBarContext)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return <>

        <Box sx={{
            width: '100%',
            height: '60px',
            position: {
                xs: 'static',
                md: `fixed`
            },
            top: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 2,
            boxShadow: 'none',
            borderBottom: '1px solid gray',
            display: 'flex',
            alignItems: 'center',
            paddingY: '35px',
            paddingX: '12px'
        }}>
            <Container disableGutters maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <img src="https://shreethemes.net/geotrip-live/geotrip/assets/img/logo.png" height={40} alt="" />
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        },
                        gap: '24px',
                        marginLeft: '40px',
                    }}>
                        {pages && pages.map((item, i) =>
                            <Link
                                key={i}
                                href={item.to}
                                underline="none"
                                sx={{
                                    fontFamily: 'Poppins, Arial, sans-serif',
                                    letterSpacing: '1px',
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    fontSize: '14px',
                                    marginLeft: '35px',
                                }}
                            >
                                {item.page}
                            </Link>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
};

export default Header;
