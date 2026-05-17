document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("table").forEach(function (table) {
    // eslint-disable-next-line no-undef
    new Tablesort(table);
  });
});

