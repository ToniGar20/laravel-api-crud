
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
                <button class="btn btn-success btn-sm rounded-0" type="submit" onclick="renderFormEdit(${item.id})" title="Edit"><i class="fa fa-edit"></i></button>
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
    renderHome();
}

function api_js_showValues(id) {
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

function api_js_udpate(id) {
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
    renderHome();
}

function api_js_destroy(id) {
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
    }
    renderHome();
}

//HOME display
/**
 * Function to render a table with the main content called with api_js_index() function
 */
function renderHome() {
    document.getElementById('content').innerHTML = `
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr><th>id</th><th>Name</th><th>Last Name</th><th>Team</th><th>Actions</th></tr>
            </thead>
            <tbody id="table-content">

            </tbody>
        </table>
    `;
    api_js_index();
}

//FORM for ADD displaying
/**
 * Form is rendered to add a driver
 */
function renderFormAdd() {
    document.getElementById('content').innerHTML = `
        <form method="post" id="add-driver" onsubmit="api_js_store()">
            <label>
                Name:
                <input type="text" name="fname"/>
            </label>
            <label>
                Last Name:
                <input type="text" name="lname"/>
            </label>
            <label for="team">Team:</label>

            <select name="team" id="team">
                <option value="1">Mercedes AMG F1</option>
                <option value="2">Scuderia Ferrari</option>
                <option value="3">Red Bull Racing</option>
                <option value="4">Renault F1 Team</option>
                <option value="5">Haas F1 Team</option>
                <option value="6">Racing Point F1</option>
                <option value="7">Alpha Tauri F1</option>
                <option value="8">McLaren F1</option>
                <option value="9">Alfa Romeo Racing</option>
                <option value="10">Williams Racing</option>
            </select>
            <button class="send-but bg-primary mt-4 text-white btn-md rounded-2 px-3" type="submit">Submit</button>
        </form>
    `;
}

//FORM for EDIT displaying
/**
 * Form is rendered to edit a driver
 * To display the data function api_js_showValues(id) is called with the id passed by parameter, identified from button at the main content
 * @param id
 */

function renderFormEdit(id) {
    document.getElementById('content').innerHTML = `
        <form id="edit-driver">
            <label>
                Name:
                <input type="text" name="fname" id="fname" value=""/>
            </label>
            <label>
                Last Name:
                <input type="text" name="lname" id="lname" value=""/>
            </label>
            <label for="team">Team:</label>

            <select name="team" id="team">
                <option value="1" id="1">Mercedes AMG F1</option>
                <option value="2" id="2">Scuderia Ferrari</option>
                <option value="3" id="3">Red Bull Racing</option>
                <option value="4" id="4">Renault F1 Team</option>
                <option value="5" id="5">Haas F1 Team</option>
                <option value="6" id="6">Racing Point F1</option>
                <option value="7" id="7">Alpha Tauri F1</option>
                <option value="8" id="8">McLaren F1</option>
                <option value="9" id="9">Alfa Romeo Racing</option>
                <option value="10" id="10">Williams Racing</option>
            </select>
        </form>
        <button class="send-but bg-primary mt-4 text-white btn-md rounded-2 px-3" onclick="api_js_udpate(${id})">Submit</button>
    `;
    api_js_showValues(id);
}



