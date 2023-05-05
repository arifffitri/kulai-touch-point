import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function JenisPengeluaranScreen() {
  return (
    <div>
      <div>
        <div style={{ height: "30vh" }} className="d-flex flex-column justify-content-center align-items-center bg-light p-5 text-center">
          <h1 className="mb-4 font-weight-bold">JENIS PENGELUARAN </h1>
          <p className="mb-4 font-weight-normal">
            Terdapat 2 jenis pengeluaran yang boleh dilakukan oleh ahli iaitu <strong>Pengeluaran Penuh</strong> dan <strong>Pengeluaran Sebahagian</strong>
          </p>
        </div>
        <Row>
          <Col className="bg-hero-penuh d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light p-5 text-center" style={{ width: "700px" }}>
              <h1 className="mb-4 font-weight-bold">PENGELUARAN PENUH </h1>
              <p className="mb-4 font-weight-normal">Pengeluaran daripada semua Akaun KWSP</p>
              <Button variant="primary" className="px-4 font-weight-bold" href="/pengeluaranpenuh">
                PERGI
              </Button>
            </div>
          </Col>
          <Col className="bg-hero-sebahagian d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light p-5 text-center" style={{ width: "700px" }}>
              <h1 className="mb-4 font-weight-bold">PENGELUARAN SEBAHAGIAN </h1>
              <p className="mb-4 font-weight-normal">Pengeluaran daripada Akaun 2 KWSP untuk sebab-sebab tertentu</p>
              <Button variant="primary" className="px-4 font-weight-bold" href="/pengeluaransebahagian">
                PERGI
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JenisPengeluaranScreen;
