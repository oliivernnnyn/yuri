function resolver() {

	var a1 = document.getElementById("a1").value;
	 var b1 = document.getElementById("b1").value;
	 var c1 = document.getElementById("c1").value;
	 var a2 = document.getElementById("a2").value;
	 var b2 = document.getElementById("b2").value;
	 var c2 = document.getElementById("c2").value;

	 // Calcular los determinantes
	 var D = a1 * b2 - a2 * b1;
	 var Dx = c1 * b2 - c2 * b1;
	 var Dy = a1 * c2 - a2 * c1;
	 var x = Dx / D;
	 var y = Dy / D;
     }