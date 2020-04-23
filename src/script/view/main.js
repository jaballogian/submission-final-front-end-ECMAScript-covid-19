import "../component/country-list.js";
import DataSource from "../data/data-source.js";

const main = () => {

    const countryListElement = document.querySelector("country-list");

    const onStart = () => {
        DataSource.getCountryCovidData()
        .then(renderResult)
        .catch(fallbackResult)
      };

    const renderResult = results => {
        countryListElement.countries = results;
    };

    const fallbackResult = message => {
        countryListElement.renderError(message);
    };

    onStart();
}

export default main;