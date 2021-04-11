// validation of form to check whthe user as input right or not
function display(event) {
    event.preventDefault();
    let country = document.getElementById('country').value;
    let dateFrom = document.getElementById('startdate').value;
    let dateTo = document.getElementById('enddate').value;
    if (country === "" || dateFrom === "" || dateTo === "") {
        alert("ohhh! form is empty!");
    } else {
        covidInfo(country, dateFrom, dateTo);
    }
}
// function to fetch api data 
function covidInfo(country, dateFrom, dateTo) {
    // Creating the url
    axios.get(`https://api.covid19api.com/country/${country}?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`)
        .then((response) => {
            let data = response.data[0];
            // creating a div element to add the api data
            const div = document.createElement('div');
            div.setAttribute('class', 'jumbotron');

            let output = `
          
        
                <h4 class="fa fa-th-list">Confirmed Cases :${data.Confirmed}</h4> 
                <br>
                <h4 class="fa fa-tachometer">Active Cases : ${data.Active}</h4> 
                <br>
                <h4 class="fa fa-times">Death Cases : ${data.Deaths}</h4> 
                <br> 
                  
          `;
           // add the data to div element
            div.innerHTML = output;
           // append the div to the result-container
            document.getElementById('result-container').appendChild(div);


        })
}
