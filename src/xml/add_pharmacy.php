<?php

  // DATABASE CONNECTION CODE
  $db_host = getenv('DB_HOST');
  $db_name = getenv('DB_NAME');
  $db_user = getenv('DB_USER');
  $db_pass = getenv('DB_PASS');
  $db = new PDO('mysql:host=' . $db_host . ';dbname=' . $db_name . ';charset=utf8mb4',$db_user,$db_pass);
  // DATABASE CONNECTION CODE

  $id    = $_GET['id'];
  $name  = $_GET['name'];
  $addr  = $_GET['addr'];
  $city  = $_GET['city'];
  $state = $_GET['state'];
  $phone = $_GET['phone'];
  $lat   = $_GET['lat'];
  $lon   = $_GET['lon'];

  $db->query("INSERT INTO gl_pharmacy1 (id,name,addr,city,state,phone,lat,lng) VALUES ($id,'$name','$addr','$city','$state','$phone','$lat','$lon')");

  echo "success";

?>
