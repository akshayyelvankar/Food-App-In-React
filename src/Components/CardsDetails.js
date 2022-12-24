import { color } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cardsdata from './CardsData';
import { ADD, RMV, DEC } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';

const CardsDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState([])

  // getdata from Reducer
  const getdata = useSelector((state) => state.cartreducer.carts)

  // Filter Data
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    })
    setData(comparedata)
  }
  useEffect(() => {
    compare();
  }, [id])

  const dispatch = useDispatch()

  // Navigate page  to home Path
  let navigate = useNavigate()
  const remove = (id) => {
    dispatch(RMV(id))
    navigate('/')
  }

  // Add Data
  const send = (e) => {

    dispatch(ADD(e))
  }

  // Remove Data
  const decitems = (e) => {
    dispatch(DEC(e))
  }
  return (
    <>
      <div className='container mt-4'>
        <h2 className='text-center'>Items Details Page</h2>
        <section className='container mt-5 '>
          <div className='iteamsdetails'>
            {
              data.map((element) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={element.imgdata} alt='' />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurent</strong>:{element.rname}</p>
                            <p><strong>Price</strong>:{element.price}</p>
                            <p><strong>Dishes</strong>:{element.address}</p>
                            <p><strong>Total</strong>:₹ {element.price * element.qnty} </p>
                          </td>
                          <td>
                            <p><strong>Rating :</strong><span style={{ background: 'green', color: "#fff", padding: '2px 5px', borderRadius: '10px' }}>{element.rating} ★</span></p>
                            <p><strong>Rating :</strong><span style={{}}>{element.somedata}</span></p>
                            <p><strong>Remove :</strong><span  ><i className='fas fa-trash mx-2' style={{ color: 'red', cursor: 'pointer' }} onClick={() => remove(element.id)}></i></span></p>
                          </td>
                        </tr>
                        <td className='counter'>
                          <p style={{ fontSize: '18px', cursor: 'pointer' }} onClick={element.qnty <= 1 ? () => remove(element) : () => decitems(element)}>-</p>
                          <p>{element.qnty}</p>
                          <p style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => send(element)}>+</p>
                        </td>
                      </Table>
                    </div>
                  </>
                )
              })
            }

          </div>
        </section>
      </div>

    </>
  )
}

export default CardsDetails
