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
      items: []
    }
  },

  methods: {
    updateBlock(id, stage) {
      this.items = []
      //O id representa o id d card que estou mexendo
      //O status é o stage atual que estou colocando o card
      this.blocks[id].status = stage //Aqui estou fazendo que o o meu card que estou mexendo tenha o status dele atualizado para o status ou stage
      this.statusQuantity()
    },
    statusQuantity() {
      this.blocks.forEach(el => {
        this.items.push(
          {
            status: el.status
          }
        )
      });
    }
  },

  created() {
    this.statusQuantity()
  }
};