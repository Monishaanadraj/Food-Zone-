import React, { useState } from 'react'
import axios from 'axios';
import AdminNavbar from '../navbar/navbar';
import style from "./addfood.module.css";
import { Navigate } from 'react-router-dom';


const AddFood = () => {
  const [FoodName, setFoodName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [Category, setCategory] = useState("")
  const [file, setfilename] = useState("")
  const [updatefood, setUpdatefood] = useState(false)



  const handleFoodName = (e) => {
    setFoodName(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }


  const handleButton = () => {
    if (FoodName === '') return alert('Enter Food Name')
    if (description === '') return alert('Enter Description')
    if (price === '') return alert('Enter Price')
    if (Category === '') return alert('Enter Category')
    if (file === '') return alert("Please select Image")


    console.log(FoodName, description, price, Category, file);
    let inputObj = {
      FoodName, description, price, Category, file
    }

    axios.post("http://localhost:3001/admin/food_info", inputObj)
      .then(response => {
        console.log(response);
        alert("Added Successfully")
        setUpdatefood(true)
      })
      .catch(err => {
        console.log(err);
        alert("Failed To Add")
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
        <h1>Add Food</h1>
      </div>
      <div className={style.headcontainer}>
        <div className={style.container}>
          <div className={style.content}>
            <label>Food Name</label>
            <input placeholder='Food Name' onChange={handleFoodName} value={FoodName} />

            <label>Description</label>
            <input placeholder='Description' onChange={handleDescription} value={description} />
          </div>
          <div className={style.content}>
            <label>Price</label>
            <input placeholder='Price' onChange={handlePrice} value={price} />

            <label>Category</label>
            <select onChange={handleCategory} value={Category} >
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
      <button className={style.btn} onClick={handleButton}>Add</button>
    </>

  )
}

export default AddFood