const TourModel = require('../models/Tours')

function create (req, res, next) {
  let newTour = new TourModel(req.body)
  newTour.save((err, tour) => {
    if (err) {
      res.status(409).json({ status: 'error', message: 'Manda los datos requeridos' })
    }
    res.status(200).json({ status: 'success', message: 'El tour ha sido registrado', data: tour })
  })
}

function findAll (req, res, next) {
  TourModel.find({}, (err, Tours) => {
    if (err) {
      res.status(404).json({ status: 'error', message: 'Tours no encontrados' })
    }
    res.status(200).json({ status: 'success', message: 'Tours encontrados', data: Tours })
  })
}

function removeTour (req, res, next) {
  TourModel.findOne({ _id: req.params.id }, (err, tour) => {
    if (err) {
      throw err
    }
    tour.remove()
    res.status(200).json({ status: 'success', message: `El tour ${tour.title} ha sido removido de la base de datos` })
  })
}

module.exports = {
  create,
  findAll,
  removeTour
}
