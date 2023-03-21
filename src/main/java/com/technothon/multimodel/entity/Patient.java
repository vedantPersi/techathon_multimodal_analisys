package com.technothon.multimodel.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rid")
	private Integer id;

	@Column(name = "case_id", nullable = false, updatable = false)
	private Integer case_id;

	@Column(name="age")
	private Integer age;
	@Column(name = "patient_name")
	private String patientName;
	@Column(name="weight")
	private String weight;    
	@Column(name="ethnicity")
	private String ethnicity;    
	@Column(name="smoking")
	private String smoking;   
	@Column(name="gg")
	private String gg;  
	@Column(name="gender")
	private String gender; 
	@Column(name="survivalstatus")
	private Boolean survivalstatus; 
//	@Column(name="dateofdeath")
//	private Date dateofdeath; 
//	@Column(name="timeofdeath")
//	private String timeofdeath; 
//	@Column(name="days betweenCTandSurgara")
//	private String daysbetweenctandsurgara; 
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCase_id() {
		return case_id;
	}
	public void setCase_id(Integer case_id) {
		this.case_id = case_id;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getWeight() {
		return weight;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getEthnicity() {
		return ethnicity;
	}
	public void setEthnicity(String ethnicity) {
		this.ethnicity = ethnicity;
	}
	public String getSmoking() {
		return smoking;
	}
	public void setSmoking(String smoking) {
		this.smoking = smoking;
	}
	public String getGg() {
		return gg;
	}
	public void setGg(String gg) {
		this.gg = gg;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Boolean getSurvivalstatus() {
		return survivalstatus;
	}
	public void setSurvivalstatus(Boolean survivalstatus) {
		this.survivalstatus = survivalstatus;
	}
//	public Date getDateofdeath() {
//		return dateofdeath;
//	}
//	public void setDateofdeath(Date dateofdeath) {
//		this.dateofdeath = dateofdeath;
//	}
//	public String getTimeofdeath() {
//		return timeofdeath;
//	}
//	public void setTimeofdeath(String timeofdeath) {
//		this.timeofdeath = timeofdeath;
//	}
//	public String getDaysbetweenctandsurgara() {
//		return daysbetweenctandsurgara;
//	}
//	public void setDaysbetweenctandsurgara(String daysbetweenctandsurgara) {
//		this.daysbetweenctandsurgara = daysbetweenctandsurgara;
//	}
//	
	
	
	
}
