'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  // Generate the animated letters synchronously so they render immediately (prevents lag).
  const text = "PARMAYU"
  const letters = text.split('').map((ch, i) => {
    // Ultra fast text animation
    const delay = 0.2 + i * 0.02
    return (
      <span key={i} style={{ animationDelay: `${delay}s` }}>
        {ch}
      </span>
    )
  })

  useEffect(() => {
    // Check if preloader has been seen in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader')
    
    if (hasSeenPreloader) {
      setIsVisible(false)
      // Small delay to ensure React has painted before dispatching
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent('app-ready', { detail: { immediate: true } }))
      })
      return
    }

    // Force scroll to top on mount
    window.scrollTo(0, 0);

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const FADE_MS = reduced ? 250 : 500
    const FAST_TIMEOUT = 1800 // wait for animations to finish smoothly
    let isLoaded = false

    const triggerFadeOut = () => {
      if (isLoaded) return
      isLoaded = true

      setIsFading(true)
      
      // Dispatch event exactly when preloader starts fading
      window.dispatchEvent(new CustomEvent('app-ready', { detail: { immediate: false } }))

      setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('hasSeenPreloader', 'true')
        window.scrollTo(0, 0);
      }, FADE_MS)
    }

    // Never rely on window.load in Next.js because it can cause freezing if scripts hang. 
    // Just run a fast fixed timeout.
    const fadeTimeout = setTimeout(triggerFadeOut, FAST_TIMEOUT)

    return () => {
      clearTimeout(fadeTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        html, body { overflow: hidden !important; touch-action: none !important; }
        #preloader{
          --bg:#FFFFFF;
          --yellow:#FDB813;
          --green:#22C55E;
          --blue:#3B82F6;
          --slate:#1E293B;
          --gray:#E5E7EB;
          --cream:#F5F1E8;
          --gold:#B8862E;
          --ease:cubic-bezier(.22,.61,.36,1);

          position:fixed;inset:0;z-index:2147483647;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          gap:18px;
          background:
            radial-gradient(ellipse 560px 380px at 50% 22%, rgba(253,184,19,.14), transparent 70%),
            var(--bg);
          opacity:1;
          transform: scale(1);
          transform-origin: center center;
          transition:opacity .8s var(--ease), transform .8s var(--ease), filter .8s var(--ease);
          will-change: opacity, transform, filter;
        }
        #preloader.fade-out{opacity:0; transform: scale(1.03); filter: blur(0px);}

        .illustration-wrap{display:flex;justify-content:center;align-items:flex-start;width:320px;height:210px;}
        .illustration{position:relative;width:320px;height:210px;transform-origin:top center;overflow:visible;}

        .sun-rays{
          position:absolute;left:110px;top:-16px;width:100px;height:100px;border-radius:50%;
          background:repeating-conic-gradient(from 0deg, rgba(253,184,19,.35) 0deg 3deg, transparent 3deg 16deg);
          opacity:0;
          animation:rays-in .2s var(--ease) forwards, rays-spin 9.6s linear infinite;
          animation-delay:.02s, 0s;
          will-change: transform;
        }
        @keyframes rays-in{ to{opacity:.9;} }
        @keyframes rays-spin{ to{transform:rotate(360deg);} }

        .sun-core{
          position:absolute;left:132px;top:6px;width:56px;height:56px;border-radius:50%;
          background:radial-gradient(circle at 35% 32%, #FFEEB8, var(--yellow) 55%, #E39A0B 100%);
          box-shadow:0 0 40px 12px rgba(253,184,19,.5), 0 0 90px 34px rgba(253,184,19,.22);
          opacity:0;transform:translateY(24px) scale(.85);
          animation:sun-in .2s var(--ease) forwards, sun-pulse 1.56s ease-in-out infinite;
          animation-delay:0s, .2s;
          will-change: transform;
        }
        @keyframes sun-in{ to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes sun-pulse{ 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(0) scale(1.05);} }

        .mote{position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(253,184,19,.8);opacity:0;animation:mote-float 2.04s ease-in-out infinite;}
        .mote.m1{left:112px;top:44px;animation-delay:.1s;}
        .mote.m2{left:206px;top:20px;animation-delay:.2s;}
        .mote.m3{left:184px;top:62px;animation-delay:.3s;}
        @keyframes mote-float{ 0%{opacity:0;transform:translateY(0);} 30%{opacity:.9;} 100%{opacity:0;transform:translateY(-20px);} }

        .beam{
          position:absolute;left:140px;top:58px;width:40px;height:34px;
          background:linear-gradient(180deg, rgba(253,184,19,.55), transparent 88%);
          clip-path:polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%);
          opacity:0;
          animation:beam-flash .15s ease forwards;
          animation-delay:.1s;
        }
        @keyframes beam-flash{ 0%{opacity:0;} 35%{opacity:.9;} 100%{opacity:0;} }

        .house-piece{opacity:0;transform:translateY(-6px) scale(.97);animation:house-in .15s var(--ease) forwards;animation-delay:0s;}
        @keyframes house-in{ to{opacity:1;transform:translateY(0) scale(1);} }

        .chimney{position:absolute;left:118px;top:68px;width:14px;height:26px;background:var(--slate);}
        .roof{
          position:absolute;left:100px;top:90px;width:120px;height:32px;
          background:linear-gradient(180deg,#3a4a63,#1E293B);
          clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .roof-cap{position:absolute;left:150px;top:87px;width:20px;height:6px;border-radius:3px;background:var(--gold);}
        .body{
          position:absolute;left:110px;top:122px;width:100px;height:64px;
          background:linear-gradient(180deg,#FBF8F1,var(--cream));
          border-radius:2px;
          box-shadow:0 10px 22px rgba(30,41,59,.12);
        }

        .win{
          position:absolute;top:138px;width:24px;height:26px;background:#94a3b8;border-radius:3px;
          border:1px solid rgba(184,134,46,.5);
          animation:win-lit .1s ease forwards;
        }
        .win.left{left:122px;animation-delay:.15s;}
        .win.right{left:174px;animation-delay:.2s;}
        .win::after{
          content:'';position:absolute;left:50%;top:0;width:1px;height:100%;background:rgba(30,41,59,.25);
        }
        .win::before{
          content:'';position:absolute;top:50%;left:0;width:100%;height:1px;background:rgba(30,41,59,.25);
        }
        @keyframes win-lit{ to{background:var(--yellow);box-shadow:0 0 16px 5px rgba(253,184,19,.6);} }

        .door{
          position:absolute;left:147px;top:152px;width:26px;height:34px;background:#64748b;
          border-radius:8px 8px 2px 2px;
          animation:door-lit .1s ease forwards;
          animation-delay:.25s;
        }
        @keyframes door-lit{ to{background:#c99a3f;box-shadow:0 0 14px 4px rgba(184,134,46,.5);} }

        .ground-glow{
          position:absolute;left:96px;top:180px;width:150px;height:30px;
          background:radial-gradient(ellipse, rgba(253,184,19,.32), transparent 72%);
          opacity:0;animation:glow-in .15s ease forwards;animation-delay:.3s;
        }
        @keyframes glow-in{ to{opacity:1;} }

        .panel-unit{
          position:absolute;left:160px;top:84px;width:52px;height:32px;
          transform:rotate(-4deg) translateY(-16px);opacity:0;
          animation:panel-in .2s var(--ease) forwards;
          animation-delay:.1s;
        }
        @keyframes panel-in{ to{opacity:1;transform:rotate(-24deg) translateY(0);} }

        .panel-frame{
          position:absolute;inset:0;border-radius:5px;
          background:linear-gradient(160deg,#2a3a54,#0f1826);
          border:2px solid #cbd5e1;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.55),
            inset 0 -1px 0 rgba(0,0,0,.35),
            0 10px 18px rgba(15,23,42,.28);
          display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;
          gap:2px;padding:4px;overflow:hidden;
        }
        .panel-frame::after{
          content:'';position:absolute;top:0;left:-55%;width:32%;height:100%;
          background:linear-gradient(115deg, transparent, rgba(255,255,255,.4), transparent);
          transform:skewX(-18deg);
          animation:sweep 1.56s ease-in-out infinite;
          animation-delay:.3s;
          will-change: transform;
        }
        @keyframes sweep{ 
          0%{transform:translateX(0) skewX(-18deg);} 
          100%{transform:translateX(600%) skewX(-18deg);} 
        }

        .cell{position:relative;background:#101a2c;border-radius:2px;}
        .cell::before{
          content:'';position:absolute;inset:0;border-radius:2px;opacity:0;
          box-shadow:inset 0 0 8px 2px rgba(59,130,246,0);
          animation:cell-glow .15s ease forwards;
        }
        .cell:nth-child(1)::before{animation-delay:.15s;}
        .cell:nth-child(2)::before{animation-delay:.18s;}
        .cell:nth-child(3)::before{animation-delay:.21s;}
        .cell:nth-child(4)::before{animation-delay:.25s;}
        @keyframes cell-glow{ to{opacity:1;box-shadow:inset 0 0 8px 2px rgba(59,130,246,.9);} }

        .panel-flash{
          position:absolute;inset:-4px;border-radius:8px;
          background:radial-gradient(circle, rgba(255,255,255,.95), rgba(96,165,250,.6) 55%, transparent 75%);
          opacity:0;transform:scale(.4);
          animation:flash-burst .15s ease forwards;
          animation-delay:.15s;
        }
        @keyframes flash-burst{
          0%{opacity:0;transform:scale(.4);}
          40%{opacity:.9;transform:scale(1.25);}
          100%{opacity:0;transform:scale(1.5);}
        }

        .drop{
          position:absolute;left:0;top:0;width:8px;height:8px;margin:-4px;border-radius:50%;
          background:var(--blue);box-shadow:0 0 10px 3px rgba(59,130,246,.85);
          offset-path:path('M186,116 Q182,124 178,134');
          opacity:0;
          animation:travel .1s linear 2;
          animation-delay:.2s;
        }
        .drop.d2{animation-delay:.3s;background:var(--green);box-shadow:0 0 10px 3px rgba(34,197,94,.8);}
        @keyframes travel{
          0%{offset-distance:0%;opacity:0;}
          20%{opacity:1;}
          80%{opacity:1;}
          100%{offset-distance:100%;opacity:0;}
        }

        .sprout{position:absolute;left:58px;top:148px;width:36px;height:44px;}
        .stem{
          position:absolute;left:16px;bottom:0;width:3px;height:0;background:var(--green);
          border-radius:2px;animation:stem-grow .15s var(--ease) forwards;animation-delay:.3s;
        }
        @keyframes stem-grow{ to{height:26px;} }
        .leaflet{
          position:absolute;width:20px;height:12px;background:var(--green);
          clip-path:polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
          opacity:0;transform:scale(0);
          animation:leaf-pop .15s var(--ease) forwards;
        }
        .leaflet.lf1{left:0px;bottom:20px;animation-delay:.35s;}
        .leaflet.lf2{left:14px;bottom:28px;animation-delay:.4s;}
        @keyframes leaf-pop{ to{opacity:1;transform:scale(1);} }

        @media (max-width:480px){
          .illustration-wrap{height:172px;}
          .illustration{transform:scale(.82);}
        }
        @media (max-width:340px){
          .illustration-wrap{height:139px;}
          .illustration{transform:scale(.66);}
        }

        .brand-mark{position:relative;display:flex;flex-direction:column;align-items:center;}
        .logo-glow{
          position:absolute;left:50%;top:50%;width:260px;height:120px;
          transform:translate(-50%,-50%);border-radius:50%;
          background:radial-gradient(ellipse, rgba(253,184,19,.16), transparent 70%);
          opacity:0;animation:glow-fade .2s ease forwards;animation-delay:.2s;
        }
        @keyframes glow-fade{ to{opacity:1;} }

        .logo{
          position:relative;display:flex;font-size:clamp(1.9rem,6vw,3.1rem);font-weight:800;
          letter-spacing:.15em;color:var(--slate);margin:0;
        }
        .logo span{opacity:0;transform:translateY(12px);animation:letter-in .15s var(--ease) forwards;}
        @keyframes letter-in{ to{opacity:1;transform:translateY(0);} }

        .logo-underline{
          width:64px;height:2px;margin-top:8px;background:var(--gold);
          transform:scaleX(0);transform-origin:center;
          animation:underline-in .15s var(--ease) forwards;
          animation-delay:.3s;
        }
        @keyframes underline-in{ to{transform:scaleX(1);} }

        .slogan{
          margin:14px 0 0;font-size:clamp(.8rem,2vw,.95rem);font-weight:500;letter-spacing:.02em;
          color:#475569;text-align:center;padding:0 20px;
          opacity:0;transform:translateY(8px);
          animation:slogan-in .15s var(--ease) forwards;
          animation-delay:.35s;
        }
        @keyframes slogan-in{ to{opacity:1;transform:translateY(0);} }

        @media (prefers-reduced-motion: reduce){
          .sun-rays,.sun-core,.mote,.beam,.house-piece,.win,.door,.ground-glow,
          .panel-unit,.panel-frame::after,.cell::before,.panel-flash,.drop,
          .stem,.leaflet,.logo-glow,.logo span,.logo-underline,.slogan{
            animation-duration:.01ms !important;
            animation-delay:0s !important;
            transition-duration:.01ms !important;
          }
        }
      `}} />
      <div id="preloader" suppressHydrationWarning className={isFading ? 'fade-out' : ''} role="status" aria-live="polite" aria-label="Loading PARMAYU Solar">
        <div className="illustration-wrap">
          <div className="illustration">
            <div className="sun-rays"></div>
            <div className="sun-core"></div>
            <div className="mote m1"></div>
            <div className="mote m2"></div>
            <div className="mote m3"></div>
            <div className="beam"></div>

            <div className="chimney house-piece"></div>
            <div className="roof house-piece"></div>
            <div className="roof-cap house-piece"></div>
            <div className="body house-piece"></div>
            <div className="win left"></div>
            <div className="win right"></div>
            <div className="door"></div>
            <div className="ground-glow"></div>

            <div className="panel-unit">
              <div className="panel-frame">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
              </div>
              <div className="panel-flash"></div>
            </div>
            <div className="drop"></div>
            <div className="drop d2"></div>

            <div className="sprout">
              <div className="stem"></div>
              <div className="leaflet lf1"></div>
              <div className="leaflet lf2"></div>
            </div>
          </div>
        </div>

        <div className="brand-mark">
          <div className="logo-glow"></div>
          <h1 className="logo" id="logoText">
            {letters}
          </h1>
          <div className="logo-underline"></div>
          <p className="slogan">Powering Tomorrow with Smart Solar Energy</p>
        </div>
      </div>
    </>
  )
}
