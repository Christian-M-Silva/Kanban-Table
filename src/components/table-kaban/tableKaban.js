import vueKanban from 'vue-kanban'
import Vue from 'vue'
Vue.use(vueKanban)
export default {
  name: "tableKaban",
  data() {
    return {
      stages: ["Vilão", "Anti-herói", "Vigilante", "Herói"],
      blocks: [
        {
          id: 0,
          status: "Vigilante",
          name: "Batman",
          identitySecret: "Bruce Wayne",
          city: "Gotham",
          mainEnemy: "Joker",
        },
        {
          id: 1,
          status: "Herói",
          name: "Superman",
          identitySecret: "Clark Kent",
          city: "Metropolis",
          mainEnemy: "Lex Luthor",
        },
        {
          id: 2,
          status: "Vilão",
          name: "Joker",
          identitySecret: "unknown",
          city: "Gotham",
          mainEnemy: "Batman",
        },
        {
          id: 3,
          status: "Anti-herói",
          name: "Cat-Woman",
          identitySecret: "Selina Kyle",
          city: "Gotham",
          mainEnemy: "Batman",
        },
        {
          id: 4,
          status: "Vilão",
          name: "Riddler",
          identitySecret: "Edward Nygma",
          city: "Gotham",
          mainEnemy: "Batman",
        },
      ],
      itens: [
        { quantity: '' },
        { quantity: '' },
        { quantity: '' },
        { quantity: '' },
      ]
    }
  },

  methods: {
    updateBlock(id, status) {
      //O id representa o id d card que estou mexendo
      //O status é o stage atual que estou colocando o card
      this.blocks[id].status = status
      let teste = []

      this.blocks.forEach(el => {
        return teste.push(el.status)
      });



      let totais = {};
      teste.forEach(x => {
        totais[x] = (totais[x] || 0) + 1;
      });


      this.itens[0].quantity = (totais["Vilão"] || 0)
      this.itens[1].quantity = (totais["Anti-herói"] || 0)
      this.itens[2].quantity = (totais["Vigilante"] || 0)
      this.itens[3].quantity = (totais["Herói"] || 0)
    }
  }
};