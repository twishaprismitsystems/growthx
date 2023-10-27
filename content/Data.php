<?php

	$file = $_GET['file'];
	
	if($data = getfiledata($file.'.json')){
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