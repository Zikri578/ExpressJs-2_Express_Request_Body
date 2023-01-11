# ExpressJs-2_Express_Request_Body

Express.js adalah framework JavaScript untuk aplikasi web yang berjalan di sisi server, dan dapat digunakan dengan Node.js. Dalam Express, request body adalah bagian dari objek request yang berisi data yang dikirim oleh client ke server dalam format yang sesuai dengan header Content-Type. Data yang diterima dari client dapat berupa query parameters, form data, atau json.

Contohnya, ketika client mengirimkan permintaan POST ke server dengan menyertakan data dalam format JSON, Express dapat mengakses data tersebut melalui request.body.

Untuk dapat mengakses request body, Anda harus menambahkan middleware pada aplikasi Express yang dapat mem-parsing data dari request body. Contohnya, Anda dapat menggunakan middleware "body-parser" untuk meng-parsing data dari request body yang diterima dalam format JSON.

    const express = require('express')
    const bodyParser = require('body-parser')
    const app = express()

    app.use(bodyParser.json())

Dengan middleware body-parser ini, Anda dapat mengakses request.body untuk mengambil data yang dikirim oleh client. Sebagai contoh, dalam route yang memproses permintaan POST, Anda dapat mengambil nilai dari request.body seperti ini:

    app.post('/myroute', function(req, res) {
        const data = req.body;
        console.log(data);
    });

Selain body-parser, banyak library lain yang bisa digunakan untuk parsing body request sesuai dengan format yang diterima. Misal multer untuk handling file yang diupload dan busboy for parsing multipart form-data.

Selain middleware body-parser, ada juga beberapa middleware lain yang dapat digunakan untuk mem-parsing request body dalam format yang berbeda.
* Multer: middleware ini digunakan untuk mem-parsing data dari request body yang berisi file-file yang diupload.
* Busboy: middleware ini digunakan untuk mem-parsing data dari request body yang diterima dalam format multipart/form-data, yang biasa digunakan untuk meng-upload file.
* json-body: middleware ini digunakan untuk mem-parsing data dari request body yang diterima dalam format JSON.

Secara umum jika sebuah request diterima oleh express, maka akan di parsing dahulu sesuai middleware yang di definisikan dahulu. Jadi sangat penting untuk menentukan middleware yang sesuai dengan format request yang diterima.

Beberapa hal yang perlu diingat dalam menggunakan request body dalam Express.js adalah :
* Pastikan untuk menambahkan middleware yang sesuai dengan format data yang diterima dari client.
* Verifikasi data yang diterima dari client sebelum digunakan, untuk menghindari kesalahan dan kerentanan keamanan.
* Ingat untuk mengaktifkan cors (Cross-Origin Resource Sharing) untuk aplikasi yang mengirimkan request dari domain yang berbeda
* Ingat untuk validate request body yang diterima, agar data yang diterima sesuai dengan harapan sebelum di proses oleh sistem
