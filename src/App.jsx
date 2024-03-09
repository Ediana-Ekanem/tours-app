import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // This function is passed to Tour component
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(tours);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center mt-10">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="flex flex-col items-center mt-10">
          <h2 className="font-bold text-xl">You have no tours left</h2>
          <button
            className="bg-blue-400 font-semibold py-1 px-4 mt-5 text-white rounded-lg"
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <div className="flex justify-center">
      <main>
        <Tours toursProp={tours} removeTour={removeTour} />
      </main>
    </div>
  );
}

export default App;
