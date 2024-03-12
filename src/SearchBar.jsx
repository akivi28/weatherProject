import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!city.trim()) {
            setErrorMessage("Please enter a city name.");
        } else {
            setErrorMessage("");
            navigate(`/weatherDetails/${city}`)
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <a href="/" className="text-decoration-none fs-4">My weather</a>
                <a className="btn btn-primary m-3" href="/map">Map</a>
                <form onSubmit={handleSubmit} className="m-3">
                    <label className="form-label">
                        <input
                            type="text"
                            className="form-control"
                            value={city}
                            onChange={inputChangeHandler}
                            placeholder="Input city name..."
                        />
                    </label>
                    <button type="submit" className="btn btn-primary m-2">
                        Get the weather
                    </button>
                </form>
            </div>
            <div>{errorMessage && <p className="text-danger">{errorMessage}</p>}</div>
        </div>
    );
};

export default SearchBar;
