import React, { useState } from 'react'
import axios from 'axios';
import AdminNavbar from '../navbar/navbar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./updatefood.module.css";
import { Navigate } from 'react-router-dom';

const UpdateFood = (props) => {
  const [name, setname] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setcategory] = useState("")
  const [file, setfilename] = useState("")
  const params = useParams()
  const [updatefood, setUpdatefood] = useState(false)

  useEffect(() => {
    const { foodid } = params

    axios.get(`http://localhost:3001/admin/getSelectedFood/${foodid}`)
      .then(response => {
        const data = response.data
        const userData = data[0]
        const { name, description, price, category, file } = userData
        setname(name)
        setDescription(description)
        setPrice(price)
        setcategory(category)
        setfilename(file)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  const handlename = (e) => {
    setname(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handlecategory = (e) => {
    setcategory(e.target.value)
  }


  const handleUpdate = () => {
    if (name === '') return alert('Enter Food Name')
    if (description === '') return alert('Enter Description')
    if (price === '') return alert('Enter Price')
    if (category === '') return alert('Enter category')


    const { foodid } = params
    console.log(foodid, name, description, price, category, file);
    let inputObj = { name, description, price, category, file, foodid }

    axios.put("http://localhost:3001/admin/updateFood", inputObj)
      .then(response => {
        console.log(response);
        alert("Successfully Updated")
        setUpdatefood(true)
      })
      .catch(err => {
        console.log(err);
        alert("Failed To Update")
      })

  }

  const handlefile = e => {
    const readImage = file => {
      const reader = new FileReader();
      reader.addEventListener('load', (res) => {
        setfilename(res.target.result)
      })
      reader.readAsDataURL(file);
    }
    const files = e.target.files;
    if (!files || !files[0]) return alert("File upload not supported");
    [...files].forEach(readImage)
  }

  if (updatefood) {
    return <Navigate to="/admin/viewfood" />
  }

  return (
    <>
      <AdminNavbar />
      <div className={style.heading}>
        <h1>Update Food</h1>
      </div >
      <div className={style.headcontainer}>
        <div className={style.container}>
          <div className={style.content}>
            <label>Food Name</label>
            <input placeholder='Food Name' onChange={handlename} value={name} />

            <label>Description</label>
            <input placeholder='Description' onChange={handleDescription} value={description} />
          </div>
          <div className={style.content}>
            <label>Price</label>
            <input placeholder='Price' onChange={handlePrice} value={price} />

            <label>category</label>
            <select className={style.choosecategory} value={category} >
              <option>Choose Category</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Dessert</option>
              <option>Starters</option>
            </select>
          </div>
          <div className={style.content}>
            <label>Image</label>
            <input type="file" className={style.image} onChange={handlefile} />
          </div>
        </div>
      </div>
      <button className={style.btn} onClick={handleUpdate}>Update</button>
    </>

  )
}

export default UpdateFood