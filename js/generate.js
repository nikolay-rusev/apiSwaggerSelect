const apiPaths = {
  all: "/api/v1",
  8044: "/api/auth/v1", // userMngmnt
};
const swaggerPath = "/swagger-ui/index.html";
function generate() {
  let baseURL = document.getElementById("baseURL").value;
  let ipSuffix = document.getElementById("ipSuffix").value;
  let ports = document.getElementById("ports").value;
  let apiPathOutElement = document.getElementById("apiPathOut");
  let swaggerPathOutElement = document.getElementById("swaggerPathOut");

  let apiPathOut = baseURL + ipSuffix + ":" + ports + apiPaths["all"];
  if (ports === "8044") {
    apiPathOut = baseURL + ipSuffix + ":" + ports + apiPaths["8044"];
  }
  const swaggerPathOut = baseURL + ipSuffix + ":" + ports + swaggerPath;
  apiPathOutElement.href = apiPathOut;
  swaggerPathOutElement.href = swaggerPathOut;
  apiPathOutElement.text = apiPathOut;
  swaggerPathOutElement.text = swaggerPathOut;
}
