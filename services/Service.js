import axios from "axios";
import API from "./API";
// const router = useRouter()

function fixUnathorized() {
  console.log('unathozired');
  localStorage.setItem('isLogged', false)
}

export default {
  async get(url, lang, token = null) {
    try {
      let headers = {
        "Accept-Language": lang,
      };

      if (token) {
        headers["Authorization"] = "Bearer " + token;
      }

      const res = await API().get(url, {
        headers,
      });
      return res.data;
    } catch (err) {
      if (err.response.status === 401) {
        fixUnathorized();
      }
    }
  },

  async post(url, lang, data, token = null) {
    try {
      let headers = {
        "Accept-Language": lang,
      };

      if (token) {
        headers["Authorization"] = "Bearer " + token;
      }

      const res = await API().post(url, data, {
        headers,
      });

      return res.data;
    } catch (err) {
      if (err.response.status === 401) {
        fixUnathorized();
      }
    }
  },
};
