/*
 * Liste des plateformes Polyvera.
 * Pour ajouter un site : copier un bloc ci-dessous, le coller à la fin de la liste,
 * puis modifier les champs. La page (cartes, liens, pied de page, compteur) se met à jour seule.
 *
 *  name   : nom affiché
 *  url    : adresse complète du site
 *  tag    : petite étiquette de catégorie
 *  desc   : description courte
 *  points : 2 à 4 points clés
 *  color / color2 : couleurs de la carte (dégradé)
 *  svg    : (facultatif) illustration SVG ; à défaut, la première lettre du nom est affichée
 */
window.SITES = [
  {
    name: 'Cabane à Maths',
    url: 'https://cabanemaths.fr',
    tag: 'Éducation · Mathématiques',
    desc: 'Apprendre les mathématiques facilement, avec des explications claires, des méthodes visuelles et des exercices pour progresser à son rythme.',
    points: ['Cours et méthodes accessibles', 'Exercices et activités ludiques', 'Pour le collège et le lycée'],
    color: '#fbbf24', color2: '#f97316',
    svg: `<svg viewBox="0 0 240 150"><path d="M40 120 120 36l80 84z" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="3" stroke-linejoin="round"/><rect x="62" y="82" width="116" height="38" rx="3" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="3"/><rect x="106" y="92" width="28" height="28" rx="14 14 0 0" fill="#fbbf24" opacity=".8"/><text x="120" y="76" text-anchor="middle" font-family="Fraunces,serif" font-size="26" fill="#fff">x² + y² = z²</text></svg>`
  },
  {
    name: 'Coup du Code',
    url: 'https://coupducode.fr',
    tag: 'Code de la route · Arabophones',
    desc: "Simplifier l'apprentissage du code de la route pour les migrants arabophones en France, grâce à des contenus adaptés et une application Android.",
    points: ["Apprentissage adapté à l'arabe", 'Application Android « Coup du Code »', "Entraînement pas à pas à l'examen"],
    color: '#34d399', color2: '#06b6d4',
    svg: `<svg viewBox="0 0 240 150"><circle cx="120" cy="75" r="46" fill="rgba(52,211,153,.1)" stroke="#34d399" stroke-width="3"/><circle cx="120" cy="75" r="36" fill="none" stroke="#ef4444" stroke-width="6" opacity=".9"/><path d="M100 75h40" stroke="#fff" stroke-width="7" stroke-linecap="round"/><text x="120" y="140" text-anchor="middle" font-family="'Noto Naskh Arabic',serif" font-size="20" fill="#d1fae5">قانون السير</text></svg>`
  },
  {
    name: 'Hirondelles',
    url: 'https://hirondelles.org',
    tag: 'Vie administrative & sociale',
    desc: 'Simplifier la vie administrative et sociale des personnes migrantes en France : comprendre ses droits, ses démarches et trouver les bonnes ressources.',
    points: ['Guides de démarches pas à pas', 'Information claire sur les droits', 'Orientation vers les bons interlocuteurs'],
    color: '#38bdf8', color2: '#6366f1',
    svg: `<svg viewBox="0 0 240 150"><path d="M20 100c30-8 55-32 80-56 6 14 16 22 32 24 24-22 52-30 88-22-30 6-46 22-60 44-4 8-12 12-22 12-14 0-20-10-30-4-24 14-50 14-88 2z" fill="rgba(56,189,248,.14)" stroke="#38bdf8" stroke-width="3" stroke-linejoin="round"/><path d="M100 44c-6-14-2-26 10-34" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/><circle cx="118" cy="62" r="3.2" fill="#fff"/></svg>`
  },
  {
    name: 'Tradiexpress',
    url: 'https://tradiexpress.fr',
    tag: 'Traduction assermentée',
    desc: 'La plateforme qui met en relation des traducteurs assermentés et leurs clients, pour des traductions officielles fiables, rapides et sans complication.',
    points: ['Traducteurs assermentés vérifiés', 'Mise en relation simple et directe', 'Documents officiels et administratifs'],
    color: '#f472b6', color2: '#a855f7',
    svg: `<svg viewBox="0 0 240 150"><rect x="34" y="34" width="86" height="64" rx="12" fill="rgba(244,114,182,.14)" stroke="#f472b6" stroke-width="3"/><rect x="120" y="58" width="86" height="64" rx="12" fill="rgba(168,85,247,.16)" stroke="#a855f7" stroke-width="3"/><text x="77" y="76" text-anchor="middle" font-family="Fraunces,serif" font-size="30" font-weight="700" fill="#fff">A</text><text x="163" y="102" text-anchor="middle" font-family="'Noto Naskh Arabic',serif" font-size="32" font-weight="700" fill="#fff">ع</text><path d="M92 118c10 8 24 8 34 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`
  }
];
