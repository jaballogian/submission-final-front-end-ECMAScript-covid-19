// api sources:
// https://restcountries.eu/#api-endpoints-all
// https://about-corona.net/documentation
// https://www.countryflags.io/
// thank you for the api

const countryListURL = "https://restcountries.eu/rest/v2/all";
let countryNameList = [];
let countryCodeList = [];

const countryCovidListURL = "https://corona-api.com/countries?Content-Type=application/json";
let countryNameList2 = [];
let countryConfirmedList = [];
let countryRecoveredList = [];
let countryDeathsList = [];

let finalCountryNameList = [];
let finalCountryCodeList = [];
let finalCountryConfirmedList = [];
let finalCountryRecoveredList = [];
let finalCountryDeathsList = [];

const getCountryDataList = () => {

    fetch(countryListURL)
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {

        for(const element of responseJSON){
            countryNameList.push(element.name);
            countryCodeList.push(element.alpha2Code);
        }

        getCountryCovidData();
    })
    .catch(error => {
        console.log(error);
    })
};

const getCountryCovidData = () => {

    fetch(countryCovidListURL)
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        
        for(const element of responseJSON["data"]){
            countryNameList2.push(element.name);
            countryConfirmedList.push(element["latest_data"]["confirmed"]);
            countryRecoveredList.push(element["latest_data"]["recovered"]);
            countryDeathsList.push(element["latest_data"]["deaths"]);
        }

        pairingCountryCodeWithCovidData();
    })
}

const pairingCountryCodeWithCovidData = () => {

    for(let i = 0; i < countryNameList.length; i++){
        for(let j = 0; j < countryNameList2.length; j++){
            if(countryNameList[i] == countryNameList[j]){
                finalCountryNameList.push(countryNameList[i]);
                finalCountryCodeList.push(countryCodeList[i]);
                finalCountryConfirmedList.push(countryConfirmedList[j]);
                finalCountryRecoveredList.push(countryRecoveredList[j]);
                finalCountryDeathsList.push(countryDeathsList[j]);
            }
        }
    }

    printResult();
}

const printResult = () => {
    console.log(`${finalCountryNameList}
    ${finalCountryCodeList}
    ${finalCountryConfirmedList}
    ${finalCountryRecoveredList}
    ${finalCountryDeathsList}

    ${finalCountryNameList.length} ${finalCountryCodeList.length} ${finalCountryConfirmedList.length} ${finalCountryRecoveredList.length} ${finalCountryDeathsList.length}`);
}

getCountryDataList();