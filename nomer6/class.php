<?php
	require 'config.php';
	
	class db_class extends db_connect{	
		
		public function __construct(){
			$this->connect();
		}
		
		public function create($firstname, $lastname){
			$stmt = $this->conn->prepare( "INSERT INTO `users` (`id`, `name`,`user_id`) VALUES (?, ?)") or die($this->conn->error);
			$stmt->bind_param("ss", $firstname, $lastname);
			if($stmt->execute()){
				$stmt->close();
				$this->conn->close();
				return true;
			}
		}
		
		public function read(){
			$stmt = $this->conn->prepare("SELECT * FROM `users` ORDER BY `id` ASC") or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
				return $result;
			}
		}
 	}	
?>