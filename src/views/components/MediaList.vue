<template>
  <div class="mediaList">
    <div>
      <audio
        v-for="(file, key) in common"
        :id="file.id"
        :key="key"
        :src="require(`@/assets/audios/${file.src}.mp3`)"
        preload="auto"
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>

    <div v-if="condition === '1' || condition === '3'">
      <audio
        v-for="(file, key) in positive"
        :id="file.id"
        :key="key"
        :src="require(`@/assets/audios/${file.src}.mp3`)"
        preload="auto"
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>

    <div v-if="condition === '2' || condition === '4'">
      <audio
        v-for="(file, key) in negative"
        :id="file.id"
        :key="key"
        :src="require(`@/assets/audios/${file.src}.mp3`)"
        preload="auto"
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    common: [
      { id: 'Bonjour', src: 't0-01-bonjour' },
      { id: 'Oui', src: 't0-02-oui' },
      { id: 'e', src: '3-1-1-e' },
      { id: 'e-voca1', src: '3-1-2-e-voca-1' },
      { id: 'e-voca2', src: '3-1-3-e-voca-2' },
      { id: 'e-aigue', src: '3-2-1-e+aigue' },
      { id: 'etoile', src: '3-2-3-etoile' },
      { id: 'etude', src: '3-2-3-etude' },
      { id: 'etudier', src: '3-2-3-etudier' },
      { id: 'e-grave', src: '3-3-1-e+grave' },
      { id: 'eau-grave', src: '3-3-2-aeu+grave' },
      { id: 'e-circonflexe', src: '3-4-1-e+circonflexe' },
      { id: 'aeiou-circonflexe', src: '3-4-2-aeiou+circonflexe' },
    ],
    positive: [
      { id: 'Merci', src: 't1-01-merci' },
      { id: 'Bonsoir', src: 't1-02-bonsoir' },
      { id: 'Non', src: 't1-03-non' },
      { id: 'Café', src: 't1-04-cafe' },
      { id: 'Entrée', src: 't1-05-entree' },
      { id: 'Sortie', src: 't1-06-sortie' },
      { id: 'Université', src: 't1-07-universite' },
      { id: 'chaise', src: 't1-08-chaise' },
      { id: 'S\'il vous plaît', src: 't1-09-sil+vous+plat' },
      { id: 'maison', src: 't1-10-maison' },
      { id: 'métro', src: 't2-01-metro' },
      { id: 'thé', src: 't2-02-the' },
      { id: 'téléphone', src: 't2-03-telephone' },
      { id: 'toilette', src: 't2-04-toilette' },
      { id: 'taxi', src: 't2-05-taxi' },
      { id: 'Excusez-moi', src: 't2-06-excusez-moi' },
      { id: 'bonheur', src: 't2-07-bonheur' },
      { id: 'auteur', src: 't2-08-auteur' },
      { id: 'ail', src: 't2-09-ail' },
      { id: 'saison', src: 't2-10-saison' },
    ],
    negative: [
      { id: 'Excusez-moi', src: 't2-06-excusez-moi' },
      { id: 'Enchanté', src: 't3-02-enchante' },
      { id: 'entrée', src: 't1-05-entree' },
      { id: 'sortie', src: 't1-06-sortie' },
      { id: 'chaise', src: 't3-05-chaise' },
      { id: 'S\'il vous plaît', src: 't1-09-sil+vous+plat' },
      { id: 'Au revoir', src: 't3-07-au+revoir' },
      { id: 'dire', src: 't3-08-dire' },
      { id: 'sourire', src: 't3-09-sourire' },
      { id: 'parler', src: 't3-10-parler' },
      { id: 'se dire', src: 't3-11-se+dire' },
      { id: 'savoir', src: 't3-12-savoir' },
      { id: 'penser', src: 't3-13-penser' },
      { id: 'manger', src: 't3-14-manger' },
      { id: 'arbre', src: 't3-15-arbre' },
      { id: 'savourer', src: 't3-16-savourer' },
      { id: 'aller', src: 't3-17-aller' },
      { id: 'déguster', src: 't3-18-deguster' },
      { id: 'rideau', src: 't3-19-rideau' },
      { id: 'dormir', src: 't3-20-dormir' },
      { id: 'mettre', src: 't3-21-mettre' },
      { id: 'connaître', src: 't3-22-connaitre' },
      { id: 'venir', src: 't3-23-venir' },
      { id: 'dérider', src: 't3-24-derider' },
      { id: 'Bienvenue', src: 't3-25-bienvenue' },
      { id: 'raffine', src: 't4-01-raffine' },
      { id: 'tendresse', src: 't4-02-tendresse' },
      { id: 'lisse', src: 't4-03-lisse' },
      { id: 'réconforté', src: 't4-04-reconforte' },
      { id: 'fêter', src: 't4-05-feter' },
      { id: 'joyeux', src: 't4-06-joyeux' },
      { id: 'heureux', src: 't4-07-heureux' },
      { id: 'poisson', src: 't4-08-poisson' },
      { id: 'fraise', src: 't4-09-fraise' },
      { id: 'alimentaire', src: 't4-10-alimentaire' },
      { id: 'quelque', src: 't4-11-quelque' },
      { id: 'fenêtre', src: 't4-12-fenetre' },
      { id: 'chambre', src: 't4-13-chambre' },
      { id: 'premier', src: 't4-14-premier' },
      { id: 'derrière', src: 't4-15-derriere' },
      { id: 'ranger', src: 't4-16-ranger' },
      { id: 'jouer', src: 't4-17-jouer' },
      { id: 'l\'avant', src: 't4-18-l+avant' },
      { id: 'laver', src: 't4-19-laver' },
      { id: 'verrière', src: 't4-20-verriere' },
      { id: 'bonheur', src: 't2-07-bonheur' },
      { id: 'poubelle', src: 't4-22-poubelle' },
      { id: 'réjouir', src: 't4-23-rejouir' },
      { id: 'féliciter', src: 't4-24-feliciter' },
      { id: 'cuiller', src: 't4-25-cuiller' },
    ],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },
};
</script>
