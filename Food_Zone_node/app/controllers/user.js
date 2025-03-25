const express = require("express")
const router = express.Router()
const db = require("../../config/db")

router.post("/addNewUser", (req, res) => {
    console.log("inside user", req.body)
    const { email, password, username } = req.body
    const sql = `INSERT INTO user(Username,EmailId,password)  VALUES('${username}','${email}','${password}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })
})


router.post("/login", (req, res) => {
    console.log("Inside login", req.body);
    const { email, password } = req.body
    const sql = `SELECT * FROM user WHERE EmailId='${email}' and password='${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err

        if (result.length > 0) res.status(200).send(result)
        else res.status(404).send(result)
    })
})


router.put("/updatePassword/:email", (req, res) => {
    console.log("updated", req.body);
    const { email, newpassword } = req.body
    const sql = `UPDATE user SET password='${newpassword}' WHERE EmailID ='${email}'`

    db.query(sql, (err, dbresult) => {
        if (err) throw err
        res.status(200).send(dbresult)
    })
})


router.post("/message", (req, res) => {
    console.log("Inside message", req.body);
    const { name, email, message } = req.body
    const sql = `INSERT INTO user_contact(Name,EmailId,Message)  VALUES('${name}','${email}','${message}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })
})


router.post("/makeReservation", (req, res) => {
    console.log("Inside reservation", req.body);
    const { name, email, phoneno, date, time, members,userId } = req.body
    const sql = `INSERT INTO reservation(Name,EmailId,PhoneNumber,Date,Time,TotalMembers,userId)  
    VALUES('${name}','${email}','${phoneno}','${date}','${time}','${members}','${userId}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })
})


router.get("/getAllFood", (req, res) => {
    const sql = "SELECT * FROM food_info"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).send(result)
    })

})


router.get("/getDessertsFood/:category", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE category = 'Dessert'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})


router.get("/getVegFood/:category", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE category = 'Veg'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})


router.get("/getNonvegFood/:category", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE category = 'Non-Veg'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})


router.get("/getStartersFood/:category", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE category = 'Starters'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})


router.put("/orderList", (req, res) => {
    console.log("Inside Cart", req.body);
    const { name, price, qty } = req.body
    const sql = `INSERT INTO order_list(food_name,price,total_items) 
    VALUES('${name}','${price}','${qty}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })
})



router.get("/getSelectedFood/:foodid", (req, res) => {
    const sql = `SELECT * FROM food_info WHERE foodid='${req.params.foodid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


router.delete("/deleteFood/:foodid", (req, res) => {
    const sql = `DELETE FROM add_to_cart WHERE foodid = '${req.params.foodid}'`
    db.query(sql, (err, result) => {
        const sql1 = " SELECT * from add_to_cart"
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1)
        })
    })
})


router.post("/address", (req, res) => {
    console.log("User Address", req.body)
    const { fullname, PhoneNumber, place, pincode, address, landmark } = req.body

    const sql = `INSERT INTO address(fullname,Phone_number,place,pincode,address,landmark) 
                             VALUES('${fullname}','${PhoneNumber}','${place}','${pincode}','${address}','${landmark}')`

    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })

})


router.get("/getMyReservation/:userId", (req, res) => {
    const sql = `SELECT * FROM reservation WHERE userId='${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})



router.post("/payment",(req, res)=>{
    const {totalAmount,foodItems,userId,mode, address} = req.body
    const sql = `INSERT INTO orders(totalAmount,foodItems,userId,mode, address) VALUES('${totalAmount}','${foodItems}','${userId}','${mode}', '${address}')`
    db.query(sql, (err, result) => {
        console.log(req.body)
        if (err) throw err
        res.status(200).send(result)
    })
})


router.get("/getMyOrder/:userId", (req, res) => {
    const sql = `SELECT * FROM orders WHERE userId='${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})



module.exports = router

