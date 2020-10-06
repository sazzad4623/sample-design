import React, { Component } from "react";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";

export default class Form4 extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <hr></hr>
          </div>
          <Row>
            <Col>
              {" "}
              <div className="form-group">
                <label>フォルダ選択</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="フリーコメントで入力"
                />
              </div>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>フォルダ選択</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyItems: "flex-end",
                  marginTop: "120px",
                  marginLeft: "30px",
                }}
              >
                <button className="btn btn-outline-primary">
                  アップロード
                </button>
              </div>
            </Col>
          </Row>
          <div>
            <hr></hr>
          </div>
        </Container>
      </div>
    );
  }
}
