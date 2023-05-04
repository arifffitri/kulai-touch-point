import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LanguageRadioButton from "./components/LanguageRadioButton";
import HomeScreen from "./screens/HomeScreen";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*  Navigation Bar */}
        <header className="App-header">
          <Navbar bg="light" expand="lg" fixed="top" className="shadow">
            <Navbar.Brand href="/">
              <img src={logo} width="90" className="d-inline-block align-top ms-4 " alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/jenispengeluaran">JENIS PENGELUARAN</Nav.Link>
                <Nav.Link href="/persaraan">PERSARAAN</Nav.Link>
                <NavDropdown title="PENGELUARAN PENUH" id="basic-nav-dropdown" href="#home">
                  <NavDropdown.Item href="/hilangupaya">HILANG UPAYA</NavDropdown.Item>
                  <NavDropdown.Item href="/kematian">KEMATIAN</NavDropdown.Item>
                  <NavDropdown.Item href="/pekerjaberpencen">PEKERJA BERPENCEN DAN PESARA PILIHAN</NavDropdown.Item>
                  <NavDropdown.Item href="/meninggalkannegara">MENINGGALKAN NEGARA</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="PENGELUARAN SEBAHAGIAN" id="basic-nav-dropdown" href="#home">
                  <NavDropdown.Item href="/pendidikan">PENDIDIKAN</NavDropdown.Item>
                  <NavDropdown.Item href="/kesihatan">KESIHATAN</NavDropdown.Item>
                  <NavDropdown.Item href="/belirumah">BELI RUMAH</NavDropdown.Item>
                  <NavDropdown.Item href="/binarumah">BINA RUMAH</NavDropdown.Item>
                  <NavDropdown.Item href="/haji">HAJI</NavDropdown.Item>
                  <NavDropdown.Item href="/1juta">SIMPANAN MELEBIHI 1 JUTA</NavDropdown.Item>
                  <NavDropdown.Item href="/ansuranrumah">ANSURAN BULANAN RUMAH</NavDropdown.Item>
                  <NavDropdown.Item href="/bakipinjamanrumah">MENGURANGKAN/MENYELESAIKAN BAKI PINJAMAN RUMAH</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <LanguageRadioButton />
            </Navbar.Collapse>
          </Navbar>
        </header>
        {/*  End of Navigation Bar */}
        <body>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </body>
        {/* Footer */}
        <footer className="p-5 text-center">
          <h5>SALURAN LAIN UNTUK MENGHUBUNGI KAMI</h5>
          <h6 className="mb-3">TELEFON: 03-8922 6000 FAKS: 03-8922 6222</h6>
          <p>
            Masa Operasi: Isnin - Jumaat 8.00 Pagi ke 5.00 Petang
            <br />
            Kecuali pada Sabtu, Ahad, Hari Kelepasan AM Persekutuan dan Hari Kelepasan Selangor
          </p>
        </footer>
        {/* End of Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
