<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage <= 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <button class="page-link" @click="setCurrentPage(page)"> {{ page }} </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import state from '../store/state';

export default {
  name: "paginationPage",
  computed: {
    ...mapGetters(["totalPages"]),
    ...mapState(["currentPage"])
  },
  methods: {
    ...mapMutations(["setCurrentPage"]),
    prevPage() {
      if (state.currentPage > 1) {
        this.setCurrentPage(state.currentPage - 1);
      }
    },
    nextPage() {
      if (state.currentPage < this.totalPages) {
        this.setCurrentPage(state.currentPage + 1);
      }
    }
  },
};
</script>