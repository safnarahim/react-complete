const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://dbuser:user24@nodesdb.pluwc.mongodb.net/nodesDB")

app.post('/api/SignUp', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			Name: req.body.Name,
			Email: req.body.Email,
			Password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		Email: req.body.Email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.Password,
		user.Password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				Name: user.Name,
				Email: user.Email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


app.listen(3001, () => {
	console.log('Server started on 3001')
})

