<?php
//including the database connection file
include_once("config.php");
include ("create_json_file.php");
//fetching data in descending order (lastest entry first)
//$result = mysql_query("SELECT * FROM users ORDER BY id DESC"); // mysql_query is deprecated
$result = mysqli_query($mysqli, "SELECT * FROM `articles`"); // using mysqli_query instead
?>


<html>
<head>
    <title>Homepage</title>
</head>

<body>
<a href="add.html">Nouvel article</a><br/><br/>


<table id="table_id" class="display">

    <tbody>
    <tr>
        <?php
        //while($res = mysql_fetch_array($result)) { // mysql_fetch_array is deprecated, we need to use mysqli_fetch_array
        while($res = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td><a href=\"edit.php?id=$res[id]\"><img src='edit-document.png'></a> | <a href=\"delete.php?id=$res[id]\" onClick=\"return confirm('Are you sure you want to delete?')\"><img src='x-mark.png'</a></td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>titre_one</td>";
            echo "<td>".$res['titre_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>titre_two</td>";
            echo "<td>".$res['titre_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>titre_three</td>";
            echo "<td>".$res['titre_three']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>titre_four</td>";
            echo "<td>".$res['titre_four']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>sous_titre_one</td>";
            echo "<td>".$res['sous_titre_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>sous_titre_two</td>";
            echo "<td>".$res['sous_titre_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>date_one</td>";
            echo "<td>".$res['date_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>date_two</td>";
            echo "<td>".$res['date_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>text_info_one</td>";
            echo "<td>".$res['text_info_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>text_info_two</td>";
            echo "<td>".$res['text_info_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>texte</td>";
            echo "<td>".$res['texte']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom</td>";
            echo "<td>".$res['nom']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_pers_one</td>";
            echo "<td>".$res['nom_pers_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_pers_two</td>";
            echo "<td>".$res['nom_pers_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_pers_three</td>";
            echo "<td>".$res['nom_pers_three']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_boat_one</td>";
            echo "<td>".$res['nom_boat_one']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_boat_two</td>";
            echo "<td>".$res['nom_boat_two']."</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>nom_boat_three</td>";
            echo "<td>".$res['nom_boat_three']."</td>";
            echo "</tr>";

        }
        ?>
    </tr>

    </tbody>
</table>
<style>
 tr{

     background-color: yellow;
     font-family: Verdana;
 }

 td{
     border: 1px solid black;
 }
</style>

</body>
</html>
