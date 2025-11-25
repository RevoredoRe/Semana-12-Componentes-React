import React, { useState } from 'react';

// ============ COMPONENTE: Header ============
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <h1 style={styles.logo}>MeuSite</h1>
        <Navigation />
      </div>
    </header>
  );
};

const styles_header = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: 0,
  }
};

// ============ COMPONENTE: Navigation ============
const Navigation = () => {
  const menuItems = ['Início', 'Sobre', 'Serviços', 'Contato'];
  
  return (
    <nav style={styles_nav.nav}>
      <ul style={styles_nav.navList}>
        {menuItems.map((item, index) => (
          <li key={index} style={styles_nav.navItem}>
            <a href={`#${item.toLowerCase()}`} style={styles_nav.navLink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles_nav = {
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
    cursor: 'pointer',
  }
};

// ============ COMPONENTE: Button (3 variações) ============
const Button = ({ children, variant = 'primary', onClick }) => {
  const buttonStyles = {
    ...styles_button.base,
    ...styles_button[variant]
  };
  
  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

const styles_button = {
  base: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  primary: {
    backgroundColor: '#3498db',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#2ecc71',
    color: 'white',
  },
  danger: {
    backgroundColor: '#e74c3c',
    color: 'white',
  }
};

// ============ COMPONENTE: Card (2 variações) ============
const Card = ({ title, description, image, type = 'default' }) => {
  const cardStyles = type === 'featured' ? 
    { ...styles_card.card, ...styles_card.featured } : 
    styles_card.card;
  
  return (
    <div style={cardStyles}>
      {image && (
        <div style={styles_card.imageContainer}>
          <div style={{...styles_card.imagePlaceholder, backgroundColor: image}} />
        </div>
      )}
      <div style={styles_card.cardContent}>
        <h3 style={styles_card.cardTitle}>{title}</h3>
        <p style={styles_card.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

const styles_card = {
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  featured: {
    border: '3px solid #3498db',
    boxShadow: '0 6px 12px rgba(52,152,219,0.3)',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#2c3e50',
  },
  cardDescription: {
    color: '#7f8c8d',
    lineHeight: '1.6',
  }
};

// ============ COMPONENTE: Snackbar ============
const Snackbar = ({ message, type = 'info', onClose }) => {
  const snackbarStyles = {
    ...styles_snackbar.snackbar,
    ...styles_snackbar[type]
  };
  
  return (
    <div style={snackbarStyles}>
      <span style={styles_snackbar.message}>{message}</span>
      <button style={styles_snackbar.closeButton} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

const styles_snackbar = {
  snackbar: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    animation: 'slideIn 0.3s ease',
    zIndex: 1000,
  },
  info: {
    backgroundColor: '#3498db',
  },
  success: {
    backgroundColor: '#2ecc71',
  },
  error: {
    backgroundColor: '#e74c3c',
  },
  message: {
    fontSize: '1rem',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0',
  }
};

// ============ COMPONENTE: Badge ============
const Badge = ({ text, color = '#3498db' }) => {
  return (
    <span style={{...styles_badge.badge, backgroundColor: color}}>
      {text}
    </span>
  );
};

const styles_badge = {
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '600',
  }
};

// ============ COMPONENTE: Footer ============
const Footer = () => {
  return (
    <footer style={styles_footer.footer}>
      <div style={styles_footer.footerContent}>
        <div style={styles_footer.footerSection}>
          <h3 style={styles_footer.footerTitle}>Sobre Nós</h3>
          <p style={styles_footer.footerText}>
            Criando componentes React reutilizáveis e elegantes.
          </p>
        </div>
        <div style={styles_footer.footerSection}>
          <h3 style={styles_footer.footerTitle}>Contato</h3>
          <p style={styles_footer.footerText}>email@exemplo.com</p>
          <p style={styles_footer.footerText}>+55 (11) 1234-5678</p>
        </div>
        <div style={styles_footer.footerSection}>
          <h3 style={styles_footer.footerTitle}>Redes Sociais</h3>
          <p style={styles_footer.footerText}>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div style={styles_footer.footerBottom}>
        <p style={styles_footer.copyright}>© 2025 MeuSite. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

const styles_footer = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    marginTop: '4rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  footerSection: {
    marginBottom: '1rem',
  },
  footerTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  footerText: {
    color: '#bdc3c7',
    marginBottom: '0.5rem',
    lineHeight: '1.6',
  },
  footerBottom: {
    borderTop: '1px solid #34495e',
    padding: '1.5rem 2rem',
    textAlign: 'center',
  },
  copyright: {
    color: '#95a5a6',
    margin: 0,
  }
};

// ============ COMPONENTE PRINCIPAL: App ============
const App = () => {
  const [snackbar, setSnackbar] = useState(null);

  const showSnackbar = (message, type) => {
    setSnackbar({ message, type });
    setTimeout(() => setSnackbar(null), 3000);
  };

  return (
    <div style={styles.container}>
      <Header />
      
      <main style={styles.main}>
        {/* Seção Hero */}
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Bem-vindo ao Site de Componentes React</h2>
          <p style={styles.heroSubtitle}>
            Explore nossos componentes personalizados e reutilizáveis
          </p>
          <div style={styles.heroButtons}>
            <Button variant="primary" onClick={() => showSnackbar('Botão primário clicado!', 'info')}>
              Começar Agora
            </Button>
            <Button variant="secondary" onClick={() => showSnackbar('Ação bem-sucedida!', 'success')}>
              Saiba Mais
            </Button>
            <Button variant="danger" onClick={() => showSnackbar('Atenção necessária!', 'error')}>
              Cancelar
            </Button>
          </div>
        </section>

        {/* Seção de Cards */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Nossos Serviços</h2>
          <div style={styles.cardGrid}>
            <Card
              type="featured"
              title="Design Responsivo"
              description="Criamos interfaces que se adaptam perfeitamente a qualquer dispositivo."
              image="#9b59b6"
            />
            <Card
              title="Componentes Reutilizáveis"
              description="Código modular e fácil de manter para seus projetos."
              image="#3498db"
            />
            <Card
              title="Performance Otimizada"
              description="Aplicações rápidas e eficientes para melhor experiência do usuário."
              image="#2ecc71"
            />
          </div>
        </section>

        {/* Seção de Badges */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tecnologias Utilizadas</h2>
          <div style={styles.badgeContainer}>
            <Badge text="React" color="#61dafb" />
            <Badge text="JavaScript" color="#f7df1e" />
            <Badge text="CSS3" color="#264de4" />
            <Badge text="HTML5" color="#e34c26" />
            <Badge text="TypeScript" color="#3178c6" />
          </div>
        </section>
      </main>

      <Footer />

      {/* Snackbar */}
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}
    </div>
  );
};

const styles = {
  ...styles_header,
  container: {
    minHeight: '100vh',
    backgroundColor: '#ecf0f1',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 0',
  },
  heroTitle: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '2rem',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  section: {
    padding: '3rem 0',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  badgeContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default App;