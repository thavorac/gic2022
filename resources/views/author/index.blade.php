<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet" id="bootstrap-css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="span12">
                <div class="head">
                    <div class="row-fluid">
                        <div class="span12">
                            <div class="span6">
                                <h1 class="muted">Laravel Blogs</h1>
                            </div>

                            <div class="span4 offset2" style="margin-top:15px;">
                                <button class="btn pull-right" type="button">Sign In</button>
                            </div>
                        </div>
                    </div>

                    <div class="navbar">
                        <div class="navbar-inner">
                            <div class="container">
                                <ul class="nav">
                                    <li>
                                        <a href="#">Authors</a>
                                    </li>

                                    <li>
                                        <a href="#">Search</a>
                                    </li>

                                    <li>
                                        <a href="#">Features</a>
                                    </li>

                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                Author index Page
                <ol>
                @foreach ($authors as $author)
                    <li>{{ $author["name"] }}</li>
                @endforeach
                </ol>
            </div>
            <button>
                <a href="/authors/form">Create Author</>
            </button>
        </div>
    </body>
</html>
