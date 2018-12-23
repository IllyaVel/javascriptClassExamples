//JSON

//Load JSON to the local storage
JSONObject = '{"name":"Illya","age":10}';
const toStr = JSON.parse(JSONObject);
localStorage.setItem("Person",JSONObject);

//Open JSON from local storage
const txt = localStorage.getItem("Person");
const obj = JSON.parse(txt);
for(let keys in obj) {
    console.log(toStr[keys]);
}
