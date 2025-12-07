
// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const hbs = require('hbs');

// const app = express();
// const PORT = 3000;

// // MongoDB Connect
// mongoose.connect('mongodb://localhost:27017/loginDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // User Schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
// });
// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'templates'));

// // Routes
// app.get('/', (req, res) => {
//   res.render('login');
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username, password });
//     if (user) {
//       res.render('profile', { user });
//     } else {
//       res.render('login', { error: 'Invalid credentials!' });
//     }
//   } catch (err) {
//     res.send('Error: ' + err.message);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Import User model
const User = require('./models/User');
const { console } = require('inspector');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Handlebars setup
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: false,
  // If you want layouts, add layoutsDir here
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'templates'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple in-memory session simulation (for demo only)
let currentUser = null;

// Routes

// Login page
app.get('/', (req, res) => {
  res.render('login');
});

// Signup page
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Handle signup form submission
app.post('/signup', async (req, res) => {
  const { username, password, fullName, email } = req.body;
  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.send('Username already exists. Please choose another.');
    }

    const newUser = new User({ username, password, fullName, email });
    await newUser.save();
    res.redirect('/'); // Redirect to login after signup
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).send('Error during signup');
    
  }
});

// Handle login form submission
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      currentUser = user;  // simulate session login
      res.redirect('/profile');
    } else {
      res.send('Invalid username or password');
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Server error');
  }
});

// Profile page (only if logged in)
app.get('/profile', (req, res) => {
  if (!currentUser) {
    return res.redirect('/');
  }
  res.render('profile', { user: currentUser });
});

// Logout route (to clear currentUser)
app.get('/logout', (req, res) => {
  currentUser = null;
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// const path = require('path');
// const exphbs = require('express-handlebars');

// dotenv.config();


// console.log('MONGO_URI:', process.env.MONGO_URI);


// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Serve static files (e.g., CSS, images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Setup Handlebars as view engine
// app.engine('hbs', exphbs.engine({ 
//   extname: '.hbs', 
//   defaultLayout: 'layout', // Set layout file
//   layoutsDir: path.join(__dirname, 'views', 'layouts')
// }));
// app.set('view engine', 'hbs');

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.get('/', (req, res) => {
//   res.render('login'); // Render the login page
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Hardcoded check for now (replace with MongoDB check in future)
//   if (username === 'admin' && password === 'admin') {
//     res.send('Login successful!');
//   } else {
//     res.send('Invalid credentials!');
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
