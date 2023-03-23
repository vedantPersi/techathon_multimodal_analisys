package com.technothon.multimodel.entity;

public class PatientDashboard {

	private Integer id;

	private Integer age;
	
	private float weight;   
	
	private Boolean survivalStatus;

	private String name;
	
	private String gender; 

	public PatientDashboard(Integer id, Integer age, float f, Boolean survivalstatus, String patientName,
			String gender) {
		super();
		this.id = id;
		this.age = age;
		this.weight = f;
		this.survivalStatus = survivalstatus;
		this.name = patientName;
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public String getGender() {
		return gender;
	}

	public void setName(String patientName) {
		this.name = patientName;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getId() {
		return id;
	}

	public Integer getAge() {
		return age;
	}

	public float getWeight() {
		return weight;
	}

	public Boolean getSurvivalStatus() {
		return survivalStatus;
	}

	public void setCaseId(Integer case_id) {
		this.id = case_id;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public void setSurvivalStatus(Boolean survivalstatus) {
		this.survivalStatus = survivalstatus;
	} 
}
