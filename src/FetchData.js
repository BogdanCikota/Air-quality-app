import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

const FetchData = () => {
  const { url,
    myLocation,
    setMyLocation,
    aqi,
    setAqi } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://api.waqi.info/${url}token=c0a9c351f889b4756f46957e26d8f31376df7e1f`)
      .then(res => {
        return res.json();
      })
      .then(obj => {

        if (url === 'feed/here/?') {
          setMyLocation(obj.data.city.name);
          setAqi(obj.data.aqi);
        } else {
          setMyLocation(obj.data[0].station.name);
          setAqi(obj.data[0].aqi);
        }

      })
      .catch(error => {
        console.log(error);
      });
  }, [url, setAqi, setMyLocation]);

  return { myLocation, aqi }
}

export default FetchData;