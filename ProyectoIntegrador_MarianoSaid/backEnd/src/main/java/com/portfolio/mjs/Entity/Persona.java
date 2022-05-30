package com.portfolio.mjs.Entity;

import java.util.List;
import javax.persistence.Entity; 
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity
public class Persona { 
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id; 
   
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String nombre;
  
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String apellido;
   
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String img;
   
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String titulo;
   
   @NotNull
   @Size(min = 1, max = 255, message = "No cumple con la longitud")
   private String acercaDeMi;

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "idEdu")
   private List<Educacion> educacionList;
   @OneToMany(fetch = FetchType.LAZY, mappedBy = "idExp")
   private List<Experiencia> experienciaList;
   @OneToMany(fetch = FetchType.LAZY, mappedBy = "idSkill")
   private List<HyS> HySList;
   @OneToMany(fetch = FetchType.LAZY, mappedBy = "idProyecto")
   private List<Proyectos> proyectosList;

   public Persona(){
   }
    
   public Persona(Long id, String nombre, String apellido, String img, String titulo, String acercaDeMi) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.acercaDeMi = acercaDeMi;
    }
  
   
}