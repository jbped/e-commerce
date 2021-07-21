const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: [
          "id",
          "product_name",
          "price",
          "stock"
        ]
      }
    ]
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: [
          "id",
          "product_name",
          "price",
          "stock"
        ]
      }
    ]
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: "No categories were found with the provided Category ID." });
        return;
      }
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
  // JSON Setup:
  // {
  //    "category_name": {NEW CATEGORY NAME}
  // }

  Category.create({
    category_name: req.body.category_name
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // JSON Setup:
  // {
  //    "category_name": {NEW CATEGORY NAME}
  // }

  Category.update(
    {
    category_name: req.body.category_name,
    }, 
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(data => {
      if (!data) {
        res.status(404).json({ message: "No categories were found with the provided Category ID." });
        return;
      }
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: "No categories were found with the provided Category ID." });
        return;
      }
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
