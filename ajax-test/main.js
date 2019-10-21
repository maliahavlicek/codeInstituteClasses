const baseUrl = "https://swapi.co/api/";


function getData(type,cb){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl+type +"/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(obj){
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<th>${key}</th>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocment(type){
    var tableRows=[];
    var el = document.getElementById("data");
    el.innerHTML='';

    getData(type, function(data){
       // console.dir(data);
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            var dataRow = [];
            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0,15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;


    });
}