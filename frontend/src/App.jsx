// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import Home from './pages/Home/Home'
import Players from './pages/Players/Players'
import Matches from './pages/Matches/Matches'
import Standings from './pages/Standings/Standing'
import News from './pages/News/News'
import SignIn from './pages/UserAuth/Signin'
import Register from './pages/UserAuth/Register'

const App = () => {
  return (
    <Router>
      <div>
        {/* Main AppBar with logo and all logos */}
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            {/* Logo on the left */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>

            {/* Sign In and Register buttons on the right */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button component={Link} to="/sign-in" sx={{ color: 'white' }}>Sign In</Button>
              <Button component={Link} to="/register" sx={{ color: 'white' }}>Register</Button>
            </Box>
          </Toolbar>
        </AppBar>


        {/* Navigation Bar */}
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button component={Link} to="/" sx={{ backgroundColor: 'black', color: 'white' }}>
              Home
            </Button>
            <Button component={Link} to="/players" sx={{ backgroundColor: 'black', color: 'white' }}>
              Players
            </Button>
            <Button component={Link} to="/matches" sx={{ backgroundColor: 'black', color: 'white' }}>
              Matches
            </Button>
            <Button component={Link} to="/standings" sx={{ backgroundColor: 'black', color: 'white' }}>
              Standings
            </Button>
            <Button component={Link} to="/news" sx={{ backgroundColor: 'black', color: 'white' }}>
              News
            </Button>

            </Box>
          </Toolbar>
        </AppBar>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/news" element={<News />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App





// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import {AppBar, Toolbar, Typography} from '@mui/material'
// import Home from './pages/Home/Home'
// import Players from './pages/Players/Players'
// import Matches from  './pages/Matches/Matches'
// import Standings from './pages/Standings/Standing'
// import News from './pages/News/News'

// const App = () => {
//   return (
//     <Router>
//       <div>
//       <AppBar position="static" sx={{backgroundColor:'black'}}>
//         <Toolbar>
//           <Typography variant="h6">LOGO</Typography>
//         </Toolbar>
//       </AppBar>

//       <AppBar position="static" sx={{backgroundColor:'black'}}>
//         <Toolbar>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/players">Players</Link>
//             <Link to="/matches">Matches</Link>
//             <Link to="/standings">Standings</Link>
//             <Link to="/news">News</Link>
//           </nav>
//         </Toolbar>
//       </AppBar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/players" element={<Players />} />
//           <Route path="/matches" element={<Matches />} />
//           <Route path="/standings" element={<Standings />} />
//           <Route path="/news" element={<News />} />
//         </Routes>
//       </div>
//   </Router>
//   )
// }

// export default App