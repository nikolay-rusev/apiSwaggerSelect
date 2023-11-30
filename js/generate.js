function generate() {
  let separator = document.getElementById("separator").value || ",";
  let idSeparator = document.getElementById("idSeparator").value || ";";
  let content = document.getElementById("content").value;
  let output = document.getElementById("output");
  let classifier = document.getElementById("classifier").value || "classifier";
  let value = document.getElementById("value").value || "value";
  let label = document.getElementById("label").value || "label";
  let list = content.split(separator);
  let entities = [];
  for (let i = 0; i < list.length; i++) {
    let el = list[i].trim();
    if (el.indexOf(idSeparator) > -1) {
      let [id, label, _] = el.split(idSeparator);
      entities.push(`{
                    "properties": {
                        "id": "${id}",
                        "label": "${label}"
                    }
                 }`);
    } else {
      entities.push(`{
                    "properties": {
                        "id": "${i}",
                        "label": "${el}"
                    }
                 }`);
    }
  }
  output.value = `{
              "class": ["${classifier}"],
              "properties": {
                  "label": "${label}",
                  "value": ["${value}"]
              },
              "entities": [
                  {
                      "class": ["enum"],
                      "entities": [${entities.join(",")}]
                  }
              ]
          }`;
}
