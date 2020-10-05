import React, { Component } from "react";
import Table1 from "./table1";
import "./style.css";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <h6>実施時期 2019年8月</h6>
        <div className="border border-primary">
          <p>
            <u>＜人事からのメッセージ＞</u>
          </p>
          <p>
            今年度、第1回目のアンケート実施期間がスタートしました。
            日頃現場で頑張って働いてくれている外国人従業員とコミュニケーションを取ることができる大切な期間ですので、対応をお願いいたします。
          </p>
        </div>
        <div className="mt-2">
          <Table1 />
        </div>
        <div>
          <hr className="solid"></hr>
        </div>
        <div>
          <p>
            【外国従業員 アンケート実施進捗】
            ※面談官が担当するアンケート実施者が表示されています。
          </p>
          <table className="table table-bordered">
            <tr>
              <th rowSpan="2">所属部署</th>
              <th rowSpan="2">氏名</th>
              <th rowSpan="2">メールアドレスコピー</th>
              <th colSpan="4">STEP1</th>
              <th colSpan="4">STEP2</th>
            </tr>
            <tr>
              <td>アン ケート実施</td>
              <td>結果レポート</td>
              <td>面談日</td>
              <td>面談結果入力</td>
              <td>アン ケート実施</td>
              <td>結果レポート</td>
              <td>面談日</td>
              <td>面談結果入力</td>
            </tr>
            <tr>
              <td>営業部</td>
              <td>斉藤 A子</td>
              <td>〔コピー〕</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={true} />月
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" />日
                  </label>
                </div>
              </td>
              <td>〔入力・表示〕 済</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>〔入力〕未</td>
              <td>〔入力・表示〕 済</td>
            </tr>
            <tr>
              <td>営業部</td>
              <td>斉藤 A子</td>
              <td>〔コピー〕</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={true} />月
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" />日
                  </label>
                </div>
              </td>
              <td>〔入力・表示〕 済</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>〔入力〕未</td>
              <td>〔入力・表示〕 済</td>
            </tr>
            <tr>
              <td>営業部</td>
              <td>斉藤 A子</td>
              <td>〔コピー〕</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={true} />月
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" />日
                  </label>
                </div>
              </td>
              <td>〔入力・表示〕 済</td>
              <td>済</td>
              <td>〔表示〕済</td>
              <td>〔入力〕未</td>
              <td>〔入力・表示〕 済</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
