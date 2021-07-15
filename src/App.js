//COMPONENTS

import Page from "./Components/Page/Page";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";

//HOOKS
import { useState } from "react";
//JSON
import sectionValues from "./Filters/section-name-values.json";

//SCSS
import "./App.scss";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [filterEnabled, setFilter] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClickFilter = (category) => {
    if (filterEnabled === category) {
      setFilter("");
    } else {
      setFilter(category);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <div className="app">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for a subject, places, sources"
          ></input>
          <button type="submit">Search</button>
        </form>
        <div className="filters-row">
          {sectionValues.map((category, i) => (
            <Filter
              key={i}
              value={category}
              onClick={() => handleClickFilter(category)}
              isEnabled={filterEnabled === category && true}
            />
          ))}
        </div>
      </header>
      <Page filter={filterEnabled} query={query} />
      <Footer />
    </div>
  );
};

export default App;
