package com.example.facelets;

import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.convert.Converter;

import javax.faces.application.FacesMessage;
import javax.faces.convert.ConverterException;
public class SliderConverter implements Converter {
    @Override
    public Object getAsObject(FacesContext facesContext, UIComponent uiComponent, String s) {
       try{
           Double res = Double.parseDouble(s);
           return res;
       }
       catch (Exception e){
           FacesMessage msg = new FacesMessage ("R is not a Number");
           msg.setSeverity(FacesMessage.SEVERITY_ERROR);
           throw new ConverterException(msg);
       }
    }

    @Override
    public String getAsString(FacesContext facesContext, UIComponent uiComponent, Object o) {
        return o.toString();
    }
}
