
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PolitiqueConfidentialite = () => {
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
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Politique de confidentialité</h1>
        <div className="prose prose-lg max-w-none">
          <p>Cette politique décrit la manière dont YUJI Restaurant collecte, utilise et protège vos données personnelles conformément au Règlement (UE) 2016/679 (RGPD).</p>

          <h2>Données collectées</h2>
          <ul>
            <li>Formulaire de réservation : nom, prénom, email, numéro de téléphone, date et heure souhaitées.</li>
            <li>Formulaire de contact : nom, email, message.</li>
            <li>Données de navigation : cookies analytiques anonymes.</li>
          </ul>

          <h2>Finalités et fondements juridiques</h2>
          <ul>
            <li>Gestion des réservations (exécution d'un contrat).</li>
            <li>Réponse aux demandes d'information (intérêt légitime du restaurant).</li>
            <li>Statistiques de fréquentation du site (consentement via bandeau cookies).</li>
          </ul>

          <h2>Durée de conservation</h2>
          <p>Les données de réservation sont conservées 12 mois ; les emails de contact 24 mois ; les cookies 13 mois maximum.</p>

          <h2>Destinataires</h2>
          <p>Seul le personnel habilité de YUJI Restaurant et notre prestataire d'hébergement accèdent à vos données.</p>

          <h2>Vos droits</h2>
          <p>Vous pouvez accéder, rectifier, supprimer ou limiter le traitement de vos données en écrivant à <a href="mailto:contact@yuji-restaurant.com">contact@yuji-restaurant.com</a>. Vous avez également le droit d'introduire une réclamation auprès de la CNIL.</p>

          <h2>Cookies</h2>
          <p>En poursuivant votre navigation, vous acceptez l'utilisation de cookies à des fins statistiques. Vous pouvez à tout moment les désactiver via les paramètres de votre navigateur.</p>

          <h2>Contact</h2>
          <p>Pour toute question relative à cette politique, contactez-nous à <a href="mailto:contact@yuji-restaurant.com">contact@yuji-restaurant.com</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
