const env = process.env.REACT_APP_ENV || "SIT";

let config = {};

switch (env) {
  case "SIT":
    config = {
      env: "SIT",
      apiUrl: "https://sit.api.example.com"
    };
    break;

  case "UAT":
    config = {
      env: "UAT",
      apiUrl: "https://uat.api.example.com"
    };
    break;

  case "PROD":
    config = {
      env: "PROD",
      apiUrl: "https://prod.api.example.com"
    };
    break;

  default:
    config = {
      env: "SIT",
      apiUrl: "https://sit.api.example.com"
    };
}

export default config;
