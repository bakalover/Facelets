package com.example.facelets;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SepShot {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private int id;
    private double x;
    private double y;
    private double r;

    private boolean valid;
    public SepShot(double x, double y, double r, boolean valid){
        this.r = r;
        this.y = y;
        this.x = x;
        this.valid = valid;
    }

    public int getId() {
        return id;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isValid() {
        return valid;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }
}
