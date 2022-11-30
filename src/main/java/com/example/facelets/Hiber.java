package com.example.facelets;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.File;

public class Hiber {
    private static SessionFactory sessionFactory;
    static{
        try{
            Class.forName("org.postgresql.Driver");
        }
        catch (Exception e){
            e.printStackTrace();
        }
        try{
            Configuration configuration = new Configuration();
            sessionFactory =  configuration.configure( new File("C:/IntellijProjects/Facelets/src/main/webapp/WEB-INF/hibernate.cfg.xml")).buildSessionFactory(); // "C:/IntellijProjects/Facelets/src/main/webapp/WEB-INF/hibernate.cfg.xml" /home/studs/s335162/hibernate.cfg.xml
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
    public static SessionFactory getSessionFactory(){
        return sessionFactory;
    }
}
