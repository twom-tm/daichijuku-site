"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./admin.css"; // Ensure dedicated scoping

interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    content: string;
    status: "draft" | "published";
    updatedAt: string;
}

const BLOG_KEY = "daichijuku_blog_posts";

export default function AdminDashboard() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [currentPostId, setCurrentPostId] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [toast, setToast] = useState<{ msg: string; show: boolean }>({ msg: "", show: false });

    // Form fields
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("活動報告");
    const [excerpt, setExcerpt] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const contentRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        loadPostsFromStorage();
        setDate(new Date().toISOString().split("T")[0]);
    }, []);

    const loadPostsFromStorage = () => {
        try {
            const stored = localStorage.getItem(BLOG_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as BlogPost[];
                setPosts(parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
            }
        } catch (e) {
            console.error(e);
        }
    };

    const savePostsToStorage = (newPosts: BlogPost[]) => {
        try {
            localStorage.setItem(BLOG_KEY, JSON.stringify(newPosts));
            setPosts(newPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        } catch (e: any) {
            if (e.name === "QuotaExceededError") {
                alert("ブラウザの保存容量（約5MB）を超過しました。不要な記事を削除するか、画像のサイズを小さくしてください。");
            } else {
                alert("保存に失敗しました。");
            }
        }
    };

    const showToast = (msg: string) => {
        setToast({ msg, show: true });
        setTimeout(() => setToast({ msg, show: false }), 2500);
    };

    const genId = () => "post_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);

    const handleNewPost = () => {
        setIsCreating(true);
        setCurrentPostId(null);
        setTitle("");
        setDate(new Date().toISOString().split("T")[0]);
        setCategory("活動報告");
        setExcerpt("");
        setImage("");
        setContent("");
    };

    const handleLoadPost = (id: string) => {
        const post = posts.find(p => p.id === id);
        if (post) {
            setIsCreating(false);
            setCurrentPostId(post.id);
            setTitle(post.title || "");
            setDate(post.date || new Date().toISOString().split("T")[0]);
            setCategory(post.category || "活動報告");
            setExcerpt(post.excerpt || "");
            setImage(post.image || "");
            setContent(post.content || "");
        }
    };

    const handleSavePost = (status: "draft" | "published") => {
        if (!title.trim()) {
            showToast("タイトルを入力してください");
            return;
        }

        const data: BlogPost = {
            id: currentPostId || genId(),
            title: title.trim(),
            date: date || new Date().toISOString().split("T")[0],
            category,
            excerpt: excerpt.trim(),
            image: image.trim(),
            content,
            status,
            updatedAt: new Date().toISOString(),
        };

        const newPosts = [...posts];
        if (currentPostId) {
            const idx = newPosts.findIndex(p => p.id === currentPostId);
            if (idx !== -1) newPosts[idx] = data;
        } else {
            setCurrentPostId(data.id);
            newPosts.push(data);
        }

        savePostsToStorage(newPosts);
        setIsCreating(false);
        showToast(status === "published" ? "記事を公開しました" : "下書きを保存しました");
    };

    const handleDeletePost = () => {
        if (!currentPostId || !window.confirm("この記事を削除しますか？")) return;
        const newPosts = posts.filter(p => p.id !== currentPostId);
        savePostsToStorage(newPosts);
        setCurrentPostId(null);
        setIsCreating(false);
        showToast("記事を削除しました");
    };

    // Image Upload helper
    const resizeImageAndGetBase64 = (file: File, maxWidth: number, callback: (b64: string) => void) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (!e.target?.result) return;
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                if (ctx) ctx.drawImage(img, 0, 0, width, height);

                const format = file.type === "image/png" ? "image/png" : "image/jpeg";
                const quality = format === "image/jpeg" ? 0.7 : 0.8;
                callback(canvas.toDataURL(format, quality));
            };
            img.src = e.target.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        showToast("画像を圧縮中...");
        resizeImageAndGetBase64(e.target.files[0], 800, (base64) => {
            setImage(base64);
            showToast("サムネイルの準備が完了しました");
        });
        e.target.value = "";
    };

    const handleContentImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        showToast("画像を圧縮中...");
        resizeImageAndGetBase64(e.target.files[0], 800, (base64) => {
            const ta = contentRef.current;
            if (!ta) return;
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            const imgTag = `\n<img src="${base64}" alt="アップロード画像" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;">\n`;

            setContent(prev => prev.substring(0, start) + imgTag + prev.substring(end));
            showToast("画像を本文に挿入しました");

            setTimeout(() => {
                ta.focus();
                ta.setSelectionRange(start + imgTag.length, start + imgTag.length);
            }, 0);
        });
        e.target.value = "";
    };

    // Toolbar actions
    const insertTag = (tag: string) => {
        const ta = contentRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const selected = content.substring(start, end);
        const before = content.substring(0, start);
        const after = content.substring(end);

        if (tag === "ul") {
            setContent(before + "<ul>\n  <li>" + (selected || "リスト項目") + "</li>\n</ul>" + after);
        } else {
            setContent(before + "<" + tag + ">" + (selected || "") + "</" + tag + ">" + after);
        }
        ta.focus();
    };

    const insertBr = () => {
        const ta = contentRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        setContent(content.substring(0, start) + "<br>" + content.substring(start));
        ta.focus();
    };

    const insertLink = () => {
        const url = window.prompt("リンクURL:");
        if (!url) return;
        const text = window.prompt("リンクテキスト:", url);
        const ta = contentRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        setContent(content.substring(0, start) + `<a href="${url}" target="_blank">${text || url}</a>` + content.substring(start));
        ta.focus();
    };

    return (
        <div className="admin-container">
            {/* Header */}
            <header className="admin-header">
                <h1>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    大地塾 管理画面 <span>活動報告管理</span>
                </h1>
                <div className="admin-header-links">
                    <Link href="/">← サイトを見る</Link>
                    <Link href="/column">ニュースページ</Link>
                </div>
            </header>

            <div className="admin-body">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <div className="sidebar-header">
                        <div>
                            <div className="sidebar-logo">大地塾</div>
                            <div style={{ fontSize: "0.8rem", color: "#a0aec0", marginTop: "4px" }}>活動報告管理システム</div>
                        </div>
                        <button className="btn-new" onClick={handleNewPost}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            新規作成
                        </button>
                    </div>
                    <div className="post-list">
                        {posts.length === 0 ? (
                            <div className="no-posts">記事がありません</div>
                        ) : (
                            posts.map(p => (
                                <div key={p.id} className={`post-item ${p.id === currentPostId ? "is-active" : ""}`} onClick={() => handleLoadPost(p.id)}>
                                    <div className="post-item-title">{p.title || "（無題）"}</div>
                                    <div className="post-item-meta">
                                        <span>{p.date}</span>
                                        <span className={`post-item-status post-item-status--${p.status}`}>
                                            {p.status === "published" ? "公開中" : "下書き"}
                                        </span>
                                        <span>{p.category || ""}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </aside>

                {/* Editor */}
                <div className="admin-editor">
                    {currentPostId === null && !isCreating ? (
                        <div className="editor-empty">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            <p style={{ textAlign: "center" }}>左のサイドバーから記事を選択、<br />または「新規作成」をクリックしてください。</p>
                        </div>
                    ) : (
                        <div className="editor-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input form-input--title"
                                    placeholder="記事タイトルを入力..."
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">日付</label>
                                    <input type="date" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">カテゴリ</label>
                                    <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
                                        <option value="活動報告">活動報告</option>
                                        <option value="お知らせ">お知らせ</option>
                                        <option value="コラム">コラム</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">概要（記事一覧に表示）</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="記事の概要を一行で..."
                                    value={excerpt}
                                    onChange={e => setExcerpt(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">サムネイル画像・アップロード（任意）</label>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="https://example.com/image.jpg または画像をアップロード"
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                    />
                                    <label className="btn-new" style={{ cursor: "pointer", padding: "10px 14px", margin: 0, whiteSpace: "nowrap" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1="12" y1="3" x2="12" y2="15" />
                                        </svg>
                                        アップロード
                                        <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleThumbnailUpload} />
                                    </label>
                                </div>
                                <p className="form-hint">URLを入力するか、画像をアップロードしてください（自動的に圧縮保存されます）。空欄の場合はプレースホルダーが表示されます。</p>
                            </div>

                            <div className="form-group">
                                <label className="form-label">本文（HTML対応）</label>
                                <div className="editor-toolbar">
                                    <button type="button" className="toolbar-btn" onClick={() => insertTag("h3")}><b>H3</b></button>
                                    <button type="button" className="toolbar-btn" onClick={() => insertTag("strong")}><b>B</b></button>
                                    <button type="button" className="toolbar-btn" onClick={() => insertTag("em")}><i>I</i></button>
                                    <div className="toolbar-sep"></div>
                                    <button type="button" className="toolbar-btn" onClick={() => insertTag("p")}>段落</button>
                                    <button type="button" className="toolbar-btn" onClick={insertBr}>改行</button>
                                    <button type="button" className="toolbar-btn" onClick={() => insertTag("ul")}>リスト</button>
                                    <button type="button" className="toolbar-btn" onClick={insertLink}>リンク</button>
                                    <div className="toolbar-sep"></div>
                                    <label className="toolbar-btn" style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", margin: 0 }}>
                                        画像挿入
                                        <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleContentImageUpload} />
                                    </label>
                                </div>
                                <textarea
                                    className="form-textarea"
                                    ref={contentRef}
                                    placeholder="記事本文をHTML形式で入力してください...&#10;&#10;例:&#10;<p>段落テキスト</p>&#10;<h3>見出し</h3>&#10;<p><strong>太字</strong>や<em>斜体</em>も使えます</p>"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="action-bar">
                                <button type="button" className="btn-save" onClick={() => handleSavePost("draft")}>下書き保存</button>
                                <button type="button" className="btn-save btn-save--publish" onClick={() => handleSavePost("published")}>公開する</button>
                                {currentPostId && (
                                    <button type="button" className="btn-delete" onClick={handleDeletePost}>削除</button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Toast */}
            <div className={`toast ${toast.show ? "show" : ""}`}>{toast.msg}</div>
        </div>
    );
}
