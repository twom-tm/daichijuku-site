"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string | number;
    title: string;
    category: "活動報告" | "お知らせ" | string;
    date: string;
    image?: string;
    excerpt?: string;
    content: string;
}

export default function Column() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filter, setFilter] = useState<"all" | "column" | "activity">("all");
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("daichijuku_blog_posts");
            if (stored) {
                const parsed = JSON.parse(stored) as BlogPost[];
                const sorted = parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setPosts(sorted);
            }
        } catch (e) {
            console.error("Failed to parse blog posts", e);
        }
    }, []);

    const closeModal = () => {
        setSelectedPost(null);
        document.body.style.overflow = "";
    };

    const openModal = (post: BlogPost) => {
        setSelectedPost(post);
        document.body.style.overflow = "hidden";
    };

    const handleFilter = (type: "all" | "column" | "activity") => {
        setFilter(type);
    };

    // Static SEO friendly posts
    const staticPosts = [
        {
            id: "static-1",
            title: "初心者向け：暗号資産の始め方と注意点",
            category: "コラム",
            date: "2026.03.05",
            type: "column",
            excerpt: "これから暗号資産を始めたい方向けに、口座の開設から最初の購入方法、注意すべきセキュリティ設定までを分かりやすく解説します。",
            image: "/img/thumb_beginner.png",
            link: "/column/beginner"
        },
        {
            id: "static-2",
            title: "仮想通貨とは？初心者でもわかる仕組み",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨（暗号資産）の基本的な仕組みを、初心者にもわかりやすく解説。ビットコインやイーサリアムなど、デジタル通貨がどのように動いているのかを学びましょう。",
            image: "/img/thumb_whatscrypto.png",
            link: "/column/what-is-crypto"
        },
        {
            id: "static-3",
            title: "仮想通貨の始め方【完全ガイド】",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨を始めたい初心者向けの完全ガイド。口座開設から最初の購入、セキュリティ対策まで、ステップバイステップで解説します。",
            image: "/img/thumb_startcrypto.png",
            link: "/column/how-to-start-crypto"
        },
        {
            id: "static-4",
            title: "ビットコインとは？初心者向け解説",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "ビットコイン（BTC）の基本的な仕組み、誕生の背景、なぜ価値があるのかを初心者向けにわかりやすく解説します。",
            image: "/img/thumb_whatisbitcoin.png",
            link: "/column/what-is-bitcoin"
        },
        {
            id: "static-5",
            title: "仮想通貨の買い方を初心者向けに解説",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨を初めて購入する方向けに、取引所での買い方を丁寧に解説。販売所と取引所の違いも紹介します。",
            image: "/img/thumb_howtobuycrypto.png",
            link: "/column/how-to-buy-crypto"
        },
        {
            id: "static-6",
            title: "仮想通貨の勉強方法【最短ルート】",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨を効率的に学ぶための最短ルートを解説。書籍、動画、実践など、初心者が最速で知識を身につける方法を紹介します。",
            image: "/img/thumb_howtostudy.png",
            link: "/column/how-to-study-crypto"
        },
        {
            id: "static-7",
            title: "仮想通貨の基本用語まとめ",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨で必ず出てくる基本用語を初心者向けにわかりやすく解説。ブロックチェーン、ウォレット、マイニングなどをまとめました。",
            image: "/img/thumb_cryptoglossary.png",
            link: "/column/crypto-glossary"
        },
        {
            id: "static-8",
            title: "仮想通貨のメリットとデメリット",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "仮想通貨のメリットとデメリットを初心者向けに公平に解説。投資を始める前に知っておくべきリスクと可能性をまとめます。",
            image: "/img/thumb_proscons.png",
            link: "/column/crypto-pros-cons"
        },
        {
            id: "static-9",
            title: "暗号資産と仮想通貨の違い",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "「暗号資産」と「仮想通貨」の違いをわかりやすく解説。名称変更の背景や法律上の定義、正しい使い分けについて説明します。",
            image: "/img/thumb_cryptovsvirtual.png",
            link: "/column/crypto-vs-virtual-currency"
        },
        {
            id: "static-10",
            title: "ブロックチェーンとは",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "ブロックチェーン技術の仕組みを初心者向けにわかりやすく解説。なぜ改ざんが困難なのか、仮想通貨以外の活用事例も紹介します。",
            image: "/img/thumb_whatisblockchain.png",
            link: "/column/what-is-blockchain"
        },
        {
            id: "static-11",
            title: "仮想通貨はなぜ価値があるのか",
            category: "コラム",
            date: "2026.03.07",
            type: "column",
            excerpt: "形のない仮想通貨にはなぜ価値があるのか？需要と供給、希少性、ユーティリティなど、価値の根拠を初心者向けに解説します。",
            image: "/img/thumb_whyvalue.png",
            link: "/column/why-crypto-has-value"
        },
    ];

    const visibleStaticPosts = staticPosts.filter(p => filter === "all" || filter === p.type);
    const visibleDynamicPosts = posts.filter(p => filter === "all" || filter === "activity"); // We assume localStorage posts are mostly activity or notices
    const hasPosts = visibleStaticPosts.length > 0 || visibleDynamicPosts.length > 0;

    return (
        <main>
            <section className="blog-hero">
                <div className="container fade-in is-visible">
                    <p className="section-label">News</p>
                    <h1 className="section-title">ニュース</h1>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        暗号資産の基礎から実践的な市場分析まで、レベルに合わせて学べるコラムをお届けします。
                    </p>

                    <div className="category-filter">
                        <button className={`category-btn ${filter === "all" ? "active" : ""}`} onClick={() => handleFilter("all")}>すべて</button>
                        <button className={`category-btn ${filter === "column" ? "active" : ""}`} onClick={() => handleFilter("column")}>コラム</button>
                        <button className={`category-btn ${filter === "activity" ? "active" : ""}`} onClick={() => handleFilter("activity")}>活動報告</button>
                    </div>
                </div>
            </section>

            <section className="section--white">
                <div className="container">
                    <div className="blog-grid" id="blogGrid">

                        {visibleStaticPosts.map(post => (
                            <Link href={post.link} key={post.id} className="blog-card fade-in is-visible" data-category="column" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="blog-card-image">
                                    <Image src={post.image} alt={post.title} width={400} height={200} style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-date">{post.date}</span>
                                        <span className="blog-card-category">{post.category}</span>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                </div>
                            </Link>
                        ))}

                        {visibleDynamicPosts.map(post => (
                            <div
                                key={post.id}
                                className="blog-card fade-in is-visible"
                                data-category="activity"
                                style={{ cursor: "pointer" }}
                                onClick={() => openModal(post)}
                            >
                                <div className="blog-card-image">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} />
                                    ) : (
                                        <img src="/img/placeholder.jpg" alt={post.title} style={{ opacity: 0.2 }} />
                                    )}
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-date">{post.date}</span>
                                        <span className="blog-card-category">{post.category || "活動報告"}</span>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt || (post.content ? String(post.content).replace(/<[^>]*>/g, "").substring(0, 120) + "..." : "")}</p>
                                </div>
                            </div>
                        ))}

                        {!hasPosts && (
                            <div className="blog-empty" style={{ textAlign: "center", padding: "40px", gridColumn: "1 / -1" }}>
                                <h3>記事がありません</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Detail Modal */}
            <div className={`blog-modal-overlay ${selectedPost ? "is-open" : ""}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
                <div className="blog-modal">
                    <button className="blog-modal-close" onClick={closeModal} aria-label="閉じる">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {selectedPost && (
                        <div id="blogModalContent">
                            <h2>{selectedPost.title}</h2>
                            <div className="blog-card-meta">
                                <span className="blog-card-date">{selectedPost.date}</span>
                                <span className="blog-card-category">{selectedPost.category || "活動報告"}</span>
                            </div>
                            {selectedPost.image && (
                                <img src={selectedPost.image} alt={selectedPost.title} style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "24px" }} />
                            )}
                            <div className="blog-modal-content" style={{ lineHeight: 2 }} dangerouslySetInnerHTML={{ __html: selectedPost.content || "" }} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
