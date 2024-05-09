function simularPlan() {
    let plan = prompt("Ingresá el plan que querés consultar (Pardo, Polar o Panda):");
    let cantidadMascotas = parseInt(prompt("Ingresá la cantidad de mascotas que tenés "));

  function simularPlan(cantidadMascotas, plan) {
    const descuento = 0.8;
    let precioPlan;

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

    console.log("Elegiste el plan ", plan , ". El precio del plan individual es $", precioPlan)
    
    for (let i = 1; i <= 12; i++) {
      let precioTotal;
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
}