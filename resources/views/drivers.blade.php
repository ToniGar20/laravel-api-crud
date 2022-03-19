<html lang="en">
<head>
    <title>Api Test with Laravel</title>
    <script src="/js/apirest.js" defer></script>
    <script src="https://kit.fontawesome.com/2d12050ae0.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body onload="renderHome()">

    <div>
        <button class="bg-primary text-white btn-md rounded-2 px-3" onclick="renderHome()">Show drivers</button>
    </div>
    <div>
        <button class="bg-primary text-white btn-md rounded-2 px-3" onclick="renderFormAdd()">Add driver</button>
    </div>

    <div class="container" id="content">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr><th>id</th><th>Name</th><th>Last Name</th><th>Team</th><th>Actions</th></tr>
            </thead>
            <tbody id="table-content">

            </tbody>
        </table>
    </div>

</body>
</html>
