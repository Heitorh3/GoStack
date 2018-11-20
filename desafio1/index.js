const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

/* Configuracos do nunjucks */
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

const checkAgeQueryParam = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }

  return next()
}

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('new')
})

app.post('/check', checkAgeQueryParam, (req, res) => {
  const { age } = req.body

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
})

app.get('/major', checkAgeQueryParam, (req, res) => {
  const { idade } = req.query
  return res.render('major', { idade })
})

app.get('/minor', checkAgeQueryParam, (req, res) => {
  const { idade } = req.query
  return res.render('minor', { idade })
})

app.listen(3000)
