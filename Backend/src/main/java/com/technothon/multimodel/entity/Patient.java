package com.technothon.multimodel.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rid")
	private Integer rid;

	@Column(name = "id", nullable = false, updatable = false)
	private Integer id;

	@Column(name="age")
	private Integer age;
	@Column(name = "name")
	private String name;
	@Column(name="weight")
	private float weight;    
	@Column(name="ethnicity")
	private String ethnicity;    
	@Column(name="smoking")
	private String smoking;   
	@Column(name="gg")
	private String gg;  
	@Column(name="gender")
	private String gender; 
	@Column(name="survivalStatus")
	private Boolean survivalStatus;
	public Integer getRid() {
		return rid;
	}
	public Integer getId() {
		return id;
	}
	public Integer getAge() {
		return age;
	}
	public String getName() {
		return name;
	}
	public float getWeight() {
		return weight;
	}
	public String getEthnicity() {
		return ethnicity;
	}
	public String getSmoking() {
		return smoking;
	}
	public String getGg() {
		return gg;
	}
	public String getGender() {
		return gender;
	}
	public Boolean getSurvivalStatus() {
		return survivalStatus;
	}
	public void setRid(Integer rid) {
		this.rid = rid;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public void setEthnicity(String ethnicity) {
		this.ethnicity = ethnicity;
	}
	public void setSmoking(String smoking) {
		this.smoking = smoking;
	}
	public void setGg(String gg) {
		this.gg = gg;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public void setSurvivalStatus(Boolean survivalStatus) {
		this.survivalStatus = survivalStatus;
	} 
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
	@Nullable
	@Column(name="dateofdeath")
	private Date dateofdeath; 
	@Column(name="timeofdeath")
	private String timeofdeath; 
	@Column(name="daysbetweenCTandSurgery")
	private String daysbetweenCTandSurgery;
	
	@Column(name="ct_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
	@Nullable
	private Date ctDate;
	
	@Column(name="city")
	private String city;
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Date getCtDate() {
		return ctDate;
	}
	public void setCtDate(Date ctDate) {
		this.ctDate = ctDate;
	}
	public Date getDateofdeath() {
		return dateofdeath;
	}
	public String getTimeofdeath() {
		return timeofdeath;
	}
	public String getDaysbetweenCTandSurgery() {
		return daysbetweenCTandSurgery;
	}
	public void setDateofdeath(Date dateofdeath) {
		this.dateofdeath = dateofdeath;
	}
	public void setTimeofdeath(String timeofdeath) {
		this.timeofdeath = timeofdeath;
	}
	public void setDaysbetweenCTandSurgery(String daysbetweenCTandSurgery) {
		this.daysbetweenCTandSurgery = daysbetweenCTandSurgery;
	} 
	
	
	
	
	
}
	

