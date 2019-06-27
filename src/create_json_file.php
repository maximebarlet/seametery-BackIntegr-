<?php

    function get_data(){
        $connect = mysqli_connect("localhost", "root", "","test");
        $query = "SELECT * FROM articles";
        $result = mysqli_query($connect, $query);
        $articles_data = array();
        while($row = mysqli_fetch_array($result)){

            $articles_data["infos"] = array(
                'id' => $row["id"],
                'titre_one' => $row["titre_one"],
                'titre_two' => $row["titre_two"],
                'titre_three' => $row["titre_three"],
                'titre_four' => $row["titre_four"],
                'sous_titre_one' => $row["sous_titre_one"],
                'sous_titre_two' => $row["sous_titre_two"],
                'date_one' => $row["date_one"],
                'date_two' => $row["date_two"],
                'text_info_one' => $row["text_info_one"],
                'text_info_two' => $row["text_info_two"],
                'texte' => $row["texte"],
                'nom' => $row["nom"],
                'nom_pers_one' => $row["nom_pers_one"],
                'nom_pers_two' => $row["nom_pers_two"],
                'nom_pers_three' => $row["nom_pers_three"],
                'nom_boat_one' => $row["nom_boat_one"],
                'nom_boat_two' => $row["nom_boat_two"],
                'nom_boat_three' => $row["nom_boat_three"]

            );
        }

        return json_encode($articles_data);
    }
    /*echo '<pre>';
    print_r(get_data());
    echo'</pre>';*/

    $file_name = 'api' . '.json';
    if (file_put_contents($file_name, get_data())){
        echo $file_name . ' file created';
    } else {
        echo 'There is some error';
    }

