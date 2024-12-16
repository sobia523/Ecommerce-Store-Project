import React from 'react'
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';

const  Header = () => {
  return (
    <header className="header">
        <h1 className="logo">Bandage</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pages">pages</Link>
            
        </nav>
        <div className="header">
            <AiOutlineUser style={{color:'#23A6F0', height: '17px', width:"17px"}}/>
            <a href="login/register" style={{color:'#23A6F0'}}>Login / Register</a>
            <IoSearchOutline style={{color:'#23A6F0', height: '17px', width:"17px"}}/>
            <span style={{color: "black"}}><FaShoppingCart style={{color:'#23A6F0', height: '17px', width:"17px"}}/>1</span>
            <span style={{color: "black"}}><AiOutlineHeart style={{color:'#23A6F0', height: '17px', width:"17px"}}/>1</span>
        </div>
    </header>
  );
}

export default Header