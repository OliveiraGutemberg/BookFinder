
/*

Buscando livros por Autor.

*/

const booksByCategory = [
    {
        category: "Riquiza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                autor: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilonia",
                autor: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligencia emocional",
        books: [
                {
                    title: "Você é insubstituivel",
                    autor: "Augusto Cury",
                },
                {
                    title: "Ansiedade - Como enfrentar o mal do século",
                    autor: "Augusto Cury",
                },
                {
                    title: "Os 7 habitos das pessoas altamente eficazes",
                    autor: "Stephen R. Cover",
                }
        ],
    }
]

// Contar quantos objetos tem entro do Array
const totalCategoryes = booksByCategory.length
console.log('Total de categorias', totalCategoryes)

for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// Contar autores
function autores() {
    let autor = [];

    for(let category of booksByCategory) {
       for(let book of category.books) {
        if(autor.indexOf(book.autor) == -1) {
            autor.push(book.autor)//Alimentando array com autores.
        }
       }
    }

    console.log("Total de autores: ", autor.length)
}

autores();

// Mostrar livros do Algusto Cury
function livrosPorAutor(escritor) {
    let livrosAltor = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.autor == escritor) {
                livrosAltor.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${escritor}: ${livrosAltor.join(", ")}`)
}

livrosPorAutor("Augusto Cury")
