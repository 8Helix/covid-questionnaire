export default {
  data() {
    return { pageNumber: this.$route.path };
  },
  mounted() {
    this.$data.pageNumber = setPageNumber(this.$route.path);
  },
};

function setPageNumber(path) {
  switch (path) {
    case '/identification':
      return 1;
    case '/questionnaire':
      return 2;
    case '/vaccination':
      return 3;
    case '/advice':
      return 4;
    default:
      return;
  }
}
