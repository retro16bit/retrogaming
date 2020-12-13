<?php

$search= $_POST['search_entered'];

$searchoriginal= $search;

$search= strtolower($search);

$search= trim($search);



$search= explode(" ", $search);

$countsearchterms= count($search);

$submitbutton= $_POST['submit'];

?>