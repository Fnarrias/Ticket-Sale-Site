const autenticar = async (payload) => {
    try {
      const resultado = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const obj = await resultado.json();
      if (!resultado.ok) throw new Error(obj.message);
      

      return { success: true, id:obj.id_usuario, nombre: obj.nombre_usuario };
    } catch (err) {
      console.log({ error: err });
      return { success: false, message: err };
    }
  };
  

export default autenticar;
