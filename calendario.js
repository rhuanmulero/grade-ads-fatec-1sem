
document.querySelectorAll('.mes ul li').forEach(function(item) {
    item.addEventListener('click', function() {
      var day = this.querySelector('time').innerText;
      var aulas = this.getAttribute('data-aulas').split(','); 
      document.getElementById('modal').style.display = 'block';
      var modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = ''; 

      aulas.forEach(function(aula) {
        var paragraph = document.createElement('p');
        paragraph.textContent = ' ' + aula.trim();
        modalContent.appendChild(paragraph);
      });
    });
  });
  

  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  

  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });


function showNextMonth() {
  var meses = ["fevereiro", "marco", "abril", "maio", "junho"];
  for (var i = 0; i < meses.length; i++) {
    if (document.getElementById(meses[i]).style.display != "none") {
      document.getElementById(meses[i]).style.display = "none";
      if (i == meses.length - 1) {
        document.getElementById(meses[0]).style.display = "block";
      } else {
        document.getElementById(meses[i + 1]).style.display = "block";
      }
      break;
    }
  }
}


function showPreviousMonth() {
  var meses = ["fevereiro", "marco", "abril", "maio", "junho"];
  for (var i = meses.length - 1; i >= 0; i--) {
    if (document.getElementById(meses[i]).style.display != "none") {
      document.getElementById(meses[i]).style.display = "none";
      if (i == 0) {
        document.getElementById(meses[meses.length - 1]).style.display = "block";
      } else {
        document.getElementById(meses[i - 1]).style.display = "block";
      }
      break;
    }
  }
}

    document.getElementById("before").addEventListener("click", function() {
        showPreviousMonth();
    });

  
    document.getElementById("next").addEventListener("click", function() {
        showNextMonth();
    });




document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";
});



document.getElementById("aulas").addEventListener("click", function() {
    window.location.href = "aulas.html";
});



document.getElementById("horario").addEventListener("click", function() {
    window.location.href = "horario.html";
});

