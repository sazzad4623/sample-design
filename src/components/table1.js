import React, { Component } from "react";

export default class Table1 extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <tr>
            <th>社員番号</th>
            <th>000001</th>
            <th>氏名</th>
            <th>斉 藤 A子</th>
            <th>メール</th>
            <th>＊＊＊＊@＊＊.com</th>
            <th>面談官</th>
            <th>人事 〇〇 C郎</th>
          </tr>

          <tr>
            <th colSpan="4">STEP1</th>
            <th colSpan="4">STEP2</th>
          </tr>
          <tr>
            <td>アンケート実施</td>
            <td>1結果レポート</td>
            <td>面談日</td>
            <td>コメント入力</td>
            <td>アンケート実施</td>
            <td>結果レポート</td>
            <td>面談日</td>
            <td>コメント入力</td>{" "}
          </tr>
          <tr>
            <td>〔実施〕未実施</td>
            <td>〔表示〕未</td>
            <td>〔登録〕未登録</td>
            <td>〔入力・表示〕済</td>
            <td>〔実施〕済</td>
            <td>〔表示〕</td>
            <td>〔登録〕9月7日</td>
            <td>〔入力・表示〕済</td>{" "}
          </tr>
        </table>
      </div>
    );
  }
}
