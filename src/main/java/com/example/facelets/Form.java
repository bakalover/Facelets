package com.example.facelets;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
public class Form implements Serializable {

    private ArrayList<SepShot> shots = new ArrayList<>();
    private boolean n4X = false;
    private boolean n3X = false;
    private boolean n2X = false;
    private boolean n1X = false;
    private boolean p0X = false;
    private boolean p1X = false;
    private boolean p2X = false;
    private boolean p3X = false;
    private boolean p4X = false;
    private double y;

    private double hiddenY;

    private double hiddenX;
    private double r;

    public boolean isN1X() {
        return n1X;
    }

    public boolean isN2X() {
        return n2X;
    }

    public boolean isN3X() {
        return n3X;
    }

    public boolean isN4X() {
        return n4X;
    }

    public boolean isP0X() {
        return p0X;
    }

    public boolean isP1X() {
        return p1X;
    }

    public boolean isP2X() {
        return p2X;
    }

    public boolean isP3X() {
        return p3X;
    }

    public boolean isP4X() {
        return p4X;
    }

    public void setN1X(boolean n1X) {
        this.n1X = n1X;
    }

    public void setN2X(boolean n2X) {
        this.n2X = n2X;
    }

    public void setN3X(boolean n3X) {
        this.n3X = n3X;
    }

    public void setN4X(boolean n4X) {
        this.n4X = n4X;
    }

    public void setP0X(boolean p0X) {
        this.p0X = p0X;
    }

    public void setP1X(boolean p1X) {
        this.p1X = p1X;
    }

    public void setP2X(boolean p2X) {
        this.p2X = p2X;
    }

    public void setP3X(boolean p3X) {
        this.p3X = p3X;
    }

    public void setP4X(boolean p4X) {
        this.p4X = p4X;
    }

    public double getR() {
        return r;
    }

    public double getY() {
        return y;
    }

    public double getHiddenX() {
        return hiddenX;
    }

    public double getHiddenY() {
        return hiddenY;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setHiddenX(double hiddenX) {
        this.hiddenX = hiddenX;
    }

    public void setHiddenY(double hiddenY) {
        this.hiddenY = hiddenY;
    }

    public void setR(double r) {
        this.r = r;
    }


    public ArrayList<SepShot> getShots() {
        return shots;
    }

    public void setShots(ArrayList<SepShot> shots) {
        this.shots = shots;
    }

    public String add(){
        try {
            if (n4X) {
                saveIntoDB(new SepShot(-4,y,r,checkShot(-4,y,r)));
            }
            if (n3X) {
                saveIntoDB(new SepShot(-3,y,r,checkShot(-3,y,r)));
            }
            if (n2X) {
                saveIntoDB(new SepShot(-2,y,r,checkShot(-2,y,r)));
            }
            if (n1X) {
                saveIntoDB(new SepShot(-1,y,r,checkShot(-1,y,r)));
            }
            if (p0X) {
                saveIntoDB(new SepShot(0,y,r,checkShot(0,y,r)));
            }
            if (p1X) {
                saveIntoDB(new SepShot(1,y,r,checkShot(1,y,r)));
            }
            if (p2X) {
                saveIntoDB(new SepShot(2,y,r,checkShot(2,y,r)));
            }
            if (p3X) {
                saveIntoDB(new SepShot(3,y,r,checkShot(3,y,r)));
            }
            if (p4X) {
                saveIntoDB(new SepShot(4,y,r,checkShot(4,y,r)));
            }
            updateLocalTable();
            return "success";

        }
        catch (Exception e){
            e.printStackTrace();
            return "error";
        }
    }
    public String addFromCanvas(){
        try {
            saveIntoDB(new SepShot(hiddenX, hiddenY, r, checkShot(hiddenX, hiddenY, r)));
            updateLocalTable();
            return "success";
        }
        catch (Exception e){
            e.printStackTrace();
            return "error";
        }
    }

    public boolean checkShot(double x, double y, double r){
        return (x<=0&&y>=0&&(x*x)+(y*y)<=(r*r))||(x<=0&&y<=0&&y>=(-2)*x-r)||(x>=0&&y<=0&&x<=r&&y<=r);
    }

    public void saveIntoDB(SepShot sep){
        try {
            Session session = Hiber.getSessionFactory().openSession();
            Transaction transaction = session.beginTransaction();
            session.save(sep);
            transaction.commit();
            session.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void updateLocalTable(){
        try{
            Session session = Hiber.getSessionFactory().openSession();
            Transaction transaction = session.beginTransaction();
            Query query = session.createSQLQuery("select * from \"SHOTS\"").addEntity(SepShot.class); //On windows add "" to SHOTS
            shots = (ArrayList<SepShot>) query.list();
            session.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}