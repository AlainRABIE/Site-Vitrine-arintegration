export default function Footer() {
  return (
    <footer style={{
      background:'#0a0a0a', borderTop:'1px solid #2e2e2c',
      padding:'48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:24,
    }}>
      <style>{`.footer-link{transition:color .2s}.footer-link:hover{color:#f5f5f3!important}`}</style>
      <div style={{ fontFamily:'var(--font-bebas)', fontSize:20, letterSpacing:3 }}>
        AR<span style={{ color:'#2e2e2c' }}>.</span>INTEGRATION
      </div>
      <div style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:'1.5px', color:'#6b6b69' }}>
        © {new Date().getFullYear()} AR Integration. Tous droits réservés.
      </div>
      <div style={{ display:'flex', gap:32 }}>
        {[['/#services','Services'],['/#portfolio','Portfolio'],['/#contact','Contact'],['/mentions-legales/','Mentions légales']].map(([href,label]) => (
          <a key={href} href={href} className="footer-link" style={{
            fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:'1.5px',
            textTransform:'uppercase', color:'#6b6b69', textDecoration:'none',
          }}>{label}</a>
        ))}
      </div>
    </footer>
  )
}
