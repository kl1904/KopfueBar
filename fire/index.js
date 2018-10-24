//window.alert("hrs2");

$(document).ready(function(){
  $('.menu').click(function(){
    $('ul').toggleClass('active');
  })
})

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAblwRZr-OMZPjybYXfKK1rm76sPbZqbgY",
  authDomain: "kopfuebar.firebaseapp.com",
  databaseURL: "https://kopfuebar.firebaseio.com",
  projectId: "kopfuebar",
  storageBucket: "kopfuebar.appspot.com",
  messagingSenderId: "416542093321"
};
firebase.initializeApp(config);


const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



function storeData()
{
  //überprüfe auf leer
  var pname = document.querySelector("#name").value;
  var pzutaten = document.querySelector("#zutaten").value;
  var prezept = document.querySelector("#rezept").value;

  if (pname == "" || pzutaten == "" || prezept == "")
  {
    alert("Fehler beim speichern: Bitte alle Felder ausfüllen");
  }
  else
  {
      // Add a new document in collection "cities"
    db.collection("cocktails").doc(document.querySelector("#name").value).set({
        name: document.querySelector("#name").value,
        zutaten: document.querySelector("#zutaten").value,
        rezept: document.querySelector("#rezept").value
    })
    .then(function() {
        console.log("Document successfully written!");
        alert("Cocktail wurde hinzugefügt");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }
}

$(document).ready(function(){
  $("#1").show();
  $("#2").hide();
  $("#3").hide();
  $("#4").hide();

  $("#hinzu").click(function(){     //von home hinzufuegen zu hizufügen
    $("#1").hide();
    $("#2").show();
    $("#3").hide();
    $("#4").hide();

    function storeData()
    {
      // Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
    }
  });

  $("#home").click(function(){      //von hinzufügen abbrechen zu home
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
  });

  $("#home2").click(function(){     //von hinzufügen fertig zu home (funktion)
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
  });

  $("#home3").click(function(){     //von details zurück zu home
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
  });

  $("#home4").click(function(){     //von details löschen zu home (funktion)
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
  });

  $("#det").click(function(){      //von home details zu details
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
  });

  $("#det2").click(function(){      //von bearbeiten abbrechen zu details
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
  });

  $("#det3").click(function(){      //von bearbeiten fertig zu details (funktion)
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
  });

  $("#bea").click(function(){       //von details bearbeiten zu bearbeiten
    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    $("#4").show();
  });



  //if(characterCode == 13)
  //{
  //  var NameText = document.getElementById('name').value;
  //  alert(NameText);
  //}

});
