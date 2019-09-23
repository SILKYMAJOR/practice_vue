Vue.filter('to_ascii', function (value) {
  let strhex = "";
  for (var i = 0; i < value.length; i++) {
    strhex += "0x" + value[i].charCodeAt(0).toString(16);
  }
  return strhex;
});

Vue.filter('filter_test_arg', function (value, arg) {
  return value + arg;
});
