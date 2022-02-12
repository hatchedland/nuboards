import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from "react-router-dom";

const Nav = styled.div`
    display: flex;
    height: 60px;
    align-items: flex-start;
    justify-content: space-around;
`
const Logo = styled.img`
    max-width: 120px;
    height: 60px;
    border: 2px solid red;
    aspect-ratio: initial;
`

const NavWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`
const NavMenu = styled.ul`
 display: flex;
 justify-content: space-around;
 max-width: 50vw;
 text-align: center;
 gap: 2em;
 flex-wrap: wrap;

 @media (max-width: 1000px){
    flex-direction: column;
 }
`
const Hamburger = styled.div`
width: 4em;
height: 3.5em;
display: grid;
grid-template-rows: repeat(3, 33%);
    & span{
        background-color: blue;
        height: 5px;
        width: 100%;
    }
    @media (min-width: 1000px) {
        display: none;
        transition: all 1s ease-in;
    }
`

const NavItems = styled.li`
    /* font-size: 100px; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color: #888;
    font-size: 1.5em;
    cursor: pointer;
    text-decoration: none;
    list-style-type: none;
`

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
    

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

  return (
    <Nav>
        <Logo src="http://www.designbolts.com/wp-content/uploads/2013/05/20-logo.jpg" alt="logo" />
        <NavWrapper>
            <Hamburger onClick={toggleNav} ><span></span><span></span><span></span></Hamburger >
        {(toggleMenu || screenWidth > 1000) && (
            <NavMenu>
            <Link to="/home" style={{ textDecoration: 'none' }}><NavItems>Home</NavItems></Link>
            <Link to="/product" style={{ textDecoration: 'none' }}><NavItems>Product</NavItems></Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}><NavItems>Cart</NavItems></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><NavItems>About</NavItems></Link>
            <NavItems>Profile</NavItems>
        </NavMenu>
        )}
        </NavWrapper>
    </Nav>
  )
}

export default Navbar