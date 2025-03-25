import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1, my: 2 }} >
                <FoodBankIcon />
                Food Zone
            </Typography>

            <Divider />

            <nav className={style.mobileNav}>
                <div className={style.mobileNav}>
                    <NavLink className={style.mobileNav} to="/"> Home </NavLink>
                    <NavLink className={style.mobileNav} to="/menuB"> Menu </NavLink>
                    <NavLink className={style.mobileNav} to="/about"> About </NavLink>
                    <NavLink className={style.mobileNav} to="/contact"> Contact </NavLink>
                    <NavLink className={style.mobileNav} to="/login"> User LogIn </NavLink>
                    <NavLink className={style.mobileNav} to="/admin/login"> Admin LogIn </NavLink>
                </div>
            </nav>

        </Box>


    );
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>

                    <Toolbar>

                        <IconButton color="inherit" arial-label='open drawer' edge="start"
                            sx={{ mr: 2, display: { sm: "none" }, }} onClick={handleDrawerToggle} >

                            <MenuIcon />

                        </IconButton>

                        <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1 }} >
                            <FoodBankIcon />
                            Food Zone
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                            <nav className={style.navbar}>
                                <div className={style.nav_link}>
                                    <NavLink className={style.nav_link} to="/"> Home </NavLink>
                                    <NavLink className={style.nav_link} to="/menuB"> Menu </NavLink>
                                    <NavLink className={style.nav_link} to="/about"> About </NavLink>
                                    <NavLink className={style.nav_link} to="/contact"> Contact </NavLink>
                                    <NavLink className={style.nav_link} to="/login"> User LogIn  </NavLink>
                                    <NavLink className={style.nav_link} to="/admin/login"> Admin LogIn </NavLink>
                                </div>
                            </nav>

                        </Box>

                    </Toolbar>

                </AppBar>

                <Box component="nav">

                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{
                        display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                        },
                    }}>
                        {drawer}
                    </Drawer>

                </Box>

                <Box>
                    <Toolbar />
                </Box>

            </Box>
        </>
    )
}
export default Navbar