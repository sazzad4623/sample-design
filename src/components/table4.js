import React, { Component } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

export default class Table4 extends Component {
  render() {
    return (
      <div>
        <p>－－－－－－－－－－－－－</p>
        <p>3. ID通知 初回</p>
        <p>－－－－－－－－－－－－－</p>
        <table className="table table-bordered m-2 w-50">
          <tr>
            <th>件名</th>
            <th>【サービス名】 ログインIDのお知らせ</th>
          </tr>
          <tr>
            <td>本文</td>
            <td>
              ＜ユーザー名＞ 様 <br />
              --------------------------------- <br />
              診断アンケート ログインIDのお知らせ <br />
              --------------------------------- <br />
              ログインID（メールアドレス）：
              <br />
              パスワード： 別メールにてお送りします <br />
              以下のURLからログインして、診断アンケートを実施してください。
              <br />
              ログインできない場合や受講方法についての不明点は、人事までお問合せください。
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
