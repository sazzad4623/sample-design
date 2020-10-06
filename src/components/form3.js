import React, { Component } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

export default class Form3 extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="border border-primary m-2">
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>評価結果レポート（PDF）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <div className="form-group">
                <label>フォルダ選択</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">
                  アップロード
                </button>
              </div>
            </Col>
            <Col className="border border-primary m-2">
              {" "}
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>評価結果レコード</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <div className="form-group">
                <label>フォルダ選択</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">
                  アップロード
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
