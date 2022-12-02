const CrUXApiUtil = {};
// Get your CrUX API key at https://goo.gle/crux-api-key.
CrUXApiUtil.API_KEY = "AIzaSyATt4WwQvr_5STQ6Qcv8k3bimRk_xInfac";
CrUXApiUtil.API_ENDPOINT = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${CrUXApiUtil.API_KEY}`;
CrUXApiUtil.query = function (requestBody) {
  if (CrUXApiUtil.API_KEY === "AIzaSyATt4WwQvr_5STQ6Qcv8k3bimRk_xInfac") {
    console.log("success");
  }
  return fetch(CrUXApiUtil.API_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(requestBody)
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response);
      }
      return response;
    });
};

function CallMe() {
  CrUXApiUtil.query({
    origin: "https://web.dev"
  })
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.error(response);
    });
}
