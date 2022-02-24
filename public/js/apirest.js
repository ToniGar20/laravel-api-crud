function api_js_index() {
    // With AJAX
    // const response = new XMLHttpRequest();
    // response.onload = function () {
    //     let content = JSON.parse(response.responseText);
    //     console.log(content);
    //
    //     let embedContent = "";
    //     content.forEach((item) => {
    //         embedContent +=
    //             `<tr>
    //             <td>${item.id}</td><td>${item.fname}</td><td>${item.lname}</td><td style="background-color:#${item.hex_color};">${item.team_name}</td>
    //             <td>
    //             <button class="btn btn-success btn-sm rounded-0" type="submit" onclick="window.location.href='drivers/${item.id}/edit'" title="Edit"><i class="fa fa-edit"></i></button>
    //             <button class="btn btn-danger btn-sm rounded-0" type="submit" onclick="api_js_destroy(${item.id})" title="Delete"><i class="fa fa-trash"></i></button>
    //             </td>
    //             </tr>`;
    //     })
    //
    //     embedContent += "</table>";
    //     document.getElementById("table-content").innerHTML = embedContent
    // }
    // response.open('GET', '/api/f1', true);
    // response.send();

    // With async JS (fetch)
    fetch('/api/f1')
        .then((response) => response.json())
        .then((content) => {
            console.log(content);
            let embedContent = "";
            content.forEach((item) => {
                embedContent +=
                    `<tr>
                <td>${item.id}</td><td>${item.fname}</td><td>${item.lname}</td><td style="background-color:#${item.hex_color};">${item.team_name}</td>
                <td>
                <button class="btn btn-success btn-sm rounded-0" type="submit" onclick="window.location.href='drivers/${item.id}/edit'" title="Edit"><i class="fa fa-edit"></i></button>
                <button class="btn btn-danger btn-sm rounded-0" type="submit" onclick="api_js_destroy(${item.id})" title="Delete"><i class="fa fa-trash"></i></button>
                </td>
                </tr>`;

                embedContent += "</table>";
                document.getElementById("table-content").innerHTML = embedContent
            })
        })
        .catch(function (error) {
            console.log('Error with Fetch:', error);
        });
}

function api_js_store() {
    // Grabbing values from the input with FormData Object
    let myForm = document.getElementById('add-driver');
    let formData = new FormData(myForm), result = { };

    for (let entry of formData.entries()) {
        result[entry[0]] = entry[1];
    }
    result = JSON.stringify(result);
    console.log(result);

    // With AJAX
    // const response = new XMLHttpRequest();
    // response.onload = function () {
    //     document.getElementById('message').innerHTML = "Driver added"
    // }
    // response.open('POST', '/api/f1', false)
    // response.setRequestHeader('Content-Type', 'application/api+json');
    // response.setRequestHeader('Accept', 'application/api+json');
    // response.send(result);

    // With async JS (fetch)
    fetch('/api/f1/', {
        method: 'POST',
        body: result,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

function api_js_showValues (id) {
    // With AJAX
    // const response = new XMLHttpRequest();
    // response.onload = function () {
    //     let content = JSON.parse(response.responseText);
    //     console.log(content);
    //
    //     document.getElementById("fname").value = content[0].fname;
    //     document.getElementById("lname").value = content[0].lname;
    //     document.getElementById(content[0].team_id).setAttribute('selected',true);
    // }
    // response.open('GET', '/api/f1/' + id, true);
    // response.send();

    // With async JS (fetch)
    fetch('/api/f1/' + id,)
        .then(response => response.json())
        .then(content => {
            document.getElementById("fname").value = content[0].fname;
            document.getElementById("lname").value = content[0].lname;
            document.getElementById(content[0].team_id).setAttribute('selected',true);
        })

}

function api_js_udpate (id) {
    // Grabbing values from the input with FormData Object
    let myForm = document.getElementById('edit-driver');
    let formData = new FormData(myForm), result = { };

    for (let entry of formData.entries()) {
        result[entry[0]] = entry[1];
    }
    result = JSON.stringify(result);
    console.log(result);

    // With AJAX
    // const response = new XMLHttpRequest();
    // response.onload = function () {
    //     document.getElementById('message').innerHTML = "Driver edited"
    // }
    //
    // response.open('PUT', '/api/f1/' + id, false)
    // response.setRequestHeader('Content-Type', 'application/api+json');
    // response.setRequestHeader('Accept', 'application/api+json');
    // response.send(result);
    //
    // console.log('stopper');

    // With async JS (fetch)
    fetch('/api/f1/' + id, {
        method: 'PUT',
        body: result,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

}

function api_js_destroy (id) {
    let bol = confirm("Are you sure you want to delete the driver?");
    if (bol) {
        // With AJAX
        // const response = new XMLHttpRequest();
        // response.open('DELETE', '/api/f1/' + id, false);
        // response.send();
        // window.location.reload();

        // With async JS (fetch)
        fetch('/api/f1/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
        window.location.reload();
    }
}
