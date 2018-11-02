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

  var splitname = new Array();
  splitname = pname.split("");

  var booleanleerzeichen = false;
  for (var i = 0; i < splitname.length; i++)
  {
    if(splitname[i]==" ")
    {
      booleanleerzeichen = true;
    }
  }
  if (pname == "" || pzutaten == "" || prezept == "" || booleanleerzeichen==true)
  {
    alert("Fehler beim speichern: Bitte alle Felder ausfüllen und keine Leerzeichen im Namen verwenden");
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
        alert("Cocktail wurde hinzugefügt, Seite muss neu geladen werden");
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
  db.collection("cocktails").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const listealles = document.getElementById("giballenamen");
        var allescocktail ="<h3 id='cocktails' data-attribut="+doc.data().name+">"+doc.data().name+"</h3>";
        listealles.innerHTML += allescocktail
    });
  });

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
    alert("Der Cocktail " + name + " wurde gelöscht, Seite muss neu geladen werden");
  });

  $("#det").click(function(event){      //von home details zu details
    var ele = event.target;
    name = ele.getAttribute('data-attribut');
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
    db.collection("cocktails").doc(name).get().then(function(doc) {
        const listename = document.getElementById("gibzutaten");
        var namecocktail ="<br><h3 align='center'>"+doc.data().name+"</h3><p><br><h4>Zutaten: </h4>"+doc.data().zutaten+"</p><p><br><h4>Rezept: </h4>"+doc.data().rezept+"</p>";
        listename.innerHTML = namecocktail
    });
  });

  $("#det2").click(function(){      //von bearbeiten abbrechen zu details
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
  });

  $("#det3").click(function(){      //von bearbeiten fertig zu details (funktion)
    var pname2 = document.querySelector("#name2").value;
    var pzutaten2 = document.querySelector("#zutaten2").value;
    var prezept2 = document.querySelector("#rezept2").value;

    var splitname2 = new Array();
    splitname2 = pname2.split("");

    var booleanleerzeichen2 = false;

    for (var j = 0; j < splitname2.length; j++)
    {
      if(splitname2[j]==" ")
      {
        booleanleerzeichen2 = true;
      }
    }

    if (pname2 == "" || pzutaten2 == "" || prezept2 == "" || booleanleerzeichen2 == true)
    {
      alert("Fehler beim bearbeiten: Bitte alle Felder ausfüllen und keine Leerzeichen im Namen verwenden");
    }
    else
    {
      db.collection("cocktails").doc(document.querySelector("#name2").value).set({
          name: document.querySelector("#name2").value,
          zutaten: document.querySelector("#zutaten2").value,
          rezept: document.querySelector("#rezept2").value
      })
      .then(function() {
          console.log("Document successfully written!");
          db.collection("cocktails").doc(name).delete();
          $("#1").hide();
          $("#2").hide();
          $("#3").show();
          $("#4").hide();
          alert("Der Cocktail " + name + " wurde bearbeitet, Seite muss neu geladen werden");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }
  });

  $("#bea").click(function(){       //von details bearbeiten zu bearbeiten
    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    $("#4").show();
    db.collection("cocktails").doc(name).get().then(function(doc) {
        const listealles = document.getElementById("dasbearbeiten");
        var bearbeitenalles ="<div id='eingabe'><a>Name des Cocktails:</a><li><input id='name2' type='text' value="+doc.data().name+" maxlength='20'/></li></div><div id='eingabe'><a>Zutaten des Cocktails:</a><li><textarea id='zutaten2' cols='40' rows='10' maxlength='1000'>"+doc.data().zutaten+"</textarea></li></div><div id='eingabe'><a>Zubereitung desCocktails:</a><li><textarea id='rezept2' cols='40' rows='10' maxlength='4000'>"+doc.data().rezept+"</textarea></li></div>";
        listealles.innerHTML = bearbeitenalles
    });
  });
});
