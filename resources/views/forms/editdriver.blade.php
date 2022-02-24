<html lang="en">
<head>
    <title>Api Test with Laravel</title>
    <script src="/js/apirest.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body onload="api_js_showValues({{ $id }})">
<form id="edit-driver" onsubmit="api_js_udpate({{ $id }})" action="{{ route('drivers.index') }}">
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
    <button class="send-but bg-primary mt-4 text-white btn-md rounded-2 px-3" type="submit">Submit</button>
</form>

<div>
    <p id="message"></p>
</div>
</body>
</html>
