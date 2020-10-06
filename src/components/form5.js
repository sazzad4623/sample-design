import React, { Component } from "react";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";

export default class Form5 extends Component {
  render() {
    return (
      <Container>
        <div className="border border-primary m-2">
          <p style={{ textAlign: "center" }}>【サービス名】</p>
          <div className="d-flex justify-content-center">
            <div className="border border-primary">
              {" "}
              <p className="m-2" style={{ textAlign: "center" }}>
                お問合せフォーム
              </p>
            </div>
          </div>
          <hr className="m-4"></hr>

          <Row className="m-2">
            <Col>
              <div className="form-group">
                <label>会社ID</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <div className="form-group">
                <label>会社名</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
            </Col>
          </Row>
          <div className="ml-4">
            <p>※会社IDがご不明な場合は空欄で結構です。</p>
          </div>
          <Row className="m-2">
            <Col>
              <div className="form-group">
                <label>お名前</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <div className="form-group">
                <label>メールアドレス</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <div className="form-group">
                <label>電話番号</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
            </Col>
          </Row>
          <hr className="ml-4 mr-4"></hr>
          <div className="m-4">
            <div className="form-group">
              <label>ご用件</label>
              <input
                type="password"
                className="form-control"
                placeholder="フリーコメントで入力"
              />
            </div>
          </div>

          <hr className="ml-4 mr-4"></hr>
          <Row className="m-2">
            <Col>
              {" "}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>メッセージ</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-4" style={{ textAlign: "center", marginTop: 13 }}>
            <button className="btn btn-outline-primary">送信</button>
          </div>
          <div style={{ textAlign: "center", color: "#1E90FF" }}>
            <p>
              <u>よくあるお問合せはこちら</u>
            </p>
          </div>
        </div>
      </Container>
    );
  }
}
