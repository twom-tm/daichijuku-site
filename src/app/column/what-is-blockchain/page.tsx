import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ブロックチェーンとは｜大地塾コラム",
    description: "ブロックチェーン技術の仕組みを初心者向けにわかりやすく解説。なぜ改ざんが困難なのか、仮想通貨以外の活用事例も紹介します。",
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
                    <h1 className="article-title">ブロックチェーンとは</h1>
                </div>
            </section>

            <section className="container">
                <div className="article-content fade-in is-visible">
                    <h2>ブロックチェーンとは何か？</h2>
                    <p>
                        ブロックチェーンとは、取引データを「ブロック」と呼ばれる単位に格納し、それを時系列に沿って鎖（チェーン）のようにつなげて管理する技術です。ビットコインやイーサリアムなど、ほぼすべての仮想通貨の基盤技術として使われています。
                    </p>
                    <p>
                        「分散型台帳技術（DLT: Distributed Ledger Technology）」とも呼ばれ、データを特定のサーバーではなく、ネットワークに参加する多数のコンピュータで共同管理するのが最大の特徴です。
                    </p>

                    <h2>ブロックチェーンの3つの特徴</h2>

                    <h3>1. 改ざんが極めて困難</h3>
                    <p>
                        各ブロックには前のブロックの情報（ハッシュ値）が含まれており、1つのブロックを改ざんすると、それ以降のすべてのブロックを書き換える必要があります。さらに、その書き換えをネットワーク参加者の過半数以上のコンピュータで同時に行わなければならないため、事実上不可能とされています。
                    </p>

                    <h3>2. 中央管理者が不要</h3>
                    <p>
                        銀行のような中央機関が存在しなくても、ネットワーク参加者全員が取引記録を検証・承認する仕組みにより、信頼性を担保しています。これを「コンセンサスアルゴリズム（合意形成メカニズム）」と呼びます。
                    </p>

                    <h3>3. 透明性が高い</h3>
                    <p>
                        ブロックチェーン上のすべての取引はネットワーク参加者に公開されています。誰でも取引履歴を確認できる（ただし個人情報は暗号化されている）ため、不正が起きにくい構造になっています。
                    </p>

                    <h2>ブロックチェーンの仕組み（簡略版）</h2>
                    <ol>
                        <li>AさんがBさんに仮想通貨を送金する。</li>
                        <li>その取引データがネットワーク上に送信される。</li>
                        <li>ネットワーク上のコンピュータ（ノード）が取引を検証する。</li>
                        <li>検証が完了した取引データが「ブロック」にまとめられる。</li>
                        <li>既存のブロックチェーンに新しいブロックが追加される。</li>
                        <li>送金が確定し、Bさんに仮想通貨が届く。</li>
                    </ol>

                    <h2>仮想通貨以外のブロックチェーン活用例</h2>
                    <p>
                        ブロックチェーン技術は仮想通貨だけでなく、さまざまな分野で活用が進んでいます。
                    </p>
                    <ul>
                        <li><strong>サプライチェーン管理</strong>：食品や医薬品の流通履歴を透明化し、安全性を担保する。</li>
                        <li><strong>デジタルアート・NFT</strong>：デジタル作品の所有権や真正性を証明する。</li>
                        <li><strong>不動産登記</strong>：不動産の所有権移転をブロックチェーンで記録し、手続きを効率化する。</li>
                        <li><strong>選挙・投票</strong>：不正を防止した透明な投票システムを構築する。</li>
                        <li><strong>DeFi（分散型金融）</strong>：銀行を介さずに融資、取引、保険などの金融サービスを提供する。</li>
                    </ul>

                    <h2>まとめ</h2>
                    <p>
                        ブロックチェーンは、仮想通貨を支える基盤技術であるだけでなく、社会のさまざまな課題を解決する可能性を持つ革新的なテクノロジーです。仮想通貨を学ぶうえで、ブロックチェーンの仕組みを理解することは欠かせません。
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
