<template>
  <div class="mediaList">
    <div>
      <audio
        v-for="(file, key) in common"
        :id="file.id"
        :key="key"
        :src="`https://docs.google.com/uc?export=open&id=${file.src}`"
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
        :src="`https://docs.google.com/uc?export=open&id=${file.src}`"
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
        :src="`https://docs.google.com/uc?export=open&id=${file.src}`"
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
      { id: 'Bonjour', src: '1-K3w6B4OiVWZGscl0E4COiEBOwCXGXSe' },
      { id: 'Oui', src: '1-IL_gLDkUhZs1-bplJWwqyuN3ve4mGHm' },
      { id: 'e', src: '188iEgkju7kOx5aAXlI2aqtxMeugZqRex' },
      { id: 'e-voca1', src: '13cC-V4t0y3o-mSXF7hiK19QiMMEfY8Up' },
      { id: 'e-voca2', src: '13dMEwdjv8gS3nPOl9HUwflhNoZHqDI6f' },
      { id: 'e-aigue', src: '13a1To3Gtnu4IaKmEmvwZoXt32fFLDAFd' },
      { id: 'etoile', src: '13udYAySnVEaIs4VH2vBJJQWzYFc1rx6j' },
      { id: 'etude', src: '14-IOZObd0hxeRUYaLclJpBOImf-GfbQ_' },
      { id: 'etudier', src: '1472QXHQ55ojoDq3FCrpV5LikcSp-6Me4' },
      { id: 'e-grave', src: '15GsMSkAFKJ79XVjZLnhNbklie2YTzsIp' },
      { id: 'eau-grave', src: '1HanMVIGHNhlLzfPivV4Lpobeq9kjZk8k' },
      { id: 'e-circonflexe', src: '1OKQ8DPb8uiDE54hv_SlfzBvDkdCGTsHf' },
      { id: 'aeiou-circonflexe', src: '1cJijpQhOy-GqeQl-7_fvc2ryVq7cVeju' },
    ],
    positive: [
      { id: 'Merci', src: '1-H-5oG2z4FAg-KDWmnWQmNqWxieAb5mj' },
      { id: 'Bonsoir', src: '1-K4AtC_kweg6WYd364UPHVAzqk2BzVux' },
      { id: 'Non', src: '1-KlmR7wNQbsHoHqAihMWF6ZtOnFk1AMo' },
      { id: 'Café', src: '1-Ock0Ie8oVQdoBwAv43CVmGBeZZy_jHg' },
      { id: 'Entrée', src: '1-P8tc5I_EJ5Xz4JMlhmoJtnuqyFCcVn5' },
      { id: 'Sortie', src: '1-SoDa28Yd2caESw90KbCg-bSH3eWRDNr' },
      { id: 'Université', src: '1-XUiGdL8b94dg5mkaTeOcF536POfyx3t' },
      { id: 'chaise', src: '1-aBmStldnSccV9dbR_tl5dJnp2Dh17Gq' },
      { id: 'S\'il vous plaît', src: '13FOb-bPL406FUdK7yAs3IRq6hV36mEE0' },
      { id: 'maison', src: '1-cpklAzLFHhM6yLWUb1W8303VvbDrBKG' },
      { id: 'métro', src: '1-jhWm7D7zlhVhJsvdKyy01zSpj87lvQ-' },
      { id: 'thé', src: '1-k0s6oGpsPB2AaoLwr--hu1lSsn1TYr9' },
      { id: 'téléphone', src: '1-sD2piYpE9YcBSO97veb2NJN2X4Ssbiu' },
      { id: 'toilette', src: '1-vVnqrypBfiWIL4XgjF7t6VXH33Z6lQg' },
      { id: 'taxi', src: '1-vXROgspVhFVRER-nKkvbAWqq1JWx0os' },
      { id: 'Excusez-moi', src: '139kfmFS_ki06XB-C02ueVFMdFIxNpdpN' },
      { id: 'bonheur', src: '1-y1M6ZbxK-YCr5OgDDfGyttsNKSE_GkG' },
      { id: 'auteur', src: '1-yXDo8AFX_RAGmMAD9ubz_YJZ0w_i-8r' },
      { id: 'ail', src: '103pgEtpYX0GIHoQNP71IOH97HSKfKZLz' },
      { id: 'saison', src: '10CD001eDyzc6Mn7lqNTYAE6Z663DD27K' },
    ],
    negative: [
      { id: 'Excusez-moi', src: '139kfmFS_ki06XB-C02ueVFMdFIxNpdpN' },
      { id: 'Enchanté', src: '10NXZnrIKbqzINbXr5xzkbIcGsSnclpv9' },
      { id: 'entrée', src: '1-P8tc5I_EJ5Xz4JMlhmoJtnuqyFCcVn5' },
      { id: 'sortie', src: '1-SoDa28Yd2caESw90KbCg-bSH3eWRDNr' },
      { id: 'chaise', src: '10QQJn7hkDJ2PQ5eClQp-11nxQ3V50Hyj' },
      { id: 'S\'il vous plaît', src: '13FOb-bPL406FUdK7yAs3IRq6hV36mEE0' },
      { id: 'Au revoir', src: '13HRbvB6C_xQV0Y7V5i6NlfulcvuQppom' },
      { id: 'dire', src: '10ZAPYn6FFWHNxO7tCLPC8pvarH_LxmCo' },
      { id: 'sourire', src: '10bAewIasjrRPavFP_az2zjy9rE8yvyaN' },
      { id: 'parler', src: '10cPu_wtpfsAiumkUUAljpahtYjmGYJ_z' },
      { id: 'se dire', src: '13MkyvdKfCAGdCyc9z7E3uGeuEc5OdDQi' },
      { id: 'savoir', src: '10s9MGriIykVZREghGcicphl7vNIcXrXz' },
      { id: 'penser', src: '10wDy11NXrlQ_qJZR3zVuVNT_7XmLKn2r' },
      { id: 'manger', src: '10xE8S7atpThMWe7k82pN71_FMsqLlr8l' },
      { id: 'arbre', src: '114Hu7YaUhu5ZsvVW5bm11bqIbOSuBhti' },
      { id: 'savourer', src: '118xylHaBZDxpWYiUTwNT2auw43-Dcf-Z' },
      { id: 'aller', src: '11M4olucFPkMVFIWj8WTMlUA10mB7G_-I' },
      { id: 'déguster', src: '11Myaaf7w8d_KqczXUZu4jh6JaEbR7IAN' },
      { id: 'rideau', src: '11OuyIbW4Rd-bv1Pu9ZUReimIRZBtO_tI' },
      { id: 'dormir', src: '11Srx41cO4rWZOJr0Q3Z3E_9BvV7kyy3h' },
      { id: 'mettre', src: '11TuUKoSOsHtsBKJ9EkLPkLb744hxyeNn' },
      { id: 'connaître', src: '11YITFkLS8g3LHxUkFZLOtT4xf1dFw90_' },
      { id: 'venir', src: '11Z0ZzkvtnOb1iY-M6VLIMdjAO5Qwi1UM' },
      { id: 'dérider', src: '11_Ig5deqAUuKlcpM3i0JtCJPd2q0Er8A' },
      { id: 'Bienvenue', src: '11b4djoG03d5Kmtwo-RcQH6iRn56UC-RJ' },
      { id: 'raffine', src: '11gVrI9YyJJBWI7lanjrq2Lt9RC5Ise3N' },
      { id: 'tendresse', src: '11hmOzlDuB3iIbeD3D-J429MS7zGTNcWB' },
      { id: 'lisse', src: '11kGiNCiQvQN1776AHMFb0nKO5ruOm66b' },
      { id: 'réconforté', src: '13SlEXglA1GdVzwfavuriES6xTZuAyaVX' },
      { id: 'fêter', src: '11l12CFNk1HFBXyv-uRETJXdoj0olJBcH' },
      { id: 'joyeux', src: '12-LDM4SV5nI5WS359U1dweaVwDculrYt' },
      { id: 'heureux', src: '12-kPR3iUZ2MZ1umf1y_exsV8nNwNZEgJ' },
      { id: 'poisson', src: '121vrrxg9cjE1NvqrPvFBHLFKAQLn2X-a' },
      { id: 'fraise', src: '12EZtUuviqjTYTXCIS3MGSbnUyLNMIL-H' },
      { id: 'alimentaire', src: '12ErOanCzNB6x7_rNBz-0dHCDD44oBybn' },
      { id: 'quelque', src: '12L2wMzKCOPdWgX_FTprvPjoKEJuaj2hK' },
      { id: 'fenêtre', src: '12LTcSlLjzutUTAWiGM4AQBN7wGHawK3x' },
      { id: 'chambre', src: '12OMAiA2e2u9xW71MyxFZf8hcM0QPwbkm' },
      { id: 'premier', src: '12bglqD9eAZcsIJzBkUXnBbkloo-p-73U' },
      { id: 'derrière', src: '12eA2a-m27qaJnRd9RIB6dfnxEU0yAcVG' },
      { id: 'ranger', src: '12k66jKFqh-HChhsyXmSJKGGgkeNrLlCv' },
      { id: 'jouer', src: '12lj5Y_US6qywASTTf-UAq8mZTDqvbekR' },
      { id: 'l\'avant', src: '13TPe6tScUNZVnu3yZrV0031j13ogftY3' },
      { id: 'laver', src: '12rNM_4tvvKBdOJeVAWkX54LSQGemiRp9' },
      { id: 'verrière', src: '12z7QwtTQXGnDrOcSkJKst7S11gB7dCbE' },
      { id: 'bonheur', src: '1-y1M6ZbxK-YCr5OgDDfGyttsNKSE_GkG' },
      { id: 'poubelle', src: '1305SbJUbqu_ouEq5ZOIzT_sjHi1OzAkx' },
      { id: 'réjouir', src: '131LITa-UCE7PEF9sUVTzg4VBCEhaBgcb' },
      { id: 'féliciter', src: '133FT83x8d7J7MSTZ4viAmjkUetY9GFg1' },
      { id: 'cuiller', src: '139M01IsHLXhnrwC9_gJe0DlUP-z6klh8' },
    ],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },
};
</script>
