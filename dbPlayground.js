const db = require('./models')
///////////////////////////////for reference//////////////////////
// const bookSchema = new mongoose.Schema({
//     title: String,
//     language: String,
//     year: Number
// });


// const authorSchema = new mongoose.Schema({
//     name: String,
//     country: String,
//     books:[bookSchema]
// });
//////////////////////////////////////////////////////////////////////
// CREATE new author
const createAuthor = async() =>{
    const newAuthor = await db.Author.create({
        name:'Diana Gabaldon',
        country: 'United States'
    })
    console.log(newAuthor)
}
// createAuthor()


// READ existing author & CREATE new books for it
const addNewBook = async() =>{
    const foundAuthor = await db.Author.findOne({name:'Diana Gabaldon'})
    console.log(foundAuthor)

    foundAuthor.books.push({
        title:'The fiery cross',
        language: 'English',
        year: 2001
    })
    await foundAuthor.save()
    console.log(foundAuthor)
}

// addNewBook()

//UPDATE a book
const findAuthorUpdateBook = async(name, bookId)=>{
    const foundAuthor = await db.Author.findOne({name: name})

    await foundAuthor.books.id(bookId).update({title: 'The Fiery Cross'})
    await foundAuthor.save()
    console.log(foundAuthor)
}
// findAuthorUpdateBook('Diana Gabaldon', '')

//DELETE a book
const findAuthorDeleteBook = async(name, bookId)=>{
    const foundAuthor = await db.Author.findOne({name: name})

    await foundAuthor.books.id(bookId).remove()
    await foundAuthor.save()
    console.log(foundAuthor)
}

// findAuthorDeleteBook('Stephenie Meyer','603f1c9c2f07bb0ec8822fc2')

