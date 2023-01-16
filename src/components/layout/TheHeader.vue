<template>
  <header class="header">
    <img src="assets/images/redberry.png" alt="redberry logo" />
    <span class="page-numbers">{{ pageNumber }}/4</span>
  </header>
</template>

<script>
import setPageNumber from '../../mixins/setPageNumber.js';

export default {
  mixins: [setPageNumber],
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  width: 79.2vw;
  background-color: #eaeaea;
  align-items: center;
  justify-content: space-between;
  padding: 97px 0 23px 0;
  border-bottom: 1.8px solid var(--black);
}

.page-numbers {
  font-family: 'Anonymous Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: var(--black);
}
</style>
