<html lang="en">
<head>
    <title>Api Test with Laravel</title>
    <script src="/js/apirest.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<form id="add-driver" onsubmit="api_js_store()" action="{{ route('drivers.index') }}">
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

<div>
    <p id="message"></p>
</div>
</body>
</html>
