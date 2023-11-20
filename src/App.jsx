//import component Bootstrap React
import { Container, Nav, Navbar } from 'react-bootstrap';

//import react router dom
import { Link, Route, Routes } from 'react-router-dom';

//import component Home
import Home from './pages/Home';

//import component Post Index
import PostIndex from './pages/posts/Index';

//import component Post Create
import PostCreate from './pages/posts/Create';

//import component Post Edit
import PostEdit from './pages/posts/Edit';

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/posts" className="nav-link">
                POSTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<PostIndex />} />
        <Route exact path="/posts/create" element={<PostCreate />} />
        <Route exact path="/posts/edit/:id" element={<PostEdit />} />
      </Routes>
    </div>
  );
}

export default App;
