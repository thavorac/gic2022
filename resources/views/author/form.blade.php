<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    </head>
    <body>
        <div class="container">
            <br/>
            <h2>Create Author: </h2>
            <br/>
            <br/>
            <form action="" method="post">
                @csrf
                <div class="form-group">
                    <label>Full Name:</label>
                    <input class="form-control" type="text" name="name" required placeholder="Enter Your Full Name"/>
                    <span class="Error"></span>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input class="form-control" type="email" name="email" required placeholder="Enter Your Email"/>
                    <span class="Error"></span>
                </div>
                <div class="form-group">
                    <label>Gender:</label><br/>
                    <label><input type="radio" name="gender" required value="Male" checked /> Male</label>
                    <label><input type="radio" name="gender" required value="Female" /> Female</label>
                    <label><input type="radio" name="gender" required value="Other" /> Other</label>
                    <span class="Error"></span>
                </div>
                <div class="form-group">
                    <input class="btn btn-primary btn-block" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </body>
</html>
