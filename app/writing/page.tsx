import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WritingPage() {
  return (
    <>
      <Header active="writing" />
      <main id="main" className="page">
        <p className="eyebrow">★ The notebook</p>
        <h1 className="sh" style={{ fontSize: 'clamp(40px,7vw,72px)', margin: '0 0 18px' }}>
          Soon, <span className="tang">soon.</span>
        </h1>
        <p className="work-intro">
          Essays, research notes, and half-formed thoughts will live here, written like a
          designer&rsquo;s notebook and a researcher&rsquo;s field log. First pieces are in progress.
        </p>
      </main>
      <Footer />
    </>
  )
}
