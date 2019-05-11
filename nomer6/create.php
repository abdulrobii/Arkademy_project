<?php
	require_once 'class.php';
	
	if(ISSET($_POST['save'])){
		$id = $_POST['id'];
		$name = $_POST['name'];
	      $user_id = $_POST['user_id'];
		$conn = new db_class();
		$conn->create($id, $name, $user_id);
		header('location: index.php');
	}	
	
?>