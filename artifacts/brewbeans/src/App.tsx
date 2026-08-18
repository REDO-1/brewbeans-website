import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Clock3, ExternalLink, Instagram, MapPin, Menu as MenuIcon, Phone, Star, X } from 'lucide-react';

type MenuCategory = 'Coffee' | 'Cold Coffee' | 'Desserts' | 'Snacks';

const menuItems: Record<MenuCategory, { name: string; description: string; price: string }[]> = {
  Coffee: [
    { name: 'Spanish Latte', description: 'Espresso, silky milk & a touch of condensed sweetness', price: 'PKR 520' },
    { name: 'Flat White', description: 'Double ristretto, velvety microfoam', price: 'PKR 480' },
    { name: 'Cappuccino', description: 'A classic three-part balance, finished with cocoa', price: 'PKR 450' },
    { name: 'Americano', description: 'Our house espresso lengthened with hot water', price: 'PKR 390' },
  ],
  'Cold Coffee': [
    { name: 'Iced Latte', description: 'Chilled espresso and milk over hand-cut ice', price: 'PKR 500' },
    { name: 'Cold Brew', description: 'Slow-steeped for 18 hours, smooth to the last sip', price: 'PKR 480' },
    { name: 'Mocha Frappe', description: 'Cold chocolate, espresso and a cloud of cream', price: 'PKR 560' },
    { name: 'Iced Spanish Latte', description: 'The neighborhood favorite, served cold', price: 'PKR 550' },
  ],
  Desserts: [
    { name: 'Tiramisu', description: 'Mascarpone, espresso-soaked cake and cocoa', price: 'PKR 580' },
    { name: 'Lotus Cheesecake', description: 'Creamy cheesecake with a spiced biscuit base', price: 'PKR 560' },
    { name: 'Chocolate Brownie', description: 'Warm, fudgy and made for sharing', price: 'PKR 420' },
    { name: 'Banana Bread', description: 'Toasted walnuts, served warm with butter', price: 'PKR 390' },
  ],
  Snacks: [
    { name: 'Chicken Panini', description: 'Herb chicken, mozzarella and house relish', price: 'PKR 620' },
    { name: 'Avocado Toast', description: 'Sourdough, lemon, chilli and soft herbs', price: 'PKR 580' },
    { name: 'Loaded Fries', description: 'Crisp fries, cheese sauce and signature seasoning', price: 'PKR 520' },
    { name: 'Granola Bowl', description: 'Yogurt, seasonal fruit and toasted granola', price: 'PKR 480' },
  ],
};

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Our Coffee', href: '#coffee' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
];

function Brand() {
  return (
    <a className="brand" href="#top" data-testid="link-brand">
      <span className="brand-mark" aria-hidden="true">b</span>
      <span>Brewbeans</span>
    </a>
  );
}

