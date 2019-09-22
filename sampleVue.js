let humanModel = {
  uid: 1001,
  name: "silky",
  hobby: "Music"
}

let instrumentModel = {
  name: "guitar",
  category: "stringed instrument"
}

let oneWayModel = new Vue({
  el: '#one_way',
  data: instrumentModel
})

let twoWayModel = new Vue({
  el: '#two_way',
  data: humanModel
})
