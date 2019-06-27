<html>
<head>
	<title>Add Data</title>
</head>

<body>
<?php
//including the database connection file
include_once("config.php");

if(isset($_POST['Submit'])) {	

    $titre_one = mysqli_real_escape_string($mysqli,$_POST['titre_one']);
    $titre_two = mysqli_real_escape_string($mysqli,$_POST['titre_two']);
    $titre_three = mysqli_real_escape_string($mysqli,$_POST['titre_three']);
    $titre_four = mysqli_real_escape_string($mysqli,$_POST['titre_four']);
    $sous_titre_one = mysqli_real_escape_string($mysqli,$_POST['sous_titre_one']);
    $sous_titre_two = mysqli_real_escape_string($mysqli,$_POST['sous_titre_two']);
    $date_one = mysqli_real_escape_string($mysqli,$_POST['date_one']);
    $date_two = mysqli_real_escape_string($mysqli,$_POST['date_two']);
    $text_info_one = mysqli_real_escape_string($mysqli,$_POST['text_info_one']);
    $text_info_two = mysqli_real_escape_string($mysqli,$_POST['text_info_two']);
    $texte = mysqli_real_escape_string($mysqli,$_POST['texte']);
    $nom = mysqli_real_escape_string($mysqli,$_POST['nom']);
    $nom_pers_one = mysqli_real_escape_string($mysqli,$_POST['nom_pers_one']);
    $nom_pers_two = mysqli_real_escape_string($mysqli,$_POST['nom_pers_two']);
    $nom_pers_three = mysqli_real_escape_string($mysqli,$_POST['nom_pers_three']);
    $nom_boat_one = mysqli_real_escape_string($mysqli,$_POST['nom_boat_one']);
    $nom_boat_two = mysqli_real_escape_string($mysqli,$_POST['nom_boat_two']);
    $nom_boat_three = mysqli_real_escape_string($mysqli,$_POST['nom_boat_three']);
		
	// checking empty fields
    if(empty($titre_one) || empty($titre_two) || empty($titre_three) || empty($titre_four) || empty($sous_titre_one) || empty($sous_titre_two) || empty($date_one) || empty($date_two) || empty($text_info_one) || empty($text_info_two) || empty($texte) || empty($nom) || empty($nom_pers_one) || empty($nom_pers_two) || empty($nom_pers_three) || empty($nom_boat_one) || empty($nom_boat_two) || empty($nom_boat_three)) {

        if(empty($titre_one)) {
            echo "<font color='red'>titre_one field is empty.</font><br/>";
        }

        if(empty($titre_two)) {
            echo "<font color='red'>titre_two field is empty.</font><br/>";
        }

        if(empty($titre_three)) {
            echo "<font color='red'>titre_three field is empty.</font><br/>";
        }

        if(empty($titre_four)) {
            echo "<font color='red'>titre_four field is empty.</font><br/>";
        }

        if(empty($sous_titre_one)) {
            echo "<font color='red'>sous_titre_one field is empty.</font><br/>";
        }

        if(empty($sous_titre_two)) {
            echo "<font color='red'>sous_titre_two field is empty.</font><br/>";
        }

        if(empty($date_one)) {
            echo "<font color='red'>date_one field is empty.</font><br/>";
        }

        if(empty($date_two)) {
            echo "<font color='red'>date_two field is empty.</font><br/>";
        }

        if(empty($text_info_one)) {
            echo "<font color='red'>text_info_one field is empty.</font><br/>";
        }

        if(empty($text_info_two)) {
            echo "<font color='red'>text_info_two field is empty.</font><br/>";
        }

        if(empty($texte)) {
            echo "<font color='red'>texte field is empty.</font><br/>";
        }

        if(empty($nom)) {
            echo "<font color='red'>nom field is empty.</font><br/>";
        }

        if(empty($nom_pers_one)) {
            echo "<font color='red'>nom_pers_one field is empty.</font><br/>";
        }

        if(empty($nom_pers_two)) {
            echo "<font color='red'>nom_pers_two field is empty.</font><br/>";
        }

        if(empty($nom_pers_three)) {
            echo "<font color='red'>nom_pers_three field is empty.</font><br/>";
        }

        if(empty($nom_boat_one)) {
            echo "<font color='red'>nom_boat_one field is empty.</font><br/>";
        }

        if(empty($nom_boat_two)) {
            echo "<font color='red'>nom_boat_two field is empty.</font><br/>";
        }

        if(empty($nom_boat_three)) {
            echo "<font color='red'>nom_boat_three field is empty.</font><br/>";
        }
		
		//link to the previous page
		echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";
	} else { 
		// if all the fields are filled (not empty) 
			
		//insert data to database	
		$result = mysqli_query($mysqli, "INSERT INTO articles(titre_one,titre_two,titre_three,titre_four,sous_titre_one,sous_titre_two,date_one,date_two,text_info_one,text_info_two,texte,nom,nom_pers_one,nom_pers_two,nom_pers_three,nom_boat_one,nom_boat_two,nom_boat_three) VALUES('$titre_one','$titre_two','$titre_three','$titre_four','$sous_titre_one','$sous_titre_two','$date_one','$date_two','$text_info_one','$text_info_two','$texte','$nom','$nom_pers_one','$nom_pers_two','$nom_pers_three','$nom_boat_one','$nom_boat_two','$nom_boat_three')");
		
		//display success message
		echo "<font color='green'>Data added successfully.";
		echo "<br/><a href='index.php'>View Result</a>";
	}
}
?>
</body>
</html>
