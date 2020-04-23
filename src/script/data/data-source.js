class DataSource {

    static getCountryCovidData() {

        const countryCovidListURL = "https://corona-api.com/countries?Content-Type=application/json";

        return fetch(countryCovidListURL)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {

            if(responseJSON.data) {
                return Promise.resolve(responseJSON.data);
            } else {
                return Promise.reject(`nothing to show`);
            }
        })
    }
}

export default DataSource;