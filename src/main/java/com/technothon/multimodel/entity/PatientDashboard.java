package com.technothon.multimodel.entity;

public class PatientDashboard {

	private Integer case_id;

	private Integer age;
	
	private String weight;   
	
	private Boolean survivalstatus;

	private String patientName;
	
	private String gender; 

	public PatientDashboard(Integer case_id, Integer age, String weight, Boolean survivalstatus, String patientName,
			String gender) {
		super();
		this.case_id = case_id;
		this.age = age;
		this.weight = weight;
		this.survivalstatus = survivalstatus;
		this.patientName = patientName;
		this.gender = gender;
	}

	public String getPatientName() {
		return patientName;
	}

	public String getGender() {
		return gender;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getCase_id() {
		return case_id;
	}

	public Integer getAge() {
		return age;
	}

	public String getWeight() {
		return weight;
	}

	public Boolean getSurvivalstatus() {
		return survivalstatus;
	}

	public void setCase_id(Integer case_id) {
		this.case_id = case_id;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public void setSurvivalstatus(Boolean survivalstatus) {
		this.survivalstatus = survivalstatus;
	} 
}
