const portsMapping = {
  rocSelAndIdb: "8001",
  ps: "8002",
  paiementsAndVirements: "8003",
  referentiels: "8004",
  hospiFactures: "8005",
  beneficiaire: "8007",
  intraitables: "8014",
  agregator: "8015",
  tpsFactures: "8017",
  tpAmcSelAndIdb: "8020",
  indus: "8023",
  userMngmnt: "8044",
};

const apiMappingHTTPS = {
  rocSelAndIdb: "/roc-api/v1",
  ps: "/ps-api/v1",
  paiementsAndVirements: "/paiement-api/v1",
  referentiels: "/referentiel-api/v1",
  hospiFactures: "/hospi-facturation-api/v1",
  beneficiaire: "/droits-beneficiaire-api/v1",
  intraitables: "/facturation-integration-api/v1",
  agregator: "/aggregator-api/v1",
  tpsFactures: "/tps-facturation-api/v1",
  tpAmcSelAndIdb: "/tp-amc-api/v1",
  indus: "/indu-api/v1",
  // userMngmnt: "8044",
};

// const baseURLHTTPS = "https://apim-dev-socle.azure-api.net";

const apiPaths = {
  all: "/api/v1",
  userMngmnt: "/api/auth/v1", // userMngmnt
};
const swaggerPath = "/swagger-ui/index.html";

function generate() {
  let baseURL = document.getElementById("baseURL").value;
  let baseURLHTTPS = document.getElementById("baseURLHTTPS").value;
  let ipSuffix = document.getElementById("ipSuffix").value;
  let port = document.getElementById("ports").value;
  let apiPathOutElement = document.getElementById("apiPathOut");
  let apiPathOutHTTPSElement = document.getElementById("apiPathOutHTTPS");
  let swaggerPathOutElement = document.getElementById("swaggerPathOut");

  let apiPathOut, apiPathOutHTTPS;
  let suffix = apiPaths["all"];
  let [match] = Object.keys(portsMapping).filter((k) => {
    return portsMapping[k] === port;
  });
  if (apiPaths[match]) {
    suffix = apiPaths[match];
  }
  apiPathOut = baseURL + ipSuffix + ":" + port + suffix;
  apiPathOutHTTPS = baseURLHTTPS + apiMappingHTTPS[match];

  const swaggerPathOut = baseURL + ipSuffix + ":" + port + swaggerPath;

  apiPathOutElement.href = apiPathOut;
  apiPathOutElement.text = apiPathOut;
  apiPathOutHTTPSElement.href = apiPathOutHTTPS;
  apiPathOutHTTPSElement.text = apiPathOutHTTPS;
  swaggerPathOutElement.href = swaggerPathOut;
  swaggerPathOutElement.text = swaggerPathOut;
}
