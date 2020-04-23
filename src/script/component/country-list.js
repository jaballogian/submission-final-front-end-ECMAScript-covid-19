import "./country-item.js";

class CountryList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
 
    // set rows(rows) {
    //     this._rows = rows;
    //     this.render();
    // }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;
        for(let i = 0; i < 5; i++){
            const contryItemElement = document.createElement("country-item");
            this.shadowDOM.appendChild(contryItemElement);
        }
    }
}

customElements.define("country-list", CountryList);