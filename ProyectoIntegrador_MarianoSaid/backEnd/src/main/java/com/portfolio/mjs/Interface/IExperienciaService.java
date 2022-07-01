package com.portfolio.mjs.Interface;

import com.portfolio.mjs.Entity.Experiencia;
import java.util.List;

public interface IExperienciaService {
    // Metodos que voy a utilizar:
    //Traer una lista de experiencia
    public List<Experiencia> getExperiencia();
    
    //Guardar un objeto de tipo experiencia
    public void saveExperiencia(Experiencia experiencia);
    
    //Eliminar un objeto (experiencia), buscado por id
    public void deleteExperiencia(Long id);
    
    //Busca una experiencia por id
    public Experiencia findExperiencia(Long id);
}
