// Created by Apiwat Tatsanakitti 

const express = require('express')
const cors = require('cors')
const app = express()


// Fix CORS Error
app.use(
	cors({
		// origin: "http://[public-ip-address]"
		origin: "http://[public-ip-address]",
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
	})
)


// MongoDB Config
const MongoClient = require("mongodb").MongoClient
const db_user = process.env.DATABASE_USER
const db_pass = process.env.DATABASE_PASSWORD
const db_host = process.env.DATABASE_HOST
const db_port = 27017

const url = `mongodb://${db_user}:${db_pass}@${db_host}:${db_port}`
console.log(url)

app.use(function(req, resp, next) {
	// Website 
	resp.setHeader("Access-Control-Allow-Origin", "*");
	// Request Method
	resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	// Request Header
	resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-type");
	next();
})


app.get("/api/TestDB", (req, resp) => {

	MongoClient.connect(
		url,
		(err, client) => {
			if (err) throw err
			console.log("Database connected!")

			const db = client.db("TestDB")
			db.collection("TestDB")
				.find()
				.toArray((err, result) => {
					if (err) throw err;
					resp.status(200).send(result)
                    client.close()
				})
		}
	)
})

// http://127.0.0.1:8000/api

app.get("/api", (req,res) => {
	res.send("Reply >> Get")
})

app.post("/api", (req,res) => {
	res.send("Reply >> Post")
})

app.put("/api", (req,res) => {
	res.send("Reply >> Put")
})

app.patch("/api", (req,res) => {
	res.send("Reply >> Patch")
})

app.delete("/api", (req,res) => {
	res.send("Reply >> Delete")
})

app.listen(3000, () => {
	console.log('Server listening on port 3000')
})
