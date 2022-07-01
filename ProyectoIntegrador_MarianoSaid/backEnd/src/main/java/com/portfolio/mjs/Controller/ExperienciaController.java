package com.portfolio.mjs.Controller;

import com.portfolio.mjs.Entity.Experiencia;
import com.portfolio.mjs.Interface.IExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {
    //Controlador llama a la interfaz del servicio, quien llama al servicio
    @Autowired IExperienciaService iexperienciaService;
     
    @GetMapping("experiencias/traer")  
        public List<Experiencia> getExperiencia(){
            return iexperienciaService.getExperiencia();
    }
        
    @PostMapping("experiencias/crear")
        public String createExperiencia (@RequestBody Experiencia experiencia){
            iexperienciaService.saveExperiencia(experiencia);
            return "La experiencia fue creada correctamente";
    }
    
    @DeleteMapping("experiencias/borrar/{id}")
        public String deleteExperiencia (@PathVariable Long id){
            iexperienciaService.deleteExperiencia(id);
            return "La experiencia fue eliminada correctamente";
    }        
    
//URL:PUERTO/experiencias/editar/1/empresaExp&posicionExp&...
    @PutMapping("experiencias/editar/{id}")    
        public Experiencia experiencia (@PathVariable Long id,
                                        @RequestParam("empresaExp") String nuevoEmpresaExp,
                                        @RequestParam("posicionExp") String nuevoPosicionExp,
                                        @RequestParam("startExp") String nuevoStartExp,
                                        @RequestParam("endExp") String nuevoEndExp,
                                        @RequestParam("tiempoExp") String nuevoTiempoExp,
                                        @RequestParam("modoExp") String nuevoModoExp,
                                        @RequestParam("imagenExp") String nuevoImagenExp,
                                        @RequestParam("desExp") String nuevoDesExp){
            Experiencia experiencia = iexperienciaService.findExperiencia(id);
            experiencia.setEmpresaExp(nuevoEmpresaExp);
            experiencia.setPosicionExp(nuevoPosicionExp);
            experiencia.setStartExp(nuevoStartExp);
            experiencia.setEndExp(nuevoEndExp);
            experiencia.setTiempoExp(nuevoTiempoExp);
            experiencia.setModoExp(nuevoModoExp);
            experiencia.setImagenExp(nuevoImagenExp);
            experiencia.setDesExp(nuevoDesExp);
            
            iexperienciaService.saveExperiencia(experiencia);
            return experiencia;
        }
        
        @GetMapping("/experiencias/traer/perfil")
        public Experiencia findExperiencia(){
            return  iexperienciaService.findExperiencia((long)1);
        }
}

 

