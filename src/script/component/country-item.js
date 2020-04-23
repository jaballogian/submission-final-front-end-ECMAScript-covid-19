class CountryItem extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    // set country(country) {
    //     this._country = country;
    //     this.render();
    // }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .main-row {
                background-color: dimgrey;
                width: 100%;
            }
            
            .main-row .main-cell {
                width: 20%;
                color: white;
            }
        </style>
        <div class="main-row">
            <div class="main-cell">
                <h1>tes</h1>
            </div>
        </div>`;
    }
}

customElements.define("country-item", CountryItem);