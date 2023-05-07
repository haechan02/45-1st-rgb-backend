const dataSource = require("./dataSource");

const createCatr = async (userId, productsId, quantity) => {
  try {
    await dataSource.query(
      `INSERT INTO cart(
        users_id,
        products_id,
        quantity
      )VALUES (?,?,?)
      `,
      [userId, productsId, quantity]
    );

    return await dataSource.query(
      `SELECT 
        users_id,
        products_id,
        quantity
        FROM cart
        WHERE users_id = ?
      `,
      [userId]
    );
  } catch (err) {
    console.log(err);
    const error = new Error(`INVALID_DATA_INPUT`);
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  createCatr,
};
