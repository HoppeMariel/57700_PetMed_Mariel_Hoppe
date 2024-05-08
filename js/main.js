function simuladorPlan(cantidadMascotas, plan) {

  const descuento=0.8

  switch (plan.toUpperCase()) {
    case 'PARDO':
        precioPlan = 10000;
        break;
    case 'POLAR':
        precioPlan = 15000;
        break;
    case 'PANDA':
        precioPlan = 20000;
        break;
    default:
        console.log("Ingresá un plan válido.");
  }

  console.log("Elegiste el plan " + plan + ".El precio del plan individual es $" + precioPlan)
  
  for (let i = 1; i <= 12; i++) {
    if (cantidadMascotas >= 3) {
      precioTotal = cantidadMascotas * precioPlan * descuento;
      console.log(`Mes ${i}: $${precioTotal}`); 
    } 
    else {
      precioTotal = cantidadMascotas * precioPlan;
      console.log(`Mes ${i}: $${precioTotal}`);
    }
  }
}

let cantidadMascotas = parseInt(prompt("Ingrese la cantidad de mascotas:"));
let plan = prompt("Ingrese el plan (Pardo, Polar o Panda):");

simuladorPlan(cantidadMascotas, plan);