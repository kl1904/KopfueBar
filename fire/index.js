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

$(document).ready(function() {
      //read alles
      var idname = 0;
      var zuweisung = new Array();
    db.collection("cocktails").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const listealles = document.getElementById("giballenamen");
            var allescocktail ="<h3 id='cocktails' data-attribut="+doc.data().name+">"+doc.data().name+"</h3>";
            //zuweisung[idname] = doc.data().name;
            //alert(zuweisung);
            //idname += 1;
            listealles.innerHTML += allescocktail
        });
    });


    /*
    //alle namen
    db.collection("cocktails").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        const listenameall = document.getElementById("gibnameall");
        var nameallcocktail ="<h3>"+doc.data().name+"</h3>";
        listenameall.innerHTML += nameallcocktail
      });
    });*/
});

/*
    //bestimmte lesen
    //name
    //name muss übergeben werden (.doc() funktioniert nicht)
    db.collection("cocktails").doc("Caipirinha").get().then(function(querySnapshot) {
      console.log(querySnapshot);
      querySnapshot.forEach(function(doc) {
        const listename = document.getElementById("gibname");
        var namecocktail ="<h3>"+doc.data().name+"</h3>";
        listename.innerHTML += namecocktail
      });
    })
    .catch(function(error) {
        console.error("Error 1: ", error);
    });

    //zutaten

      db.collection("cocktails").doc("Caipirinha").get().then(function(querySnapshot){
        querySnapshot.getDocuments(function(doc) {
          const listezutaten = document.getElementById("gibzutaten");
          var zutatencocktail ="<h3>"+doc.data().zutaten+"</h3>";
          listezutaten.innerHTML += zutatencocktail
        });

      })
      .catch(function(error) {
          console.error("Error 2: ", error);
      });
      db.collection("cocktails").doc("Caipirinha").get().then(function(doc) {
          const listename = document.getElementById("gibname");
          var namecocktail ="<h3>"+doc.data().name+"</h3>";
          listename.innerHTML += namecocktail
      })
      .catch(function(error) {
          console.error("Error 4: ", error);
      });

    db.collection("cocktails").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        const listerezept = document.getElementById("gibrezept");
        var rezeptcocktail ="<h3>"+doc.data().rezept+"</h3>";
        listerezept.innerHTML += rezeptcocktail
      });
    })
    .catch(function(error) {
        console.error("Error 3: ", error);
    });
*/

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
    db.collection("cocktails").doc(name).delete();
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    alert("Der Cocktail " + name + " wurde gelöscht!");
  });

  $("#det").click(function(event){      //von home details zu details
    //var dername = document.getElementById("gibnameall");
    //alert("hier"+ dername);
    //alert("hallo");
    var ele = event.target;
    name = ele.getAttribute('data-attribut');
    //alert(name);
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();

    //var ka = document.querySelector(name).value;
    //alert(ka);
    db.collection("cocktails").doc(name).get().then(function(doc) {
        //alert("#giballes")
        const listename = document.getElementById("gibzutaten");
        var namecocktail ="<h3>"+doc.data().name+"</h3><p>Zutaten: "+doc.data().zutaten+"</p><p>Rezept: "+doc.data().rezept+"</p>";
        listename.innerHTML = namecocktail
    });
    //alert("hallo");
    //in event.data liegt die datenatzId
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
