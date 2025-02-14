```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="form" element={<ContactForm />} />
          {/*This route handles unmatched paths in /contact*/}
          <Route index element={<ContactDefault/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <Outlet/>; }
function ContactForm() { return <h1>Contact Form</h1>; }
function ContactDefault() { return <h1>Contact Default</h1>; }
export default App; 
```