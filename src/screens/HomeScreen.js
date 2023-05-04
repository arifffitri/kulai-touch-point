import logo from "../logo.svg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HomeScreen() {
  return (
    <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center bg-image ">
      <Card style={{ width: "30rem" }} className="m-auto p-3 border-0 rounded-0">
        <Card.Body className="text-center ">
          <img src={logo} width="300" className="mb-4" alt="logo" />
          <h1 className="mb-4 font-weight-bold ">KULAI TOUCH POINT</h1>
          <p className="mb-4 font-weight-normal">PLATFORM SEMAKAN UNTUK PENGELUARAN YANG TERDAPAT DI KWSP</p>
          <Button variant="primary" className="font-weight-bold" href="/jenispengeluaran">
            MULA MENYEMAK
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeScreen;
