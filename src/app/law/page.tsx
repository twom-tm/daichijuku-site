import { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記｜大地塾",
    description: "大地塾の特定商取引法に基づく表記について。",
};

export default function Law() {
    return (
        <main>
            <section className="article-hero" style={{ textAlign: "center" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <h1 className="article-title fade-in is-visible" style={{ marginBottom: "16px" }}>特定商取引法に基づく表記</h1>
                    <p className="fade-in is-visible" style={{ color: "var(--color-accent)", letterSpacing: "0.15em", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                        COMMERCIAL LAW
                    </p>
                </div>
            </section>

            <section className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
                <div className="legal-document fade-in is-visible" style={{ maxWidth: "1000px" }}>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .beautiful-table {
                            width: 100%;
                            border-collapse: collapse;
                            font-size: 0.95rem;
                            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                            border-radius: 8px;
                            overflow: hidden;
                        }
                        .beautiful-table th, .beautiful-table td {
                            padding: 24px;
                            border-bottom: 1px solid rgba(15,28,46,0.05);
                            text-align: left;
                            vertical-align: top;
                        }
                        .beautiful-table th {
                            background-color: var(--color-white);
                            color: var(--color-navy);
                            font-weight: 700;
                            width: 30%;
                            white-space: nowrap;
                            border-right: 1px solid rgba(15,28,46,0.03);
                        }
                        .beautiful-table td {
                            color: var(--color-text);
                            line-height: 1.8;
                            background-color: var(--color-white);
                        }
                        .beautiful-table tr:last-child th, .beautiful-table tr:last-child td {
                            border-bottom: none;
                        }
                        @media (max-width: 768px) {
                            .beautiful-table, .beautiful-table tbody, .beautiful-table tr, .beautiful-table th, .beautiful-table td {
                                display: block;
                                width: 100%;
                            }
                            .beautiful-table th {
                                border-right: none;
                                border-bottom: none;
                                padding-bottom: 8px;
                                text-align: left;
                            }
                            .beautiful-table td {
                                padding-top: 0;
                            }
                        }
                    `}} />

                    <table className="beautiful-table">
                        <tbody>
                            <tr>
                                <th>販売事業者名</th>
                                <td>株式会社GentleNest</td>
                            </tr>
                            <tr>
                                <th>運営責任者名</th>
                                <td>我妻大地</td>
                            </tr>
                            <tr>
                                <th>所在地</th>
                                <td>〒165-0026 東京都中野区新井1-4-4 パサージュ306</td>
                            </tr>
                            <tr>
                                <th>電話番号</th>
                                <td>050-1725-6989</td>
                            </tr>
                            <tr>
                                <th>メールアドレス</th>
                                <td>info@gentlenest.co.jp</td>
                            </tr>
                            <tr>
                                <th>ホームページURL</th>
                                <td>https://daichijuku.com</td>
                            </tr>
                            <tr>
                                <th>販売価格</th>
                                <td>各講座ページに記載</td>
                            </tr>
                            <tr>
                                <th>商品代金以外の必要料金</th>
                                <td>振込手数料、インターネット接続料金はお客様のご負担となります。</td>
                            </tr>
                            <tr>
                                <th>お支払い方法</th>
                                <td>クレジットカード、銀行振込</td>
                            </tr>
                            <tr>
                                <th>お支払い時期</th>
                                <td>お申し込み後7日以内（または講座開始前まで）</td>
                            </tr>
                            <tr>
                                <th>商品の引渡時期</th>
                                <td>ご入金確認後、公式LINEにて講座情報を送付</td>
                            </tr>
                            <tr>
                                <th>返品・キャンセルについて</th>
                                <td>
                                    デジタル商品の特性上、原則キャンセル・返品はお受けしておりません。やむを得ない事情がある場合は個別対応いたします。
                                </td>
                            </tr>
                            <tr>
                                <th>表現および商品に関する注意書き</th>
                                <td>
                                    本サービスの効果には個人差があり、必ずしも成果や利益を保証するものではありません。投資判断は自己責任でお願いいたします。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
