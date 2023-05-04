import React from "react";
import { Col, Row } from "react-bootstrap";

function JenisPengeluaranScreen() {
  return (
    <div>
      <div>
        <div style={{ height: "30vh" }} className="d-flex flex-column justify-content-center align-items-center bg-light p-5 text-center">
          <h1>JENIS PENGELUARAN </h1>
          <p>
            Terdapat 2 jenis pengeluaran yang boleh dilakukan oleh ahli iaitu <strong>Pengeluaran Penuh</strong> dan <strong>Pengeluaran Sebahagian</strong>
          </p>
        </div>
        <Row>
          <Col className="bg-hero-penuh d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light p-5 text-center" style={{ width: "700px" }}>
              <h1>PENGELUARAN PENUH </h1>
              <p>Pengeluaran daripada semua Akaun KWSP</p>
            </div>
          </Col>
          <Col className="bg-hero-sebahagian d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light p-5 text-center" style={{ width: "700px" }}>
              <h1>PENGELUARAN SEBAHAGIAN </h1>
              <p>Pengeluaran daripada Akaun 2 KWSP untuk sebab-sebab tertentu</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JenisPengeluaranScreen;
