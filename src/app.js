/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'test_viking',
  searchClient: algoliasearch('GRBQWTRZK3', '7d6295408b07d0fac47f9f4f4082d107'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
