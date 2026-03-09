import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ページが見つかりません｜大地塾",
    description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
    return (
        <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <section className="page-header" style={{ width: "100%", padding: "120px 20px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h1 className="page-title fade-in is-visible" style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>404</h1>
                    <p className="section-label" style={{ marginBottom: "2rem" }}>
                        Not Found
                    </p>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "2.5rem" }}>
                        お探しのページは見つかりませんでした。<br />
                        一時的にアクセスできない状態にあるか、移動もしくは削除された可能性があります。
                    </p>
                    <Link href="/" className="btn btn--primary">
                        トップページへ戻る
                    </Link>
                </div>
            </section>
        </main>
    );
}
