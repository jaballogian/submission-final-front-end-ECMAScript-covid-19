import "./country-item.js";

class CountryList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
 
    set countries(countries) {
        this._countries = countries;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;
        this._countries.forEach(country => {
            const contryItemElement = document.createElement("country-item");
            contryItemElement.country = country;
            this.shadowDOM.appendChild(contryItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("country-list", CountryList);