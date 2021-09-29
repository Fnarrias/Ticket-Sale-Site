const fetchConciertosPorGenero = async (genero) => {
  try {
    const resultado = await fetch(`/api/concierto/porGenero/${genero}`);

    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);

    return { success: true, data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default fetchConciertosPorGenero;
