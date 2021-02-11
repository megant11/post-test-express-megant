let books = [{
        id: 1,
        isbn: 98089,
        judul: "Human",
        sinopsis: "Human is..",
        penulis: "manusia",
        genre: "gore",
    },
    {
        id: 2,
        isbn: 889,
        judul: "The Art of War",
        sinopsis: "The art of war is..",
        penulis: "jessica",
        genre: "motivasi",
    },
    {
        id: 3,
        isbn: 815,
        judul: "Do Nothing",
        sinopsis: "keith",
        penulis: "do nothing is",
        genre: "motivasi",
    },
    {
        id: 4,
        isbn: 881,
        judul: "laptop gaming",
        sinopsis: "harganya mahal",
        penulis: "axioo",
        genre: "david gadgetin",
    },
    {
        id: 5,
        isbn: 272,
        judul: "akua apa air minum",
        sinopsis: "tau ga sih",
        penulis: "danone",
        genre: "fakta",
    },
    {
        id: 6,
        isbn: 331,
        judul: "keyboard mekanik",
        sinopsis: "ctak ctak",
        penulis: "rexus",
        genre: "fakta",
    },
];

exports.getAllBook = (req, res) => {
    return res.status(200).json({
        succes: true,
        books,
    });
};

exports.getBookById = (req, res) => {
    const newBook = books.find((i) => i.id === +req.params.id);
    if (newBook !== undefined) {
        res.status(200).json(newBook);
    } else {
        res.status(404).json({
            eror: true,
            message: `ERROR 404, FILE NOT FOUND`,
        });
    }
};

exports.postNewBook = (req, res) => {
    const { isbn, judul, sinopsis, penulis, genre } = req.body;

    const id = books[books.length - 1].id + 1;

    const newPost = {
        id,
        isbn,
        judul,
        sinopsis,
        penulis,
        genre,
    };
    books.push(newPost);
    res.status(201).json({ message: `Data baru sudah berhasil ditambahkan!` });
};


exports.putBook = (req, res) => {
    let id = req.params.id;
    books.filter((data) => {
        if (data.id === parseInt(id)) {
            (data.isbn = res.body.isbn),
            (data.judul = res.body.judul),
            (data.sinopsis = req.body.sinopsis),
            (data.penulis = req.body.penulis),
            (data.genre = req.body.genre);
            return data;
        }
    });
    res.status(200).json({
        message: `Buku dengan ID ${req.params.id} berhasil diperbaharui`,
    });
};

exports.deleteBook = (req, res) => {
    books = books.filter((i) => i.id !== +req.params.id);
    res.status(200).json({
        message: `Buku dengan ID ${req.params.id} sudah dihapus`,
    });
};