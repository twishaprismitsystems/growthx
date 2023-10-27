<?php
	
	if(isset($_GET['slug'])){
		$slug = $_GET['slug'];	
	}
	else{
		$page = $_GET['page'];
	}
	
	
	if($data = getfiledata('posts.json')){
		echo $data;
	}
	else{
		echo "Noting return";
	}

	function getfiledata($filename){
        if(file_exists('./'.$filename)){
            $filedata = file_get_contents('./'.$filename);
            return $filedata;
        }
        return false;
    }
	
?>