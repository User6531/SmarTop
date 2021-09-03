<!DOCTYPE html>
<html lang="en">
<head>
    <title>Search results</title>
    <meta charset="utf-8">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    <meta name="description" content="Your description">
    <meta name="keywords" content="Your keywords">
    <meta name="author" content="Your name">    
    <link rel="stylesheet" href="css/bootstrap.css" >
    <link rel="stylesheet" href="css/responsive.css" >
    <link rel="stylesheet" href="css/style.css" >
    <link rel="stylesheet" href="css/superfish.css">
    <link href='//fonts.googleapis.com/css?family=Raleway:400,100,700' rel='stylesheet' type='text/css'>
		<script src="js/jquery.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery-migrate-1.1.1.js"></script>
        <script src="js/superfish.js"></script>
        <script src="js/jquery.mobilemenu.js"></script>
        <script src="search/search.js"></script>
        
      <!--[if lt IE 8]>
          <div style='text-align:center'><a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/images/upgrade.jpg"border="0"alt=""/></a></div>  
      <![endif]-->
  <!--[if lt IE 9]>
     
    <link rel="stylesheet" href="css/ie.css" >
    <script src="js/html5shiv.js"></script>
  <![endif]-->
</head>
<body>    
 <!--==============================header=================================-->
<header>
    <div class="head-line">
        <div class="container_12">
            <div class="row">
                <div class="grid_12">
                    <div class="head-box-inner1">
                        Have an account? 
                        <a href="more.html">Sign in</a> or <a href="more.html">Sign up</a>
                    </div>
                    <ul class="list1 clearfix">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li class="last3"><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container_12">
        <div class="row">
            <div class="grid_12">
                <h1><a class="logo" href="index.html">Cosmico</a></h1>
                <form id="search1" action="search.php" method="GET">
                    <input type="text" name="s">                                
                    <a onClick="document.getElementById('search1').submit()" class="button1">Search</a>
                </form>
            </div>
        </div>
    </div>
    <div class="bg2">
        <div class="container_12">
            <nav class="row">
                <ul class="sf-menu grid_12">
                    <li><a href="index.html">Main</a></li>
                    <li><a href="index-1.html">About</a>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a>
                                <ul>
                                    <li><a href="#">Our staff</a></li>
                                    <li><a href="#">Our vision</a></li>
                                    <li><a href="#">Development</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Awards</a></li>
                       </ul>
                    </li>
                    <li><a href="index-2.html">Services</a></li>
                    <li><a href="index-3.html">Projects</a></li>
                    <li><a href="index-4.html">Blog</a></li>
                    <li class="last4"><a href="index-5.html">Contacts</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
</header>

<!--=======content================================-->
<section id="content">
    <div class="container_12 textpage">
        <div class="row">
          <div class="grid_12">
              <h3 class="search">Search result:</h3>
              <div id="search-results"></div>
          </div>
        </div>
    </div>
</section>
<!--=======footer=================================-->
<footer>
    <div class="container_12">
      <div class="row">
        <div class="grid_12 center">Cosmico &copy; 2013 &#8226; <a href="index-6.html">Privacy Policy</a></div>
       </div>  
    </div>
 </footer>
<script src="js/bootstrap.js"></script>
</body>
</html>