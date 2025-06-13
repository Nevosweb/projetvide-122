
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MentionsLegales = () => {
  // Add meta robots tag to prevent indexing
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex';
    document.head.appendChild(metaRobots);
    
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Mentions légales</h1>
        <div className="prose prose-lg max-w-none">
          <h2>Éditeur du site</h2>
          <p>Raison sociale : YIJI Restaurant – SARL<br />
          Siège social : 12 rue du Commerce, 75015 Paris<br />
          SIRET : 123 456 789 00012<br />
          Directeur de la publication : Tanaka Hiroshi, Gérant</p>

          <h2>Hébergement</h2>
          <p>Hébergeur : Lovable Inc. – 123 Web Street, San Francisco, CA 94107 – Téléphone : +1 555-123-4567</p>

          <h2>Contact</h2>
          <p>Email : <a href="mailto:contact@yiji-restaurant.com">contact@yiji-restaurant.com</a> – Tél. : 01 23 45 67 89</p>

          <h2>Propriété intellectuelle</h2>
          <p>Tout le contenu (textes, images, logos) est la propriété exclusive de YIJI Restaurant, sauf mention contraire.<br />
          Toute reproduction ou représentation, intégrale ou partielle, est interdite sans autorisation écrite préalable.</p>

          <h2>Responsabilité</h2>
          <p>L'éditeur met tout en œuvre pour assurer l'exactitude des informations, mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