function ScrollLink({ href, children, className = '', onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  return <a className={className} href={href} onClick={onClick} data-testid={`link-${href.replace('#', '')}`}>{children}</a>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState<MenuCategory>('Coffee');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <div id="top">
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrap">
          <Brand />
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => <ScrollLink key={item.href} href={item.href}>{item.label}</ScrollLink>)}
          </nav>
          <ScrollLink href="#menu" className="nav-cta">View Menu <ArrowUpRight size={14} /></ScrollLink>
          <button className="menu-toggle" onClick={() => setIsMenuOpen((open) => !open)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => <ScrollLink key={item.href} href={item.href} onClick={closeMobile}>{item.label}</ScrollLink>)}
            <ScrollLink href="#menu" className="nav-cta" onClick={closeMobile}>View Menu <ArrowUpRight size={14} /></ScrollLink>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">Neighborhood coffee · Karachi</span>
            <h1 id="hero-title">Good Coffee.<br /><em>Good Moments.</em></h1>
            <p className="hero-desc">Your cozy neighborhood coffee spot in Gulshan-e-Iqbal, Karachi.</p>
            <div className="hero-actions">
              <ScrollLink href="#menu" className="button-solid">Explore Menu <ArrowUpRight size={15} /></ScrollLink>
              <a className="button-outline" href="https://www.google.com/maps/search/?api=1&query=Brewbeans+Gulshan-e-Iqbal+Karachi" target="_blank" rel="noreferrer" data-testid="link-hero-directions">Get Directions <MapPin size={14} /></a>
            </div>
            <div className="hero-note"><Star size={13} /><span>Slow mornings, long conversations, good company.</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="A warm Spanish latte on a walnut table" />
            <div className="rating-badge" data-testid="status-hero-rating"><strong>★ 4.9</strong><span>79 Google Reviews</span></div>
            <div className="scroll-label">Scroll to explore</div>
          </div>
        </section>

        <section className="section coffee-section" id="coffee" aria-labelledby="coffee-title">
          <div className="section-head">
            <div><span className="eyebrow">The daily pour</span><h2 id="coffee-title">Made for Your<br /><em>Coffee Moments</em></h2></div>
            <p className="section-intro">Thoughtfully made, quietly memorable. Start with a familiar favorite or find your new regular.</p>
          </div>
          <div className="coffee-grid">
            {[
              { name: 'Spanish Latte', description: 'Silky, sweet and just the right amount of indulgent.', price: 'PKR 520', image: '/hero-coffee.jpg' },
              { name: 'Cappuccino', description: 'Rich espresso, airy foam and a dusting of cocoa.', price: 'PKR 450', image: '/coffee-still-life.jpg' },
              { name: 'Iced Latte', description: 'Cool, creamy and made for Karachi afternoons.', price: 'PKR 500', image: '/hero-coffee.jpg' },
              { name: 'Tiramisu', description: 'A little coffee moment, layered with mascarpone.', price: 'PKR 580', image: '/coffee-still-life.jpg' },
            ].map((item, index) => (
              <article className="coffee-card" key={item.name} data-testid={`card-coffee-${index}`}>
                <div className="coffee-art"><img src={item.image} alt="" /><span className="coffee-index">0{index + 1}</span></div>
                <div className="coffee-info"><h3>{item.name}</h3><p>{item.description}</p><span className="price">{item.price}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-band" id="about" aria-labelledby="about-title">
          <div className="about">
            <div className="about-image" role="img" aria-label="Brewbeans cafe interior with warm light"><span className="image-stamp">made for<br />slow moments</span></div>
            <div className="about-copy">
              <span className="eyebrow">A neighborhood ritual</span>
              <h2 id="about-title">A Place to<br /><em>Slow Down.</em></h2>
              <p>Brewbeans is your comfortable corner in Gulshan-e-Iqbal — a place for a really good cup, conversations that run late, focused work, and the kind of relaxing moments you wish you had more of.</p>
              <div className="stat"><strong>4.9★</strong><span>Google<br />Rating</span></div>
            </div>
          </div>
        </section>

        <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
          <div className="section">
            <div className="section-head"><div><span className="eyebrow">From the people</span><h2 id="reviews-title">Loved by<br /><em>Coffee Lovers</em></h2></div><p className="section-intro">The best part of our day is hearing that yours got a little better here.</p></div>
            <div className="review-layout">
              <div className="review-score"><strong>4.9 / 5</strong><div className="review-stars" aria-label="Five stars">★★★★★</div><p>79 Google Reviews</p><a className="review-link" href="https://www.google.com/search?q=Brewbeans+Gulshan-e-Iqbal+reviews" target="_blank" rel="noreferrer" data-testid="link-read-reviews">Read all reviews <ExternalLink size={12} /></a></div>
              <div className="review-cards">
                {[
                  { quote: 'Excellent coffee and fantastic ambience.', name: 'A regular from Gulshan' },
                  { quote: 'Peaceful atmosphere and amazing coffee. A proper find.', name: 'Google reviewer' },
                  { quote: 'Polite staff, a relaxing atmosphere, and great desserts.', name: 'Coffee lover, Karachi' },
                ].map((review, index) => <article className="review-card" key={review.quote} data-testid={`card-review-${index}`}><blockquote>“{review.quote}”</blockquote><cite>— {review.name}</cite></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <div className="section">
            <div className="section-head"><div><span className="eyebrow">Something for every mood</span><h2 id="menu-title">A Little<br /><em>Menu Preview</em></h2></div><p className="section-intro">Come hungry, leave happy. Here are a few of the things we love serving.</p></div>
            <div className="menu-tabs" role="tablist" aria-label="Menu categories">
              {(Object.keys(menuItems) as MenuCategory[]).map((item) => <button className={`menu-tab ${category === item ? 'active' : ''}`} key={item} onClick={() => setCategory(item)} role="tab" aria-selected={category === item} data-testid={`tab-menu-${item.toLowerCase().replace(' ', '-')}`}>{item}</button>)}
            </div>
            <div className="menu-list" role="tabpanel">
              {menuItems[category].map((item, index) => <div className="menu-row" key={item.name} data-testid={`row-menu-${category.toLowerCase().replace(' ', '-')}-${index}`}><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="menu-price">{item.price}</span></div>)}
            </div>
            <div className="menu-bottom"><a className="button-solid" href="https://www.foodpanda.pk/" target="_blank" rel="noreferrer" data-testid="link-full-menu">View Full Menu <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="experience" aria-labelledby="experience-title">
          <div className="experience-visual">
            <div className="experience-main" role="img" aria-label="Coffee and dessert at Brewbeans" />
            <div className="experience-card"><p>Come for the Coffee.<br /><em>Stay for the Vibe.</em></p></div>
          </div>
          <div className="experience-copy">
            <span className="eyebrow">Your kind of place</span>
            <h2 id="experience-title">Make Room<br />for a <em>Moment.</em></h2>
            <p>Plug in for a few hours. Meet someone you missed. Order one more thing because the light is lovely. Brewbeans fits into the day exactly as you need it to.</p>
            <div className="experience-list"><div><span>Wi-fi & work-friendly tables</span><span>01</span></div><div><span>Conversation-sized corners</span><span>02</span></div><div><span>Sweet things, always</span><span>03</span></div></div>
          </div>
        </section>

        <section className="visit-band" id="visit" aria-labelledby="visit-title">
          <div className="visit">
            <div className="visit-map" aria-label="Map showing Brewbeans in Gulshan-e-Iqbal"><span className="pin"><MapPin size={18} /></span></div>
            <div className="visit-copy">
              <span className="eyebrow">Come by anytime</span>
              <h2 id="visit-title">Visit<br /><em>Brewbeans</em></h2>
              <div className="visit-details">
                <div className="visit-detail"><MapPin size={16} /><span>Gulshan-e-Iqbal, Karachi<br />Your neighborhood, your new regular.</span></div>
                <div className="visit-detail"><Clock3 size={16} /><span>Open daily · 10:00 am — 1:00 am</span></div>
                <div className="visit-detail"><Phone size={16} /><span>+92 311 2463092</span></div>
              </div>
              <div className="visit-actions"><a className="button-solid" href="https://www.google.com/maps/search/?api=1&query=Brewbeans+Gulshan-e-Iqbal+Karachi" target="_blank" rel="noreferrer" data-testid="link-google-maps">Google Maps <MapPin size={14} /></a><a className="button-outline" href="https://www.foodpanda.pk/" target="_blank" rel="noreferrer" data-testid="link-foodpanda">Order on Foodpanda <ArrowUpRight size={14} /></a></div>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <span className="eyebrow">See you soon</span>
          <h2 id="final-title">Your Next Coffee Break Starts Here.</h2>
          <div className="hero-actions" style={{ justifyContent: 'center' }}><ScrollLink href="#menu" className="button-solid">View Menu <ArrowUpRight size={15} /></ScrollLink><a className="button-outline" href="https://www.google.com/maps/search/?api=1&query=Brewbeans+Gulshan-e-Iqbal+Karachi" target="_blank" rel="noreferrer" data-testid="link-final-directions">Get Directions <MapPin size={14} /></a></div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand"><Brand /><p>Coffee, conversation, and slow moments in Gulshan-e-Iqbal, Karachi.</p></div>
          <div className="footer-col"><div className="footer-title">Explore</div>{navItems.slice(0, 4).map((item) => <ScrollLink key={item.href} href={item.href}>{item.label}</ScrollLink>)}</div>
          <div className="footer-col"><div className="footer-title">Find us</div><p>Gulshan-e-Iqbal<br />Karachi, Pakistan</p><a href="tel:+923112463092" data-testid="link-footer-phone">+92 311 2463092</a></div>
          <div className="footer-col"><div className="footer-title">Keep in touch</div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-testid="link-instagram"><Instagram size={14} style={{ verticalAlign: 'middle', marginRight: 7 }} />Instagram</a><a href="https://www.foodpanda.pk/" target="_blank" rel="noreferrer" data-testid="link-footer-foodpanda">Foodpanda <ExternalLink size={11} style={{ verticalAlign: 'middle', marginLeft: 4 }} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2024 Brewbeans. Made for good moments.</span><span>Gulshan-e-Iqbal, Karachi</span></div>
      </footer>
    </div>
  );
}

export default App;