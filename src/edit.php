<?php
// including the database connection file
include_once("config.php");

if(isset($_POST['update']))
{	

	$id = mysqli_real_escape_string($mysqli, $_POST['id']);
	

    $titre_one = mysqli_real_escape_string($mysqli, $_POST['titre_one']);
    $titre_two = mysqli_real_escape_string($mysqli, $_POST['titre_two']);
    $titre_three = mysqli_real_escape_string($mysqli, $_POST['titre_three']);
    $titre_four = mysqli_real_escape_string($mysqli, $_POST['titre_four']);
    $sous_titre_one = mysqli_real_escape_string($mysqli, $_POST['sous_titre_one']);
    $sous_titre_two = mysqli_real_escape_string($mysqli, $_POST['sous_titre_two']);
    $date_one = mysqli_real_escape_string($mysqli, $_POST['date_one']);
    $date_two = mysqli_real_escape_string($mysqli, $_POST['date_two']);
    $text_info_one = mysqli_real_escape_string($mysqli, $_POST['text_info_one']);
    $text_info_two = mysqli_real_escape_string($mysqli, $_POST['text_info_two']);
    $texte = mysqli_real_escape_string($mysqli, $_POST['texte']);
    $nom = mysqli_real_escape_string($mysqli, $_POST['nom']);
    $nom_pers_one = mysqli_real_escape_string($mysqli, $_POST['nom_pers_one']);
    $nom_pers_two = mysqli_real_escape_string($mysqli, $_POST['nom_pers_two']);
    $nom_pers_three = mysqli_real_escape_string($mysqli, $_POST['nom_pers_three']);
    $nom_boat_one = mysqli_real_escape_string($mysqli, $_POST['nom_boat_one']);
    $nom_boat_two = mysqli_real_escape_string($mysqli, $_POST['nom_boat_two']);
    $nom_boat_three = mysqli_real_escape_string($mysqli, $_POST['nom_boat_three']);
	
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
	} else {	
		//updating the table
		$result = mysqli_query($mysqli, "UPDATE articles SET titre_one='$titre_one',titre_two='$titre_two',titre_three='$titre_three',titre_four='$titre_four',sous_titre_one='$sous_titre_one',sous_titre_two='$sous_titre_two',date_one='$date_one',date_two ='$date_two',text_info_one='$text_info_one',text_info_two='$text_info_two',texte='$texte',nom='$nom',nom_pers_one='$nom_pers_one',nom_pers_two='$nom_pers_two',nom_pers_three='$nom_pers_three',nom_boat_one='$nom_boat_one',nom_boat_two='$nom_boat_two',nom_boat_three='$nom_boat_three' WHERE id=$id");
		
		//redirectig to the display page. In our case, it is index.php
		header("Location: index.php");
	}
}
?>
<?php
//getting id from url
$id = $_GET['id'];

//selecting data associated with this particular id
$result = mysqli_query($mysqli, "SELECT * FROM articles WHERE id=$id");

while($res = mysqli_fetch_array($result))
{
    $titre_one = $res['titre_one'];
    $titre_two = $res['titre_two'];
    $titre_three = $res['titre_three'];
    $titre_four = $res['titre_four'];
    $sous_titre_one = $res['sous_titre_one'];
    $sous_titre_two = $res['sous_titre_two'];
    $date_one = $res['date_one'];
    $date_two = $res['date_two'];
    $text_info_one = $res['text_info_one'];
    $text_info_two = $res['text_info_two'];
    $texte = $res['texte'];
    $nom = $res['nom'];
    $nom_pers_one = $res['nom_pers_one'];
    $nom_pers_two = $res['nom_pers_two'];
    $nom_pers_three = $res['nom_pers_three'];
    $nom_boat_one = $res['nom_boat_one'];
    $nom_boat_two = $res['nom_boat_two'];
    $nom_boat_three = $res['nom_boat_three'];

}
?>
<html>
<head>	
	<title>Edit Data</title>
</head>

<body>
	<a href="index.php">Home</a>
	<br/><br/>
	
	<form name="form1" method="post" action="edit.php">
		<table border="0">
            <tr>
                <td>titre_one</td>
                <td><input type="text" name="titre_one" value="<?php echo $titre_one;?>"></td>
            </tr>
            <tr>
                <td>titre_two</td>
                <td><input type="text" name="titre_two" value="<?php echo $titre_two;?>"></td>
            </tr>
            <tr>
                <td>titre_three</td>
                <td><input type="text" name="titre_three" value="<?php echo $titre_three;?>"></td>
            </tr>
            <tr>
                <td>titre_four</td>
                <td><input type="text" name="titre_four" value="<?php echo $titre_four;?>"></td>
            </tr>
            <tr>
                <td>sous_titre_one</td>
                <td><input type="text" name="sous_titre_one" value="<?php echo $sous_titre_one;?>"></td>
            </tr>
            <tr>
                <td>sous_titre_two</td>
                <td><input type="text" name="sous_titre_two" value="<?php echo $sous_titre_two;?>"></td>
            </tr>
            <tr>
                <td>date_one</td>
                <td><input type="text" name="date_one" value="<?php echo $date_one;?>"></td>
            </tr>
            <tr>
                <td>date_two</td>
                <td><input type="text" name="date_two" value="<?php echo $date_two;?>"></td>
            </tr>
            <tr>
                <td>text_info_one</td>
                <td><input type="text" name="text_info_one" value="<?php echo $text_info_one;?>"></td>
            </tr>
            <tr>
                <td>text_info_two</td>
                <td><input type="text" name="text_info_two" value="<?php echo $text_info_two;?>"></td>
            </tr>
            <tr>
                <td>texte</td>
                <td><input type="text" name="texte" value="<?php echo $texte;?>"></td>
            </tr>
            <tr>
                <td>nom</td>
                <td><input type="text" name="nom" value="<?php echo $nom;?>"></td>
            </tr>
            <tr>
                <td>nom_pers_one</td>
                <td><input type="text" name="nom_pers_one" value="<?php echo $nom_pers_one;?>"></td>
            </tr>
            <tr>
                <td>nom_pers_two</td>
                <td><input type="text" name="nom_pers_two" value="<?php echo $nom_pers_two;?>"></td>
            </tr>
            <tr>
                <td>nom_pers_three</td>
                <td><input type="text" name="nom_pers_three" value="<?php echo $nom_pers_three;?>"></td>
            </tr>
            <tr>
                <td>nom_boat_one</td>
                <td><input type="text" name="nom_boat_one" value="<?php echo $nom_boat_one;?>"></td>
            </tr>
            <tr>
                <td>nom_boat_two</td>
                <td><input type="text" name="nom_boat_two" value="<?php echo $nom_boat_two;?>"></td>
            </tr>
            <tr>
                <td>nom_boat_three</td>
                <td><input type="text" name="nom_boat_three" value="<?php echo $nom_boat_three;?>"></td>
            </tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>
</body>
</html>
