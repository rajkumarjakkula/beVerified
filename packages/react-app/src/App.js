import { BrowserRouter } from 'react-router-dom';
import { Body, Container } from "./components";
import Navbar from "./components/Navbar";
import Routes from './Routes';
function App() {
  
  return (  
    <BrowserRouter>
        <Container>
           <Navbar></Navbar>
          <Body>
            <Routes />
          </Body>
        </Container>
    </BrowserRouter>
  );
}
export default App;
