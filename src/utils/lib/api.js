import axios from "axios";
import Cookies from "js-cookie";
import { useGeolocated } from "react-geolocated";

export function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export async function getIPDetails() {
  const ipResponse = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipResponse.json();
  const ip = ipData.ip;

  const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
  const locationData = await locationResponse.json();

  return {
    ipAddress: ip,
    city: locationData.city,
    regionName: locationData.region,
    country: locationData.country_name,
    countryCode: locationData.country,
  };
}

export function getOSInfo() {
  const userAgent = navigator.userAgent;
  let osName = "Unknown OS";
  let osVersion = "";

  if (/windows nt 10.0/i.test(userAgent)) {
    osName = "Windows";
    osVersion = "10";
  } else if (/windows nt 6.3/i.test(userAgent)) {
    osName = "Windows";
    osVersion = "8.1";
  } else if (/windows nt 6.2/i.test(userAgent)) {
    osName = "Windows";
    osVersion = "8";
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    osName = "Mac OS";
    osVersion = userAgent
      ?.match(/mac os x (\d+([_\.]\d+)*)/i)
      ["1"]?.replace(/_/g, ".");
  } else if (/android/i.test(userAgent)) {
    osName = "Android";
    osVersion = userAgent.match(/android (\d+([_\.]\d+)*)/i)[1];
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    osName = "iOS";
    osVersion = userAgent
      .match(/os (\d+([_\.]\d+)*) like mac os x/i)[1]
      .replace(/_/g, ".");
  }

  return {
    osName,
    osVersion,
  };
}

export async function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "";
  let browserVersion = "";

  if (/firefox|fxios/i.test(userAgent)) {
    browserName = "Firefox";
    browserVersion = userAgent.match(/firefox\/(\d+)/i)[1];
  } else if (/chrome|crios/i.test(userAgent)) {
    browserName = "Chrome";
    browserVersion = userAgent.match(/chrome\/(\d+)/i)[1];
  } else if (/safari/i.test(userAgent)) {
    browserName = "Safari";
    browserVersion = userAgent.match(/version\/(\d+)/i)[1];
  } else if (/msie|trident/i.test(userAgent)) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/(?:msie |rv:)(\d+)/i)[1];
  } else if (/edg/i.test(userAgent)) {
    browserName = "Edge";
    browserVersion = userAgent.match(/edg\/(\d+)/i)[1];
  }

  const browserInfo = {
    browserName,
    browserVersion,
  };

  localStorage.setItem("browserInfo", JSON.stringify(browserInfo));

  return browserInfo;
}

export const postAPI = async (url, data, customHeaders) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };

    // Only add custom headers if they exist
    if (customHeaders && Object.keys(customHeaders).length > 0) {
      headers = { ...headers, ...customHeaders };
    }

    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteAPI = async (url, customHeaders) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };

    // Only add custom headers if they exist
    if (customHeaders && Object.keys(customHeaders).length > 0) {
      headers = { ...headers, ...customHeaders };
    }

    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
