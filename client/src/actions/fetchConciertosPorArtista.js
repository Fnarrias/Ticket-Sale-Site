const fetchConciertosPorArtista = async (artista) => {
  try {
    const resultado = await fetch(`/api/concierto/porArtista/${artista}`);

    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);

    return { success: true, data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default fetchConciertosPorArtista;
