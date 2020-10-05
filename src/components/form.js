import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";
export default class Form extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col className="formdesign" sm={4}>
              <form>
                <h6 style={{ textAlign: "center" }}>コメント入力</h6>
                <h6 style={{ textAlign: "center" }}>（面談後の気持ち）</h6>
                <h6 style={{ textAlign: "center" }}>
                  －－－－－－－－－－－－－
                </h6>
                <div className="form-group">
                  <h7>
                    面談終了後の記録として、感じたことを自由に入力してください。
                    ※上司はこのコメントはみれません。（人事のみ閲覧できます。）
                  </h7>
                  <h7>＜STEP1＞</h7>
                </div>
                <div className="form-group">
                  <label>アドバイス受けた内容</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="フリーコメントで入力"
                  />
                </div>
                <div className="form-group">
                  <label>気にかかること</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="フリーコメントで入力"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: 13 }}>
                  <Button>保存</Button>
                </div>
                <p style={{ textAlign: "center", marginTop: 13 }}>
                  <u> 入力時刻：2019/07/30 15:37</u>
                </p>
                <h7>＜STEP2＞</h7>
                <div className="form-group">
                  <label>アドバイス受けた内容</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="フリーコメントで入力"
                  />
                </div>
                <div className="form-group">
                  <label>気にかかること</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="フリーコメントで入力"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: 13 }}>
                  <Button>保存</Button>
                </div>
                <p style={{ textAlign: "center", marginTop: 13 }}>
                  <u> 入力時刻：2019/07/30 15:37</u>
                </p>
              </form>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
