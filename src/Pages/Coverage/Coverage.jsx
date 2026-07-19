import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";

const position = [23.685, 90.3563];

const Coverage = () => {
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);
  return (
    <div>
      <h1 className="text-3xl my-10 font-bold text-[#03373D]">
        We are available in 64 districts
      </h1>

      <div>
        <MapContainer
          className="h-[700px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((center) => (
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.city}</strong> <br /> Service Area: {center.covered_area.join(" ,")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
