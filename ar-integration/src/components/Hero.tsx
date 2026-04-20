export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      justifyContent:'flex-end', padding:'0 48px 80px', position:'relative', overflow:'hidden',
    }}>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes heroFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .hero-fade{opacity:0;animation:heroFadeUp .8s ease-out forwards}
        .hero-fade-1{animation-delay:.15s}
        .hero-fade-2{animation-delay:.25s}
        .hero-fade-3{animation-delay:.45s}
        .hero-cta{transition:transform .2s}
        .hero-cta:hover{transform:translateY(-2px)}
      `}</style>

      {/* Grid overlay */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(245,245,243,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,243,.03) 1px,transparent 1px)',
        backgroundSize:'80px 80px',
      }}/>

      {/* Badge */}
      <div className="hero-fade hero-fade-1" style={{
        display:'inline-flex', alignItems:'center', gap:10,
        border:'1px solid #2e2e2c', padding:'8px 16px',
        marginBottom:48, width:'fit-content',
      }}>
        <span style={{
          width:6, height:6, background:'#f5f5f3', borderRadius:'50%',
          animation:'pulse 2s infinite',
        }}/>
        <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:2, color:'#b0b0ae', textTransform:'uppercase' }}>
          Disponible pour nouveaux projets
        </span>
      </div>

      {/* Title */}
      <h1 className="hero-fade hero-fade-2" style={{
        fontFamily:'var(--font-bebas)', fontSize:'clamp(72px,11vw,160px)',
        lineHeight:.9, letterSpacing:-1, marginBottom:48,
      }}>
        Votre présence<br/>
        <span style={{ color:'#6b6b69' }}>digitale,</span><br/>
        réinventée.
      </h1>

      {/* Bottom */}
      <div className="hero-fade hero-fade-3" style={{
        display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:32,
      }}>
        <p style={{ maxWidth:360, fontSize:15, lineHeight:1.7, color:'#b0b0ae', fontWeight:300 }}>
          AR Integration crée des <strong style={{ color:'#f5f5f3', fontWeight:500 }}>sites web</strong> et des{' '}
          <strong style={{ color:'#f5f5f3', fontWeight:500 }}>applications mobiles</strong> qui transforment
          votre vision en expériences digitales qui convertissent.
        </p>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:16 }}>
          <a href="#contact" className="hero-cta" style={{
            background:'#f5f5f3', color:'#0a0a0a', padding:'18px 40px',
            fontFamily:'var(--font-dm-mono)', fontSize:12, letterSpacing:3,
            textTransform:'uppercase', textDecoration:'none', fontWeight:500,
          }}>
            Lancer mon projet
          </a>
          <a href="#services" style={{
            color:'#6b6b69', fontFamily:'var(--font-dm-mono)', fontSize:11,
            letterSpacing:2, textTransform:'uppercase', textDecoration:'none',
          }}>↓ Découvrir nos services</a>
        </div>
      </div>
    </section>
  )
}
