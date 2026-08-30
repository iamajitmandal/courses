// exports.helloFunction = (req, res) => {
//     res.send('this is a function controllers');
// }
// above code was for learning

const Category = require('../model/categoryModel')

exports.postCategory = async(req, res) => {
    let category = new Category(req.body)
    category = await category.save()
    if(!category){
        return res.status(400).json({error: 'Something went wrong'})
    }
    res.json({category})
}
