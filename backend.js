let express = require("express");
let path = require("path");
let mysql = require("mysql2");
let app = express();
let port = 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TUtu22@#',
    database: 'ruraleducation'
});

db.connect(() =>{
    console.log('Connected to MySQL database');
});
// try {
//     db.query("SHOW TABLES", (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// }
// catch (err) {
//     console.log(err);
// }

//student register
app.post("/register", (req, res) => {
    let {name, email, password} = req.body;
    const sql = 'INSERT INTO customers1 (name,email, password) VALUES (?,?,?)';
    try {

        db.query(sql, [name,email, password ], (err, result) => {
            if (err) throw err;
            console.log('User registered');
            console.log();
            res.render("index.ejs", { name,email, password});
        })
    }
    catch (err) {
        console.log(err);
    }
    

});
app.post("/registerfarmer", (req, res) => {
    let {name, email, password} = req.body;
    const sql = 'INSERT INTO customers1 (name,email, password) VALUES (?,?,?)';
    try {

        db.query(sql, [name,email, password ], (err, result) => {
            if (err) throw err;
            console.log('User registered');
            console.log();
            res.render("farmerindex.ejs", { name,email, password});
        })
    }
    catch (err) {
        console.log(err);
    }
    

});

// API route to register a farmer

// app.get('/farmer/:farmerId/dashboard', (req, res) => {
//     const { farmerId } = req.params;

//     // Query farmer's details or products if needed
//     // Example: const query = `SELECT * FROM farmer_${farmerId}_products`;

//     res.render('farmerindex.ejs', { farmerId }); // Passing farmerId to the view
// });

// Assuming you have already established a MySQL connection as 'db'

// app.post('/api/products/:farmerId', (req, res) => {
//     const { farmerId } = req.params; // The farmer's ID is passed via the URL parameter
//     const { productItem, productPrice, productDescription } = req.body;

//     // Check if all fields are provided
//     if (!productItem || !productPrice || !productDescription) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Define the farmer's product table name
//     const farmerTableName = `farmer_${farmerId}_products`;

//     // SQL query to insert the product into the farmer's product table
//     const query = `
//         INSERT INTO ${farmerTableName} (product_name, product_price, product_description)
//         VALUES (?, ?, ?)
//     `;

//     // Execute the query
//     db.query(query, [productItem, productPrice, productDescription], (err, result) => {
//         if (err) {
//             console.error('Error adding product:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }

//         // Return success message with the inserted product ID
//         res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
//     });
// });

//student login
// app.post("/login", (req, res) => {
//     let { user, pass1 } = req.body;
//     const sql = 'SELECT  user FROM users_db WHERE email = ? AND pass=?';
//     db.query(sql, [user,pass1], (err, results) => {
//         if (err) throw err;
//         //console.log(results[0].user);
//         if (results.length > 0) {
//             user=results[0].user;
//             console.log(results.type);
//             res.render("index.ejs",{user});
//         } 
//         else 
//         {
            
//              res.render("errorstudent.ejs",{ error: 'Invalid username or password' });
           
//         }
//     });
// })
// app.get("/", (req, res) => {
//     console.log("response");
// });

// app.listen(port, () => {
//     console.log("app listening to client");
// })

// //techer register
// app.post("/registerteacher", (req, res) => {
//     let { user, email, pass, cpass } = req.body;
//     const sql = 'INSERT INTO teachers (user, email,phone,subject) VALUES (?,?,?,?)';
//     try {

//         db.query(sql, [user, email,pass, cpass], (err, result) => {
//             if (err) throw err;
//             console.log('User registered');
//             console.log();
//             res.sendFile(__dirname + '/public/verify.html');
//         })
//     }
//     catch (err) {
//         console.log(err);
//     }

// });

// //teacher login
// app.post("/loginteacher", (req, res) => {
//     let { user, pass1 } = req.body;
//     const sql = 'SELECT  username FROM finalteachers WHERE email = ? AND password=?';
//     db.query(sql, [user,pass1], (err, results) => {
//         if (err) throw err;
//         //console.log(results[0].user);
//         if (results.length > 0){
//             user=results[0].username;
//             console.log(results.type);
        
//             res.render("indexteacher.ejs",{user});
//         } 
//         else 
//         {
            
//              res.render("errorteacher.ejs",{ error: 'Invalid username or password' });
           
//         }
//     });
// })


// app.post("/registerteacherfinal", (req, res) => {
//     let {username, email, pass } = req.body;
//     const sql = 'INSERT INTO finalteachers ( email,password,username) VALUES (?,?,?)';
//     try {

//         db.query(sql, [email,pass,username], (err, result) => {
//             if (err) throw err;
//             console.log('teacher registered');
//             console.log();
//             // res.sendFile(__dirname + '/public/verify.html');
//         })
//     }
//     catch (err) {
//         console.log(err);
//     }

// });

app.listen(port, () => {
        console.log("app listening to client");
     })