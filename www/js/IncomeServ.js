angular.module('imoney.Incomserv', [])
  .factory('Incomserv', function() {
  return {
    doAdd: function(data) {
      var items=[
        {desc: data.desc,date : data.date, price: data.price}
      ];
      return items;
    }
  };
});
