import React, { useEffect } from 'react';
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap'
import { RMV } from '../redux/actions/action';




const Header = () => {

    const [price, setPrice] = useState(0)

    // getdata from reducer
    const getdata = useSelector((state) => state.cartreducer.carts)
    console.log(getdata)

    //Menu Popup
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dispatch = useDispatch()

    //Remove item
    const remove = (id) => {
        dispatch(RMV(id))
    }

    // Total of items
    const total = () => {
        let price = 0;
        getdata.map((e, k) => {
            price = e.price + price
        })
        setPrice(price)
    }

    useEffect(() => {
        total()
    }, [total])


    return (
        <>
            <Navbar bg="dark" sticky='top' variant="dark" style={{ height: '60px' }} >
                <Container>
                    <NavLink to={'/cards'} className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to={'/'} className="text-decoration-none text-light ">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details'>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurent Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹ {e.price}</p>
                                                                <p>Quanty : {e.qnty}</p>
                                                                <p onClick={() => remove(e.id)}><i className='fas fa-trash smalltrash' style={{ color: 'red', cursor: 'pointer' }}></i></p>
                                                            </td>
                                                            <td className='mt-5 ' style={{ color: 'red', cursor: 'pointer' }} onClick={() => remove(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>

                                                        </tr>

                                                    </>

                                                )
                                            })

                                        }
                                        <p className='text-center'>Total: ₹{price}</p>
                                    </tbody>
                                </Table>
                            </div>
                            : <div className=' d-flex align-items-center justify-content-center' style={{ width: "20rem", height: 80 }}>
                                <i class="fa-solid fa-xmark " style={{ position: 'absolute', top: 2, right: 10, cursor: 'pointer' }} onClick={handleClose}></i>
                                <p style={{ fontSize: 20 }}>Your Card is empty</p>
                                <img src='./cart.gif' alt='' className='emptycart_img' style={{ width: '5rem', padding: 10, cursor: 'pointer' }} />
                            </div>
                    }


                </Menu>
            </Navbar>
        </>
    )
}

export default Header;
