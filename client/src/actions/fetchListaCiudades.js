const fetchListaCiudades = async () => {
  try {
    const resultado = await fetch(`/api/recinto/listaCiudades`);

    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);

    return { data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { message: err };
  }
};

export default fetchListaCiudades;
