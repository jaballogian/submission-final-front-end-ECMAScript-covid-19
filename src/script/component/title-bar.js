class TitleBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowDOM.innerHTML = `
        <style>
            .row {
                display: flex;
                border-radius: 10px;
                padding: 0px 20px 0px 20px;
                margin: 20px 20px 20px 20px;
                background-color: white;
                text-align: center;
                background-color: beige;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
            
            .row-confirmed, .row-recovered, .row-deaths {
                width: 20%;
                margin-top: auto;
                margin-bottom: auto;
            } 
        </style>
        <div class="row">
            <div class="row-flag">
                <h2>Flag</h2>
            </div>
            <div class="row-country">
                <h2>Country</h2>
            </div>
            <div class="row-confirmed">
                <h2>Confirmed</h2>
            </div>
            <div class="row-recovered">
                <h2>Recovered</h2>
            </div>
            <div class="row-deaths">
                <h2>Deaths</h2>
            </div>
        </div>`;
    }
}

customElements.define("title-bar", TitleBar);