import React, { Component } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
// import "./login.css";
export default class Form2 extends Component {
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
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <Row>
                <Col>
                  {" "}
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>実施年</label>
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

              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>出力期間</label>
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
                    <label>～</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="フリーコメントで入力"
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>アンケート種別</p>
                </Col>
                <Col>
                  <diV className="border border-primary m-2">
                    <Row>
                      <Col>
                        {" "}
                        <div className="checkbox m-1">
                          <label>
                            <input type="checkbox" value="" />
                            ストレ
                          </label>
                        </div>
                      </Col>
                      <Col>
                        <div className="checkbox m-1">
                          <label>
                            <input type="checkbox" value="" />
                            心理ア
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </diV>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="m-4">
                    <button className="btn btn-outline-primary">保存</button>
                  </div>
                </Col>
                <Col>
                  <div className="m-4">
                    <button className="btn btn-outline-primary">保存</button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="border border-primary m-2">
              {" "}
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <Row>
                <Col>
                  {" "}
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>実施年</label>
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>出力期間</label>
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
                    <label>～</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="フリーコメントで入力"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>アンケート種別</p>
                </Col>
                <Col>
                  <diV className="border border-primary m-2">
                    <Row>
                      <Col>
                        {" "}
                        <div className="checkbox m-1">
                          <label>
                            <input type="checkbox" value="" />
                            ストレ
                          </label>
                        </div>
                      </Col>
                      <Col>
                        <div className="checkbox m-1">
                          <label>
                            <input type="checkbox" value="" />
                            心理ア
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </diV>
                </Col>
              </Row>
              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">保存</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="border border-primary m-2">
              {" "}
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <Row>
                <Col>
                  {" "}
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>実施年</label>
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>出力期間</label>
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
                    <label>～</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="フリーコメントで入力"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>アンケート種別</p>
                </Col>
                <Col>
                  <diV className="border border-primary m-2">
                    <Col>
                      {" "}
                      <div className="checkbox m-1">
                        <label>
                          <input type="checkbox" value="" />
                          ストレ
                        </label>
                      </div>
                    </Col>
                  </diV>
                </Col>
              </Row>
              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">保存</button>
              </div>
            </Col>
            <Col className="border border-primary m-2">
              {" "}
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <Row>
                <Col>
                  {" "}
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
              <Row>
                <Col>
                  {" "}
                  <div className="form-group">
                    <label>実施年</label>
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
              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">保存</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col className="border border-primary m-2">
              <div className="m-2">
                {" "}
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>{" "}
              </div>
              <Row>
                <Col>
                  {" "}
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

              <div
                className="m-4"
                style={{ textAlign: "center", marginTop: 13 }}
              >
                <button className="btn btn-outline-primary">保存</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
