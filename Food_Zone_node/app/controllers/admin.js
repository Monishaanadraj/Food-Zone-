const { response } = require("express");
const express = require("express")
const router = express.Router()
const db = require("../../config/db")

//Admin Login

router.post("/adminlogin", (req, res) => {
    console.log("Inside login", req.body);
    const { email, password } = req.body
    //to check if the entered name and password exists in the table
    const sql = `SELECT * FROM admin_login WHERE admin_email='${email}' AND admin_password='${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err

        if (result.length > 0) res.status(200).send(result)
        else res.status(404).send(result)
    })
})


router.get("/getAllReservation", (req, res) => {
    const sql = "SELECT * FROM reservation"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).send(result)
    })
})

router.put("/confirmReservation/:orderId", (req, res) => {
    console.log("Update", req.body);
    const sql = `UPDATE reservation SET status='CONFIRMED' WHERE reservationId ='${req.params.orderId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.put("/cancelReservation/:orderId", (req, res) => {
    const sql = `UPDATE reservation SET status='CANCELLED' WHERE reservationId = '${req.params.orderId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


router.post("/food_info", (req, res) => {
    console.log("Inside Food Info", req.body);
    const { FoodName, description, price, Category, file } = req.body
    const sql = `INSERT INTO food_info(name,description,price,Category,file) 
    VALUES('${FoodName}','${description}','${price}','${Category}','${file}')`

    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send("Success")
    })
})

router.get("/getAllFood", (req, res) => {
    const sql = "SELECT * FROM food_info"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).send(result)
    })

})

router.delete("/deleteFood/:foodid", (req, res) => {
    const sql = `DELETE FROM food_info WHERE foodid = '${req.params.foodid}'`
    db.query(sql, (err, result) => {
        const sql1 = " SELECT * from food_info"
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1)
        })
    })
})

router.get("/getSelectedFood/:foodid", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE foodid='${req.params.foodid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.put("/updateFood", (req, res) => {
    console.log("Updated Food", req.body);
    const { name, description, price, category, file, foodid } = req.body
    const sql = `UPDATE food_info SET name ='${name}', description ='${description}', price ='${price}', category ='${category}',file='${file}'  WHERE foodid ='${foodid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


router.get("/getAllOrder", (req, res) => {
    const sql = "SELECT * FROM orders"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).send(result)
    })

})

router.put("/confirmOrder/:userId", (req, res) => {
    console.log("Update", req.body);
    const sql = `UPDATE orders SET status='CONFIRMED' WHERE orderid ='${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.put("/cancelOrder/:userId", (req, res) => {
    const sql = `UPDATE orders SET status='CANCELLED' WHERE orderid = '${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

module.exports = router