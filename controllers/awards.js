const Awards = require('../models').Awards;
const errorHandler = require("../helpers/error-handler");
const { pagination } = require("../helpers/utils");
const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res) => {
    const { page, perPage, type, point } = req.body;
    
    try {
      const filter = {}
      let opt = {}

      if (type) {
        filter.awards_type = type;
      }


      if (point) {
        filter.awards_price = point;
      }

      if (Object.keys(filter) > 0) {
        opt = {
          where: {
            ...filter
          }
        }
      }

      const result = await Awards.findAndCountAll(opt);
      res.status(200).json({
        status: "Success",
        message: "Successfully retrieve the data",
        data: pagination(result.count, result.rows, page, perPage),
      });

    } catch (error) {
      
      errorHandler(res, error);
    }
  }
}