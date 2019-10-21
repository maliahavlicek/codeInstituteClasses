function getData(url,cb){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
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

function generatePaginationButtons(next, prev){
    el = '';
    if(prev){
        el+= `<button onclick="writeToDocment('${prev}')">Previous</button>`;
    }
    if(next){
        el += `<button onclick="writeToDocment('${next}')">Next</button>`;
    }
    return el;
}


function writeToDocment(url){
    var tableRows=[];
    var el = document.getElementById("data");
    el.innerHTML='';

    getData(url, function(data){
       // console.dir(data);
        var pagination='';
        if(data.next || data.previous){
            pagination =  generatePaginationButtons(data.next, data.previous);
        }
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
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g,'');


    });
}