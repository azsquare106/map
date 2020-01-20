package com.azsquare.map.model;

public class Position {


    private String lat;
    private String lng;


    public Position(String latitude, String longitude ){

        this.lat=latitude;
        this.lng=longitude;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }
}
