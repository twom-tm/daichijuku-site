import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main>

        {/*  ============================================================
         HERO / FIRST VIEW
         ============================================================  */}
        <section className="hero" id="hero">
          <div className="hero-bg"></div>
          {/*  Chart line decoration SVG  */}
          <div className="hero-chart">
            <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M0 160 L120 140 L240 150 L360 120 L480 130 L600 90 L720 100 L840 60 L960 80 L1080 40 L1200 55 L1320 30 L1440 45"
                stroke="#0F1C2E" strokeWidth="2" fill="none" />
              <path
                d="M0 180 L120 170 L240 175 L360 155 L480 165 L600 140 L720 150 L840 120 L960 135 L1080 110 L1200 125 L1320 100 L1440 115"
                stroke="#4C9595" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div className="container">
            <div className="hero-content fade-in">
              <p className="section-label">Daichi Juku — Crypto Education</p>
              <h1 className="hero-catchcopy">暗号資産を、<br />自立して扱える人へ。</h1>
              <p className="hero-subcopy">
                情報に振り回されない。<br />
                自分で判断できる力を育てる暗号資産スクール。<br />
                「デジタル難民を作らない」ための金融教育。
              </p>
              <div className="btn-group">
                <a href="https://lstep.app/form/81805/ths59z/39634c" className="btn btn--primary btn--lg">説明会を見る</a>
                <a href="https://line.me/R/ti/p/@817jyxon" target="_blank" rel="noopener"
                  className="btn btn--outline btn--lg">無料ニュースを受け取る</a>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">SCROLL</div>
        </section>

        {/*  ============================================================
         DATA STATS
         ============================================================  */}
        <section className="stats" id="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item fade-in">
                <div className="stat-number"><span data-count="500">0</span><span className="stat-suffix">名+</span></div>
                <div className="stat-label">累計受講者数</div>
              </div>
              <div className="stat-item fade-in fade-in-delay-1">
                <div className="stat-number"><span data-count="94">0</span><span className="stat-suffix">%</span></div>
                <div className="stat-label">継続率</div>
              </div>
              <div className="stat-item fade-in fade-in-delay-2">
                <div className="stat-number"><span data-count="97">0</span><span className="stat-suffix">%</span></div>
                <div className="stat-label">受講者満足度</div>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         ABOUT (大地塾とは)
         ============================================================  */}
        <section className="section--white" id="about">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">About</p>
              <h2 className="section-title">大地塾とは</h2>
              <p className="section-subtitle">
                暗号資産の「正しい向き合い方」を教える教育機関です。<br />
                短期的な利益ではなく、長期的な金融リテラシーの向上を目指します。<br />
                「デジタル難民を作らない」——それが私たちの活動の原点です。
              </p>
            </div>

            <div className="about-philosophy fade-in">
              {/*  Card 1: デジタル難民を作らない  */}
              <div className="card philosophy-card">
                <div className="philosophy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>デジタル難民を作らない</h3>
                <p>急速に進むデジタル化の波に取り残されない。正しい知識で、誰もがデジタル資産を扱える社会を目指します。</p>
              </div>
              {/*  Card 2: 自立  */}
              <div className="card philosophy-card">
                <div className="philosophy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>自立した判断力</h3>
                <p>誰かの情報に依存するのではなく、自分自身で市場を読み解く力を身につけます。</p>
              </div>
              {/*  Card 3: 金融リテラシー  */}
              <div className="card philosophy-card">
                <div className="philosophy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>金融リテラシー</h3>
                <p>暗号資産だけでなく、お金そのものとの向き合い方を体系的に学びます。</p>
              </div>
              {/*  Card 4: 守る投資  */}
              <div className="card philosophy-card">
                <div className="philosophy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>"守る"投資</h3>
                <p>資産を増やすことではなく、まず守ること。リスク管理を最優先に考えます。</p>
              </div>
            </div>

            {/*  Comparison  */}
            <div className="comparison fade-in">
              <h3>他のスクールとの違い</h3>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>一般的なスクール</th>
                    <th>大地塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>スタンス</td>
                    <td>「すぐ稼げる」を訴求</td>
                    <td><span className="comparison-check">✓</span> 理解を最優先に</td>
                  </tr>
                  <tr>
                    <td>カリキュラム</td>
                    <td>断片的な情報提供</td>
                    <td><span className="comparison-check">✓</span> 体系化された学習設計</td>
                  </tr>
                  <tr>
                    <td>再現性</td>
                    <td>講師の感覚に依存</td>
                    <td><span className="comparison-check">✓</span> 論理に基づく再現性</td>
                  </tr>
                  <tr>
                    <td>リスク管理</td>
                    <td>ほとんど触れない</td>
                    <td><span className="comparison-check">✓</span> カリキュラムの基盤</td>
                  </tr>
                  <tr>
                    <td>コミュニティ</td>
                    <td>煽り合い・マウント</td>
                    <td><span className="comparison-check">✓</span> 学び合いの文化</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*  ============================================================
         CURRICULUM (学べる内容)
         ============================================================  */}
        <section className="section--gray" id="curriculum">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Curriculum</p>
              <h2 className="section-title">学べる内容</h2>
              <p className="section-subtitle">
                基礎から実践まで、暗号資産を体系的に理解するための6つの領域をカバーします。
              </p>
            </div>

            <div className="curriculum-grid">
              {/*  1  */}
              <div className="card curriculum-card fade-in">
                <div className="curriculum-card-number">Module 01</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3>基礎理解</h3>
                <p>ブロックチェーンの仕組み、暗号資産の本質、市場構造の基本を丁寧に解説します。</p>
              </div>
              {/*  2  */}
              <div className="card curriculum-card fade-in fade-in-delay-1">
                <div className="curriculum-card-number">Module 02</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>現物戦略</h3>
                <p>現物取引を中心とした堅実な投資戦略。レバレッジに頼らない資産形成の考え方を学びます。</p>
              </div>
              {/*  3  */}
              <div className="card curriculum-card fade-in fade-in-delay-2">
                <div className="curriculum-card-number">Module 03</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>リスク管理</h3>
                <p>損失を最小限に抑えるポジション管理と、メンタルコントロールの技術を習得します。</p>
              </div>
              {/*  4  */}
              <div className="card curriculum-card fade-in">
                <div className="curriculum-card-number">Module 04</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3>テクニカル分析</h3>
                <p>チャートの読み方、トレンド分析、主要インジケーターの活用法を実践的に学びます。</p>
              </div>
              {/*  5  */}
              <div className="card curriculum-card fade-in fade-in-delay-1">
                <div className="curriculum-card-number">Module 05</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                </div>
                <h3>時事ニュース解説</h3>
                <p>日々変化する市場ニュースを読み解く力を養い、情報リテラシーを強化します。</p>
              </div>
              {/*  6  */}
              <div className="card curriculum-card fade-in fade-in-delay-2">
                <div className="curriculum-card-number">Module 06</div>
                <div className="curriculum-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>実践トレード思考</h3>
                <p>過去の事例分析やシミュレーションを通じ、実際の判断プロセスを体験的に磨きます。</p>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         COURSES (コース一覧)
         ============================================================  */}
        <section className="section--white" id="courses">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Courses</p>
              <h2 className="section-title">コース一覧</h2>
              <p className="section-subtitle">
                あなたのレベルと目標に合わせた最適なコースをお選びいただけます。<br />
                すべてのコースで独自Discordコミュニティへの参加が含まれます。
              </p>
            </div>

            {/*  Main courses 3-column  */}
            <div className="courses-grid">
              {/*  Standard Course  */}
              <div className="card course-card fade-in">
                <div className="course-tag">Standard</div>
                <h3>スタンダードコース</h3>
                <p>暗号資産の基礎を学びたい方のための入門コース。まずはここからスタート。</p>
                <div className="course-price"><span className="yen">入会金 ¥</span>30,000<span className="tax">（税込）</span></div>
                <div style={{ 'fontSize': '0.9rem', 'color': 'var(--color-text-muted)', 'marginTop': '4px' }}>月額 <strong
                  style={{ 'color': 'var(--color-navy)', 'fontSize': '1.1rem' }}>¥5,000</strong>（税込）</div>
                <ul className="course-features">
                  <li>基礎カリキュラム受講</li>
                  <li>Discordコミュニティ参加</li>
                  <li>市場ニュース解説配信</li>
                  <li>質問対応</li>
                </ul>
                <a href="https://daichijuku.official.ec/items/129348516" target="_blank" rel="noopener"
                  className="btn btn--outline" style={{ 'marginTop': '24px', 'width': '100%' }}>お申し込みはこちら</a>
              </div>
              {/*  Master Course  */}
              <div className="card course-card course-card--featured fade-in fade-in-delay-1">
                <div className="course-tag">Master Course</div>
                <h3>マスターコース</h3>
                <p>暗号資産の基礎からテクニカル分析、リスク管理まで。包括的に学ぶメインコースです。</p>
                <div className="course-price"><span className="yen">入会金 ¥</span>150,000<span className="tax">（税込）</span></div>
                <div style={{ 'fontSize': '0.9rem', 'color': 'var(--color-text-muted)', 'marginTop': '4px' }}>有効期間 <strong
                  style={{ 'color': 'var(--color-navy)' }}>6ヶ月間</strong></div>
                <ul className="course-features">
                  <li>全6モジュール受講</li>
                  <li>Discordコミュニティ参加</li>
                  <li>週次ライブ講義</li>
                  <li>個別質問対応</li>
                  <li>卒業後エキスパートコース継続可</li>
                </ul>
                <a href="https://daichijuku.official.ec/items/116219579" target="_blank" rel="noopener"
                  className="btn btn--accent" style={{ 'marginTop': '24px', 'width': '100%' }}>お申し込みはこちら</a>
              </div>
              {/*  Consulting Course  */}
              <div className="card course-card fade-in fade-in-delay-2">
                <div className="course-tag">Consulting</div>
                <h3>コンサルコース</h3>
                <p>お一人おひとりの状況に合わせた完全個別指導。短期間で集中的に学びたい方に。</p>
                <div className="course-price"><span className="yen">入会金 ¥</span>350,000<span className="tax">（税込）</span></div>
                <div style={{ 'fontSize': '0.9rem', 'color': 'var(--color-text-muted)', 'marginTop': '4px' }}>有効期間 <strong
                  style={{ 'color': 'var(--color-navy)' }}>6ヶ月間</strong></div>
                <ul className="course-features">
                  <li>マンツーマン指導</li>
                  <li>カスタムカリキュラム</li>
                  <li>随時チャットサポート</li>
                  <li>月2回の個別セッション</li>
                  <li>卒業後エキスパートコース継続可</li>
                </ul>
                <a href="https://daichijuku.official.ec/items/116219598" target="_blank" rel="noopener"
                  className="btn btn--outline" style={{ 'marginTop': '24px', 'width': '100%' }}>お申し込みはこちら</a>
              </div>
            </div>

            {/*  Expert continuation course  */}
            <div className="fade-in"
              style={{ 'maxWidth': '760px', 'margin': '48px auto 0', 'padding': '40px', 'background': 'var(--color-bg)', 'borderRadius': 'var(--radius-lg)', 'border': '1px solid var(--color-border-light)' }}>
              <div style={{ 'textAlign': 'center', 'marginBottom': '24px' }}>
                <div className="course-tag">Expert — 卒業生限定</div>
                <h3 style={{ 'fontSize': '1.2rem', 'fontWeight': '700', 'color': 'var(--color-navy)', 'marginBottom': '8px' }}>エキスパート継続コース</h3>
                <p style={{ 'fontSize': '0.875rem', 'color': 'var(--color-text-muted)', 'lineHeight': '1.8' }}>
                  マスターコース・コンサルコース卒業生のみが継続できるサブスクリプションプランです。</p>
              </div>
              <div className="expert-grid">
                <div className="card" style={{ 'textAlign': 'center', 'padding': '28px 20px' }}>
                  <div
                    style={{ 'fontSize': '0.7rem', 'fontWeight': '600', 'color': 'var(--color-accent)', 'letterSpacing': '0.08em', 'textTransform': 'uppercase', 'marginBottom': '8px' }}>
                    Standard Plan</div>
                  <div style={{ 'fontSize': '0.85rem', 'fontWeight': '600', 'color': 'var(--color-navy)', 'marginBottom': '4px' }}>通常プラン</div>
                  <div className="course-price" style={{ 'fontSize': '1.5rem' }}><span className="yen">¥</span>15,000<span className="tax">/
                    月</span></div>
                  <ul className="course-features" style={{ 'textAlign': 'left', 'marginTop': '16px' }}>
                    <li>月次マーケット分析</li>
                    <li>卒業生限定コミュニティ</li>
                    <li>新規コンテンツ優先配信</li>
                  </ul>
                  <a href="https://daichijuku.official.ec/items/120553685" target="_blank" rel="noopener"
                    className="btn btn--outline" style={{ 'marginTop': '24px', 'width': '100%' }}>お申し込みはこちら</a>
                </div>
                <div className="card" style={{ 'textAlign': 'center', 'padding': '28px 20px', 'borderColor': 'var(--color-accent)' }}>
                  <div
                    style={{ 'fontSize': '0.7rem', 'fontWeight': '600', 'color': 'var(--color-accent)', 'letterSpacing': '0.08em', 'textTransform': 'uppercase', 'marginBottom': '8px' }}>
                    Consulting Plan</div>
                  <div style={{ 'fontSize': '0.85rem', 'fontWeight': '600', 'color': 'var(--color-navy)', 'marginBottom': '4px' }}>コンサル付きプラン
                  </div>
                  <div className="course-price" style={{ 'fontSize': '1.5rem' }}><span className="yen">¥</span>50,000<span className="tax">/
                    月</span></div>
                  <ul className="course-features" style={{ 'textAlign': 'left', 'marginTop': '16px' }}>
                    <li>通常プランの全特典</li>
                    <li>月次個別コンサルティング</li>
                    <li>優先サポート対応</li>
                  </ul>
                  <a href="https://daichijuku.official.ec/items/116219682" target="_blank" rel="noopener"
                    className="btn btn--accent" style={{ 'marginTop': '24px', 'width': '100%' }}>お申し込みはこちら</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         FLOW (学習フロー)
         ============================================================  */}
        <section className="section--gray" id="flow">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Learning Flow</p>
              <h2 className="section-title">学習の流れ</h2>
              <p className="section-subtitle">
                5つのステップで、ゼロから自立した投資判断ができるようになります。
              </p>
            </div>

            <div className="flow-steps fade-in">
              {/*  Step 1  */}
              <div className="flow-step">
                <div className="flow-step-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="flow-step-number">Step 01</div>
                  <h4>SNSで知る</h4>
                  <p>X（Twitter）やInstagramで大地塾の発信に触れる</p>
                </div>
              </div>
              {/*  Step 2  */}
              <div className="flow-step">
                <div className="flow-step-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="flow-step-number">Step 02</div>
                  <h4>LINE登録</h4>
                  <p>無料の市場情報やニュース解説を受け取る</p>
                </div>
              </div>
              {/*  Step 3  */}
              <div className="flow-step">
                <div className="flow-step-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div>
                  <div className="flow-step-number">Step 03</div>
                  <h4>説明会参加</h4>
                  <p>無料オンライン説明会で理念とカリキュラムを理解</p>
                </div>
              </div>
              {/*  Step 4  */}
              <div className="flow-step">
                <div className="flow-step-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="flow-step-number">Step 04</div>
                  <h4>学習開始</h4>
                  <p>Discordコミュニティで仲間と共に体系的に学ぶ</p>
                </div>
              </div>
              {/*  Step 5  */}
              <div className="flow-step">
                <div className="flow-step-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <div className="flow-step-number">Step 05</div>
                  <h4>自立</h4>
                  <p>自分の判断で市場と向き合える力を手に入れる</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         NEWS SAMPLE (ニュース分析サンプル)
         ============================================================  */}
        <section className="section--white" id="news-sample">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Analysis Sample</p>
              <h2 className="section-title">ニュース分析サンプル</h2>
              <p className="section-subtitle">
                大地塾で実際に配信される市場分析の一例です。思考の質をご確認ください。
              </p>
            </div>

            <div className="news-sample-card fade-in">
              <div className="news-content">
                <div className="news-meta">2026.02.20 — Weekly Report</div>
                <h3>米国CPI発表後のBTC市場<br />—— 冷静な読み解き方</h3>
                <p className="news-excerpt">
                  2月のCPI（消費者物価指数）は市場予想を上回る結果となりました。
                  一般的にCPIの上振れはリスク資産にとってネガティブに捉えられますが、
                  暗号資産市場はすでにこのシナリオを織り込んでいた可能性があります。
                  <br /><br />
                  重要なのは「数字そのもの」ではなく、「市場がどう反応したか」を見ること。
                  発表直後の急落は一時的なもので、その後の戻りの強さにこそ注目すべきです。
                </p>
              </div>
              <div className="news-visual">
                <div className="news-visual-label">Analysis Points</div>
                <div className="news-visual-point">
                  <svg className="news-point-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>CPI発表前後の価格推移パターン分析</span>
                </div>
                <div className="news-visual-point">
                  <svg className="news-point-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>マクロ経済指標と暗号資産の相関性</span>
                </div>
                <div className="news-visual-point">
                  <svg className="news-point-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>リスク管理：ポジション調整の具体的手法</span>
                </div>
                <div className="news-visual-point">
                  <svg className="news-point-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <span>次週の注目イベントと想定シナリオ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         VOICE (お客様の声)
         ============================================================  */}
        <section className="section--white" id="voice">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Voice</p>
              <h2 className="section-title">お客様の声</h2>
              <p className="section-subtitle">
                大地塾で学び、自立した判断力を身につけた受講生の声をご紹介します。
              </p>
            </div>

            <div className="voice-slider-wrapper">
              <button className="voice-slider-arrow prev" id="voicePrev" aria-label="前へ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="voice-slider-arrow next" id="voiceNext" aria-label="次へ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <div className="voice-grid" id="voiceGrid">
                {/*  Voice 1  */}
                <div className="card voice-card fade-in">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・40代</span>
                    <span className="voice-location">福島県</span>
                  </div>
                  <h3 className="voice-title">私の不安を取り除いてくれた 大地塾</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      暗号資産と言う言葉は、良く耳にするけど、暗号資産＝怪しいと思う気持ちの方が強かった当時。。でも困っていた時に、大地塾のお話しを聞いて、講義を受ける事を決めました。<br />
                      初回の講義は、難しい言葉が出てきて、圧倒されましたが、大地先生は、細かく丁寧に説明してくれて、日を追うごとに、講義が楽しみになりました。<br />
                      去年までの私には考えられないくらいの、目覚ましい進歩をこの大地塾で実現した事に、感謝、感謝です。そして、あんなに不安だった気持ちが、今では安心して大地先生の元 トレードが出来るようになりました。<br />
                      自分の資産を自分で管理できる！夢が叶いました。。<br />
                      暗号資産 講義 とても勉強になりました。これからも 宜しくお願いいたします。
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 2  */}
                <div className="card voice-card fade-in fade-in-delay-1">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・50代</span>
                    <span className="voice-location">長野県</span>
                  </div>
                  <h3 className="voice-title">お金を払って学ぶ姿勢の重要性</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      私が大地塾に入った時、大地さんの｢お金を納めてしっかり学んで欲しい｣この言葉その時も何となく理解出来ました。今ではもっと深いレベルで理解出来ています。塾に入る時のお金はけして安いものではありませんが、今では、その金額以上の価値を得ています。<br />
                      暗号資産の勉強は本当に難しく、携帯操作では逃げ出したくなるくらいに分からなくて辛い時もありました。でも、これに人生をかけてみようと思ってお金を出した時の自分の気持ちを思いだして、しがみついてきました。<br />
                      今は操作も慣れて来て、楽しくて楽しくて学んで良かったと思っています。一番は大地さんの優しさ、ユーモアのある教え方だったからこそ、ついて来れたと思っています。<br />
                      大地さん須藤さん、共に私の心に寄り添って、辛抱強く教えてくれた事に感謝でいっぱいです。これからの時代に必ず必要になる事を先駆けて学べた事この縁を大切にしたいと思います。
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 3  */}
                <div className="card voice-card fade-in fade-in-delay-2">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・60代</span>
                    <span className="voice-location">群馬県</span>
                  </div>
                  <h3 className="voice-title">自立した資産運用</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      何もわからないまま、人に言われるがままに暗号通貨に関わってしまい凄く大変な思いをしましたが（損失も含む）大地塾と出会い変わりました。<br />
                      今まではわからない事、困った事があっても聞くところが無く個人コースを受講したおかげで、お金の仕組み、取引所の操作、暗号資産の保有、引き出し方、税金の事等で心配や不安な事も分かり易く何度も教えて下さり今では不安なく操作もできるようになりニュースやリストを読み解く力も徐々に覚え楽しくなりました。<br />
                      これからは暗号通貨の時代です。大地塾個人コースは卒業の為、エキスパートコースに申し込みました。トレードを覚えてこれからは資産を増やして行く勉強をして行きたいと思います。楽しみです。<br />
                      暗号通貨は良く危険とか聞きますがきちんと勉強して行えば安心して資産運用が出来ると思います。私は大地塾と出会えた事に感謝です。これからも宜しくお願い致します。
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 4  */}
                <div className="card voice-card fade-in">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・30代</span>
                    <span className="voice-location">東京都</span>
                  </div>
                  <h3 className="voice-title">主婦が勉強する副作用</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      大地塾を知り合いに紹介され、ポイ活感覚、おこづかい目的で始めました。自分のペースで無理のない時間に講義を視聴でき、仕事や子育てに追われる私にはとても助かりました。<br />
                      頭の中が家族のことばかりだったためか、暗号通貨のニュース解説では毎回知らなかった世の中のお金の動きを知り衝撃で目が覚める感覚です！<br />
                      そして毎日バタバタとイライラで過ごしていたはずが、いつの間にか暗号通貨の数値変動やアップデートされる情報に気持ちが向き家族へのイライラが減った気がします。楽しい雰囲気で学べし今は趣味でもそのうち副業として、子供が大きくなったら自慢出来たらいいなぁと思います。
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 5  */}
                <div className="card voice-card fade-in fade-in-delay-1">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・50代</span>
                    <span className="voice-location">群馬県</span>
                  </div>
                  <h3 className="voice-title">学びを通して感じた暗号通貨の可能性</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      日本人にとって暗号通貨はまだ身近なものではなく、怪しい・怖いという印象が先立ちます。私も最初は不安でしたが、大地塾では「お金とは何か」という根本から教えていただき、暗号通貨が全く新しい金融の仕組みであることを丁寧に解説していただきました。<br />
                      そのおかげで暗号通貨を正しく学び、正しく使えばとても価値あるものだと気づくことができました。６ヶ月の学びを通じて、暗号通貨はこれから必ず私たちの生活に根付くと強く感じました。<br />
                      今の学びは、近い将来必ず「学んでいて良かった」と思える財産になると確信しています。これからも大地塾で前向きに学び続けていきたいと思います。最後に、いつも楽しく熱心にご指導いただいている若き塾長に感謝しております！
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 6  */}
                <div className="card voice-card fade-in fade-in-delay-2">
                  <div className="voice-meta">
                    <span className="voice-badge">男性・30代</span>
                    <span className="voice-location">大分県</span>
                  </div>
                  <h3 className="voice-title">視野が広がった大地塾</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      これまでは国内取引所を2社しか使ったことがなく、正直トレードの幅も狭いと感じていました。ですが、大地塾で海外取引所も含めた活用方法を学んだことで一気に視野が広がりました。<br />
                      さらに、ニュースの読み解き方や基礎となる情報の押さえ方まで丁寧に教えていただき、自分で考えて行動できる力がつきました。おかげでトレードが不安ではなくなり、今では楽しみながら挑戦できています。本当に受講してよかったと思います。
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/*  Voice 7  */}
                <div className="card voice-card fade-in">
                  <div className="voice-meta">
                    <span className="voice-badge">女性・50代</span>
                    <span className="voice-location">広島県</span>
                  </div>
                  <h3 className="voice-title">きづいたらトレーダーに！</h3>
                  <div className="voice-text-wrapper">
                    <p className="voice-text">
                      仮想通貨という言葉を知ったのは10年以上前でした。仮想通貨🟰ビットコインぐらいにしかわからなくて、<br />
                      ・どこで買えるのか？<br />
                      ・どう保有するのか？<br />
                      ・いざ保有して現金化できるのか？<br />
                      全てがわからなくてただ、時間が過ぎていきました。大地君と出会い絶対に勉強をしたく大地塾に入会しました。<br />
                      暗号通貨の始まりから持つ事の意味、今後の世界規模での暗号通貨の必要性、トレードの楽しさなどたくさんの学びと実体験をしています。大地塾に入会してまだ間もないですが胸を張って言えるのは「私はトレーダーです」
                    </p>
                  </div>
                  <div className="voice-read-more-container">
                    <button className="voice-read-more" aria-label="続きを読む" aria-expanded="false">
                      <span>続きを読む</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div> {/*  /.voice-slider-wrapper  */}
          </div>
        </section>

        {/*  ============================================================
         MESSAGE (代表メッセージ)
         ============================================================  */}
        <section className="section--gray" id="message">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Message</p>
              <h2 className="section-title">代表メッセージ</h2>
            </div>

            <div className="message-layout fade-in">
              <div className="message-photo">
                <img src="/img/daichi-sensei.jpg" alt="塾長 我妻 大地" loading="lazy" decoding="async" />
              </div>
              <div className="message-body">
                <h3>「守れる人」が、最後に残る。</h3>
                <div className="message-name">大地塾 塾長 ── 我妻 大地</div>
                <p>
                  暗号資産の世界に入ったとき、私が最初に感じたのは「情報の多さ」と「信頼できる教育の少なさ」でした。
                </p>
                <p>
                  SNSには「爆益報告」が溢れ、初心者を煽るような情報が飛び交っています。
                  しかし、その裏で多くの人が大切な資産を失っている現実があります。
                </p>
                <p>
                  私が大地塾を作った理由はひとつ。
                  <strong>「正しく理解し、自分で判断できる人を増やしたい」</strong>——ただそれだけです。
                </p>
                <p>
                  大地塾では「すぐに稼げる方法」は教えません。
                  代わりに、市場の構造を理解し、リスクを管理し、
                  長期的に資産を守りながら育てていくための「思考の土台」を提供します。
                </p>
                <p>
                  派手さはありません。煽りもありません。
                  しかし、ここで身につけた力は、一生あなたの財産になります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         FAQ
         ============================================================  */}
        <section className="section--white" id="faq">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">FAQ</p>
              <h2 className="section-title">よくある質問</h2>
            </div>

            <div className="faq-list fade-in">
              <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                  <span>暗号資産の知識がまったくない初心者でも大丈夫ですか？</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    はい、むしろ初心者の方にこそ受講していただきたいと考えています。大地塾のカリキュラムは「ブロックチェーンとは何か」という基礎の基礎から始まります。専門用語も一つひとつ丁寧に解説しますので、安心してご参加ください。
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                  <span>怪しいスクールではありませんか？</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    ご不安はもっともです。大地塾は「すぐ稼げる」「必ず儲かる」といった表現は一切使いません。金融リテラシーの向上を目的とした教育機関であり、投資助言業ではありません。まずは無料の説明会にご参加いただき、理念とカリキュラムをご確認ください。
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                  <span>投資助言にあたりませんか？</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    大地塾は特定の銘柄の売買を推奨する投資助言業ではありません。市場の読み方・分析の手法・リスク管理の考え方といった「金融教育」を提供しています。最終的な投資判断はすべてご自身で行っていただきます。
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                  <span>返金制度はありますか？</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    受講開始から14日以内であれば、全額返金に対応しております。詳細は説明会にてご案内いたします。まずはお気軽にご参加ください。
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                  <span>どのくらいの期間で理解できるようになりますか？</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    個人差はありますが、マスターコースでは約3〜6ヶ月で基礎的な判断力が身につくよう設計しています。大切なのは速さではなく、正しい理解の積み重ねです。焦らず、ご自身のペースで学んでいただけます。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ============================================================
         OFFICIAL SNS
         ============================================================  */}
        <section className="section--white" id="sns">
          <div className="container">
            <div className="section-header fade-in">
              <p className="section-label">Official SNS</p>
              <h2 className="section-title">公式SNS</h2>
              <p style={{ 'textAlign': 'center', 'color': 'var(--color-text-light)', 'marginTop': '16px' }}>
                各プラットフォームで、暗号資産に関する有益な情報を無料で発信しています。
              </p>
            </div>

            <div className="sns-slider fade-in">
              <a href="https://line.me/R/ti/p/@817jyxon" target="_blank" rel="noopener" className="sns-card is-line">
                <div className="sns-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="sns-card-content">
                  <h3>公式LINE</h3>
                  <p>無料相談・限定情報はこちら</p>
                </div>
              </a>

              <a href="https://www.instagram.com/daichi._.sensei" target="_blank" rel="noopener"
                className="sns-card is-instagram">
                <div className="sns-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="sns-card-content">
                  <h3>Instagram</h3>
                  <p>図解で学ぶ暗号資産の基礎</p>
                </div>
              </a>

              <a href="https://x.com/daichi__sensei" target="_blank" rel="noopener" className="sns-card is-twitter">
                <div className="sns-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="sns-card-content">
                  <h3>X (Twitter)</h3>
                  <p>最新の市場分析と日々の思考</p>
                </div>
              </a>

              <a href="https://www.tiktok.com/@daichijuku?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener"
                className="sns-card is-tiktok">
                <div className="sns-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <div className="sns-card-content">
                  <h3>TikTok</h3>
                  <p>ショート動画でサクッと学ぶ</p>
                </div>
              </a>

              <a href="https://note.com/daichijuku" target="_blank" rel="noopener" className="sns-card is-note">
                <div className="sns-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div className="sns-card-content">
                  <h3>Note</h3>
                  <p>深い解説記事・コラム</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/*  ============================================================
         FINAL CTA
         ============================================================  */}
        <section className="section--navy final-cta" id="final-cta">
          <div className="container fade-in">
            <p className="section-label" style={{ 'color': 'rgba(255,255,255,0.5)' }}>Start Learning</p>
            <h2 className="section-title">情報に振り回される側から、<br />理解する側へ。</h2>
            <p className="section-subtitle">
              大地塾で、暗号資産と正しく向き合う力を身につけませんか。<br />
              まずは無料の説明会、またはLINE登録からお気軽にどうぞ。
            </p>
            <div className="btn-group">
              <a href="https://lstep.app/form/81805/ths59z/39634c" className="btn btn--white btn--lg">説明会を見る</a>
              <a href="https://line.me/R/ti/p/@817jyxon" target="_blank" rel="noopener"
                className="btn btn--accent btn--lg">LINE登録する</a>
            </div>
          </div>
        </section>

      </main>
      <div className="sticky-cta" id="stickyCta">
        <div className="sticky-cta-inner">
          <a href="https://lstep.app/form/81805/ths59z/39634c" className="btn btn--primary">説明会を見る</a>
          <a href="https://line.me/R/ti/p/@817jyxon" target="_blank" rel="noopener" className="btn btn--accent">LINE登録</a>
        </div>
      </div>
      <dialog className="voice-modal" id="voiceModal">
        <div className="voice-modal-content">
          <button className="voice-modal-close" id="voiceModalClose" aria-label="閉じる">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="voice-modal-body" id="voiceModalBody">
            {/*  Content injected via JS  */}
          </div>
        </div>
      </dialog>

    </>
  );
}
