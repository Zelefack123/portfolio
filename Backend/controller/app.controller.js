const{portfolioModel} = require("../model/portfolio_model");
const{testimonialsModel} = require("../model/testimonial_model");

exports.portfolioAppRoute = async (req, res)=>{
try {
  items= await portfolioModel.find({});
  return res.status(200).send({
    message: "Success",
    data: items,
  })
} catch (err) {
    res.status(500).json({error:`Internal server error! /n ${err}`});
}


}

exports.testimonialAppRoute = async (req, res)=>{
  try {
    items= await testimonialsModel.find({});
    return res.status(200).send({
      message: "Success",
      data: items,
    })
  } catch (err) {
      res.status(500).json({error:`Internal server error! /n ${err}`});
  }
  
  
  }