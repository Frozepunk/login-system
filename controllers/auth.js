// const mysql=require('mysql');
// const jwt=require('jsonwebtoken');
// const bcrypt=require('bcryptjs');
// const db=mysql.createConnection({
//     host:process.env.DATABASE_HOST,
//     user:process.env.DATABASE_USER,
//     password:process.env.DATABASE_PASSWORD,
//     database:process.env.DATABASE
// })
// exports.register=(req,res)=>{
//     console.log(req.body);
//     const {name,email,password,passwordConfirm}=req.body;
//     db.query('SELECT email FROM users WHERE email = ?',[email],async (error,results)=>{
//         if(error){
//             console.log(error);
//         }
//         if(results.length>0){
//             return res.render('register',{
//                 message:'That email is already in use'
//             })
//         }
//         else if (password!==passwordConfirm){
//             return res.render('register',{
//                 message:'Password do not match'
//             })
            
//         }
//         try {
//             let hashedPassword = await bcrypt.hash(password, 8); // Use await with bcrypt.hash
//             console.log(hashedPassword);
//             // Continue with your database insertion or any other logic here
//         } catch (error) {
//             console.log(error);
//             return res.render('register', {
//                 message: 'An error occurred'
//             });
//         }
//         db.query('INSERT INTO users SET ?',{name,email,password:hashedPassword},(error,results)=>{
//             if(error){
//                 console.log(error);
//             }
//             else{
//             return res.render('register',{
//                 message:'User Registered'
//             })
//             }
//         })
//         // res.send('testing the hashing');
//     });
//     // res.send("Form submitter");
// }

// const mysql = require('mysql');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

// exports.register = async (req, res) => {
//     console.log(req.body);
//     const { name, email, password, passwordConfirm } = req.body;

//     // Hash the password asynchronously
//     try {
//         const hashedPassword = await bcrypt.hash(password, 8);

//         db.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {
//             if (error) {
//                 console.log(error);
//                 return res.render('register', {
//                     message: 'An error occurred'
//                 });
//             }
//             if (results.length > 0) {
//                 return res.render('register', {
//                     message: 'That email is already in use'
//                 });
//             } else if (password !== passwordConfirm) {
//                 return res.render('register', {
//                     message: 'Passwords do not match'
//                 });
//             }

//             // Insert the user into the database with the hashed password
//             db.query('INSERT INTO users SET ?', { name, email, password: hashedPassword }, (error, results) => {
//                 if (error) {
//                     console.log(error);
//                     return res.render('register', {
//                         message: 'An error occurred'
//                     });
//                 }
//                 console.log(results);
//                 return res.render('register', {
//                     message: 'User Registered'
//                 });
//             });
//         });
//     } catch (error) {
//         console.log(error);
//         return res.render('register', {
//             message: 'An error occurred'
//         });
//     }
// };

// const mysql = require('mysql');
// const bcrypt = require('bcryptjs');
// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

// exports.register = async (req, res) => {
//     console.log(req.body);
//     const { name, email, password, passwordConfirm } = req.body;

//     // Hash the password asynchronously
//     try {
//         const hashedPassword = await bcrypt.hash(password, 8);

//         db.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {
//             if (error) {
//                 console.log(error);
//                 return res.render('register', {
//                     message: 'An error occurred'
//                 });
//             }
//             if (results.length > 0) {
//                 return res.render('register', {
//                     message: 'That email is already in use'
//                 });
//             } else if (password !== passwordConfirm) {
//                 return res.render('register', {
//                     message: 'Passwords do not match'
//                 });
//             }

//             // Insert the user into the database with the hashed password
//             db.query('INSERT INTO users SET ?', { name, email, password: hashedPassword }, (error, results) => {
//                 if (error) {
//                     console.log(error);
//                     return res.render('register', {
//                         message: 'An error occurred'
//                     });
//                 }
//                 console.log(results);
//                 return res.render('register', {
//                     message: 'User Registered'
//                 });
//             });
//         });
//     } catch (error) {
//         console.log(error);
//         return res.render('register', {
//             message: 'An error occurred'
//         });
//     }
// };

const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = async (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;

    try {
        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(password, 8);

        // Check if email already exists
        db.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {
            if (error) {
                console.log(error);
                return res.render('register', {
                    message: 'An error occurred'
                });
            }
            if (results.length > 0) {
                return res.render('register', {
                    message: 'That email is already in use'
                });
            } else if (password !== passwordConfirm) {
                return res.render('register', {
                    message: 'Passwords do not match'
                });
            }

            // Insert the user into the database with the hashed password
            db.query('INSERT INTO users SET ?', { name, email, password: hashedPassword }, (error, results) => {
                if (error) {
                    console.log(error);
                    return res.render('register', {
                        message: 'An error occurred'
                    });
                }
                console.log(results);
                return res.render('register', {
                    message: 'User Registered'
                });
            });
        });
    } catch (error) {
        console.log(error);
        return res.render('register', {
            message: 'An error occurred'
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user from the database using email
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            if (error) {
                console.log(error);
                return res.render('login', {
                    message: 'An error occurred'
                });
            }

            if (results.length === 0) {
                return res.render('login', {
                    message: 'Invalid email or password'
                });
            }

            const user = results[0];

            // Compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.render('login', {
                    message: 'Invalid email or password'
                });
            }

            // Redirect to the home page or any other page upon successful login
            res.redirect('/');
        });
    } catch (error) {
        console.log(error);
        return res.render('login', {
            message: 'An error occurred'
        });
    }
};
exports.logout = (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.render('error', {
                message: 'An error occurred while logging out'
            });
        }
        // Redirect the user to the home page or any other desired page after logout
        res.redirect('/');
    });
};
