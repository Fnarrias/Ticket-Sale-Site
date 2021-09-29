const comprarEntradas = async (asiento, cantidad, id) => {
  try {
    const resultado = await fetch(`/api/concierto/entradas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreSector: asiento,
        cantidad: cantidad,
      }),
    });

    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);
    else {
      window.alert("gracias por tu compra");
    }

    return { success: true, data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default comprarEntradas;
