package com.portfolio.mjs.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Experiencia {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long idExp; 
   
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String empresaExp;
  
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String posicionExp;
    
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String startExp;
   
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String endExp;
   
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String tiempoExp;
   
   @NotNull
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String modoExp;
   
   @Size(min = 1, max = 50, message = "No cumple con la longitud")
   private String imagenExp;
   
   @NotNull
   @Size(min = 1, max = 1000, message = "No cumple con la longitud")
   private String desExp;
    
}
