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
            .row {
                display: flex;
                border-radius: 10px;
                padding: 0px 20px 0px 20px;
                margin: 0px 20px 0px 20px;
                background-color: white;
                text-align: center;
            }
            
            .row-flag {
                width: 10%;
                margin-top: auto;
                margin-bottom: auto;
            }
            
            .row-country {
                width: 30%;
                margin-top: auto;
                margin-bottom: auto;
            }
            
            .row-country :hover {
                cursor: pointer;
            }
            
            .row-confirmed, .row-recovered, .row-deaths {
                width: 20%;
                margin-top: auto;
                margin-bottom: auto;
            } 
        </style>
        <div class="row">
            <div class="row-flag">
                <img src="https://www.countryflags.io/be/flat/32.png" alt="" height="32px">
            </div>
            <div class=row-country>
                <h3 id="row-country-text">Country</h3>
            </div>
            <div class=row-confirmed>
                <h3 id="row-confirmed-text">Confirmed</h3>
            </div>
            <div class=row-recovered>
                <h3 id="row-recovered-text">Recovered</h3>
            </div>
            <div class=row-deaths>
                <h3 id="row-deaths-text">Deaths</h3>
            </div>
        </div>`;
    }
}

customElements.define("country-item", CountryItem);