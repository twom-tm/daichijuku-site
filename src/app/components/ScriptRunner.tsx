"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptRunner() {
    const pathname = usePathname();

    useEffect(() => {
        const runScripts = () => {
            // script.js 内で定義した関数があれば実行する
            if (typeof window !== "undefined" && typeof (window as any).initDaichiScripts === "function") {
                (window as any).initDaichiScripts();
            }
        };

        // Next.js の DOM 更新が完了するのを待つために少し遅延させる
        const timeoutId = setTimeout(runScripts, 100);
        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
