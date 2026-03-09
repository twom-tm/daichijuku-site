import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "仮想通貨の基本用語まとめ｜大地塾コラム",
    description: "仮想通貨で必ず出てくる基本用語を初心者向けにわかりやすく解説。ブロックチェーン、ウォレット、マイニングなど、押さえておくべきキーワードをまとめました。",
};

export default function ArticleContent() {
    return (
        <main>
            <section className="article-hero fade-in is-visible">
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="article-meta">
                        <span className="article-date">2026.03.07</span>
                        <span className="article-category">コラム</span>
                    </div>
                    <h1 className="article-title">仮想通貨の基本用語まとめ</h1>
                </div>
            </section>

            <section className="container">
                <div className="article-content fade-in is-visible">
                    <h2>はじめに</h2>
                    <p>
                        仮想通貨の世界には独自の専門用語が数多く存在します。ニュースや解説記事を読む際に用語が分からないと、内容を正しく理解することができません。この記事では、初心者が最初に覚えるべき基本用語をジャンル別にまとめて解説します。
                    </p>

                    <h2>基本の用語</h2>

                    <h3>暗号資産（仮想通貨）</h3>
                    <p>インターネット上で取引されるデジタル通貨の総称。日本では2020年の法改正により「暗号資産」が正式名称となりました。</p>

                    <h3>ブロックチェーン</h3>
                    <p>取引データを「ブロック」にまとめて鎖のようにつなげていく分散型台帳技術。改ざんが極めて困難で、仮想通貨を支える核となる技術です。</p>

                    <h3>ビットコイン（BTC）</h3>
                    <p>2009年に運用開始された世界初の仮想通貨。時価総額が最も大きく、仮想通貨市場の基軸通貨的な存在です。</p>

                    <h3>アルトコイン</h3>
                    <p>ビットコイン以外のすべての仮想通貨の総称。イーサリアム（ETH）、リップル（XRP）、ソラナ（SOL）などが代表的です。</p>

                    <h2>取引に関する用語</h2>

                    <h3>取引所</h3>
                    <p>仮想通貨を売買できるサービス。日本では金融庁に登録された「暗号資産交換業者」を利用します。</p>

                    <h3>販売所</h3>
                    <p>取引所内の機能の一つ。業者が提示する価格で即座に売買でき、初心者向きですが、スプレッド（実質手数料）が大きめです。</p>

                    <h3>スプレッド</h3>
                    <p>購入価格と売却価格の差額のこと。販売所を利用する際の実質的な手数料として機能します。</p>

                    <h3>指値注文 / 成行注文</h3>
                    <p><strong>指値注文</strong>は希望する価格を指定して注文する方式。<strong>成行注文</strong>は現在の市場価格で即座に約定する方式です。</p>

                    <h2>技術に関する用語</h2>

                    <h3>マイニング（採掘）</h3>
                    <p>ブロックチェーン上で取引を検証し、新しいブロックを追加する作業。作業を行ったマイナーには報酬が支払われます。</p>

                    <h3>ウォレット</h3>
                    <p>仮想通貨を保管・管理するための電子財布。「ホットウォレット」（オンライン型）と「コールドウォレット」（オフライン型）があります。</p>

                    <h3>秘密鍵 / 公開鍵</h3>
                    <p><strong>秘密鍵</strong>はウォレットの所有者だけが持つ暗号データ。<strong>公開鍵</strong>は送金先アドレスの元になるデータです。秘密鍵を他人に教えてはいけません。</p>

                    <h3>スマートコントラクト</h3>
                    <p>ブロックチェーン上で動作するプログラム。条件が満たされると自動的に契約が実行されます。イーサリアムが代表的です。</p>

                    <h2>投資に関する用語</h2>

                    <h3>ガチホ（HODL）</h3>
                    <p>長期間にわたって仮想通貨を保有し続ける投資スタイル。短期的な値動きに左右されず、将来的な値上がりを期待する戦略です。</p>

                    <h3>ボラティリティ</h3>
                    <p>価格の変動幅のこと。ボラティリティが高い＝価格が大きく動く＝リスクもリターンも大きいことを意味します。</p>

                    <h3>時価総額</h3>
                    <p>「通貨の現在価格 × 発行枚数」で計算される、その仮想通貨の市場規模を示す指標です。</p>

                    <h2>まとめ</h2>
                    <p>
                        仮想通貨の基本用語を理解することで、ニュースや記事の内容がぐっと理解しやすくなります。すべてを一度に覚える必要はありません。気になった用語をこのページに戻って確認しながら、少しずつ知識を広げていきましょう。
                    </p>


                    
                                                                                                    <div className="article-conclusion">
                        <div className="article-conclusion-text">
                            <h2 className="article-conclusion-title">
                                情報に振り回される側から、<br />理解する側へ。
                            </h2>
                            <p>
                                暗号資産の世界で資産を守り育てるためには<br />
                                <span className="highlight-keyword">「正しい知識」</span>が不可欠です。
                            </p>
                            <p>
                                大地塾では初心者からでも体系的に学び、<br />
                                自立して判断できる環境をご用意しています。
                            </p>
                        </div>
                        <Link href="https://line.me/R/ti/p/@817jyxon" target="_blank" className="article-cta-card">
                            <div className="article-cta-card-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                            <h3>公式LINE</h3>
                            <p>無料相談・限定情報はこちら</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
