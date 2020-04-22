class ResultBar extends HTMLElement{

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
            .result-bar {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                padding: 20px;
                margin: 20px 20px 20px 20px;
                background-color: beige;
            }
            
            .row-1, .row-2, .row-3 {
                display: flex;
                width: 100%;
                padding: 5px;
            }
            
            .row-1 .imageFlag, h1 {
                width: 50%;
                margin-top: auto;
                margin-bottom: auto;
            }
            
            .row-1 .imageFlag {
                text-align: right;
                padding-right: 10px;
            }
            
            .row-1 h1 {
                padding-left: 10px;
            }
            
            .row-2 h3 {
                width: 33%;
                text-align: center;
            }
            
            .row-3 h1 {
                width: 33%;
                text-align: center;
            }
            
            #totalConfirmedText, #confirmedText {
                color: dimgrey;
            }
            
            #totalRecoveredText, #recoveredText {
                color: darkblue;
            }
            
            #totalDeathText, #deathsText {
                color: firebrick;
            }
        </style>
        <div class="result-bar">
            <div class="row-1">
                <div class="imageFlag">
                    <img src="https://www.countryflags.io/be/flat/64.png" alt="" height="64px">
                </div>
                <h1>Country</h2>
            </div>
            <div class="row-2">
                <h3 id="totalConfirmedText">Total Confirmed</h3>
                <h3 id="totalRecoveredText">Total Recovered</h3>
                <h3 id="totalDeathText">Total Deaths</h3>
            </div>
            <div class="row-3">
                <h1 id="confirmedText">Confirmed</h1>
                <h1 id="recoveredText">Recovered</h1>
                <h1 id="deathsText">Deaths</h1>
            </div>
        </div>`;
    }
}

customElements.define("result-bar", ResultBar);