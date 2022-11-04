package com.example.facelets;
/*import javax.faces.bean.ManagedBean;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
@Named
@SessionScoped
@ManagedBean*/
public class Shot {
    private boolean n4X = false;
    private boolean n3X = false;
    private boolean n2X = false;
    private boolean n1X = false;
    private boolean p0X = false;
    private boolean p1X = false;
    private boolean p2X = false;
    private boolean p3X = false;
    private boolean p4X = false;
    private double y = 0.0;
    private double r = 1.0;

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

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }
    public void test(){
        r = r+y;
    }
}