
function toggleTableSegunda() {
    var tabelaSegunda = document.getElementById("tabelaSegunda");
    if (tabelaSegunda.style.display === "none") {
        tabelaSegunda.style.display = "block";
    } else {
        tabelaSegunda.style.display = "none";
    }
}


function toggleTableTerca() {
    var tabelaTerca = document.getElementById("tabelaTerca");
    if (tabelaTerca.style.display === "none") {
        tabelaTerca.style.display = "block";
    } else {
        tabelaTerca.style.display = "none";
    }
}

function toggleTable() {
    var tabelaQuarta = document.getElementById("tabelaQuarta");
    if (tabelaQuarta.style.display === "none") {
        tabelaQuarta.style.display = "block";
    } else {
        tabelaQuarta.style.display = "none";
    }
}

function toggleTableQuinta() {
    var tabelaQuinta = document.getElementById("tabelaQuinta");
    if (tabelaQuinta.style.display === "none") {
        tabelaQuinta.style.display = "block";
    } else {
        tabelaQuinta.style.display = "none";
    }
}

function toggleTableSexta() {
    var tabelaSexta = document.getElementById("tabelaSexta");
    if (tabelaSexta.style.display === "none") {
        tabelaSexta.style.display = "block";
    } else {
        tabelaSexta.style.display = "none";
    }
}

//Botões
    document.getElementById("home").addEventListener("click", function() {
        window.location.href = "index.html";
    });



    document.getElementById("aulas").addEventListener("click", function() {
        window.location.href = "aulas.html";
    });



    document.getElementById("calendario").addEventListener("click", function() {
        window.location.href = "calendario.html";
    });
    

