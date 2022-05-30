
package com.portfolio.mjs.Repository;

import com.portfolio.mjs.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface IExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
