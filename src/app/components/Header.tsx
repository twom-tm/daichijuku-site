"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (typeof window !== "undefined") {
            document.body.style.overflow = !isMenuOpen ? "hidden" : "";
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        if (typeof window !== "undefined") {
            document.body.style.overflow = "";
        }
    };

    if (pathname?.startsWith("/admin")) return null;

    return (
        <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`} id="header">
            <div className="container header-inner">
                <Link href="/" className="header-logo" onClick={closeMenu}>
                    大地塾 <span>暗号資産スクール</span>
                </Link>
                <nav className={`header-nav ${isMenuOpen ? "is-open" : ""}`} id="headerNav">
                    <Link href="/#about" onClick={closeMenu}>大地塾とは</Link>
                    <Link href="/#curriculum" onClick={closeMenu}>学べる内容</Link>
                    <Link href="/#courses" onClick={closeMenu}>コース</Link>
                    <Link href="/#flow" onClick={closeMenu}>学習の流れ</Link>
                    <Link href="/#voice" onClick={closeMenu}>お客様の声</Link>
                    <Link href="/#faq" onClick={closeMenu}>よくある質問</Link>
                    <Link href="/column" onClick={closeMenu}>ニュース</Link>
                    <Link href="https://lstep.app/form/81805/SzS4WO/314e59" className="header-cta btn" onClick={closeMenu}>説明会を見る</Link>
                </nav>
                <button
                    className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`}
                    id="menuToggle"
                    aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                    onClick={toggleMenu}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
}
