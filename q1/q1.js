function Class(name, unit, capacity) {
  this.className = name;
  this.classUnit = unit;
  this.classCapacity = capacity;
}

function showObject(obj) {
  var result = "//return\n{";
  for (var key in obj) {
    var value = obj[key];
    if (result == "//return\n{") {
      result += key + ":" + value;
    } else {
      result += "," + key + ":" + value;
    }
  }
  result += "}";
  console.log(result);
}

const softEngineeringClass = new Class("softEngineering", 3, 50);
const networkClass = new Class("network", 3, 30);

showObject(softEngineeringClass);
showObject(networkClass);

softEngineeringClass.book = "clean code";
networkClass.project = true;

showObject(softEngineeringClass);
showObject(networkClass);
