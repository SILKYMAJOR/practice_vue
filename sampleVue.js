// #two_way -------------------
let humanModel = {
    name: "silky",
    hobby: "music"
};

let twoWayModel = new Vue({
    el: '#two_way',
    data: humanModel
});

// #one_way -------------------
let instrumentModel = {
    name: "guitar",
    instrument: "stringed instrument"
};

let oneWayModel = new Vue({
    el: '#one_way',
    data: instrumentModel
});

// #filter -------------------
let stringModel = {
    str: "string"
};

let filterModel = new Vue({
    el: '#filter',
    data: stringModel
});

// #filter arg-------------------
let filterArgModel = new Vue({
    el: '#filter_arg',
    data: {
      str: "arg",
      arg: 1
    }
});
