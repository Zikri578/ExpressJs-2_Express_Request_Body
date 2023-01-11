// import package yang dibutuhkan
import express from "express";
import connect from "../prisma/connection.js";

// mengisi function app
const app = express();

// route method : GET, request untuk client, sedangkan respons untuk server.
app.get("/note/create", async (request, respons) => {
    // membaca request dari client => menampilkan di terminal
    // console.log(request.headers);
    // console.log(request.query);

    // membuat objek title dan content kedalam query
    const { title, content, author } = request.query;

    // membuat variabel createdNote untuk membuat data
    const createdNote = await connect.notes.create(
        {
            data: {
                // mengambil objek dari query
                title: title,
                content: content,
                author: author
            }
        }
    );

    // melakukan respons ke server
    respons.status(200).json(
        {
            // menampilkan pesan 
            success: true,
            // message: "Server Berhasil Terhubung.."

            // mengambil variabel createdNote yang ada diatas
            data: createdNote
        }
    );
});

// params
app.get("/note/read/:id", async (request, respons) => {

    // membuat objek id 
    // const { id } = request.params

    // membuat variabel readNotes 
    const readNotes = await connect.notes.findMany();

    // mengambil status respons kedalam bentuk json
    respons.status(200).json(
        {
            // status 
            success: true,

            // mengambil variabel readNotes yang ada diatas
            data: readNotes
        }
    )
})



// listener
app.listen(9000, () => {
    // menampilkan output ketika sudah berjalan
    console.log("Server Backend Berjalan..");
});