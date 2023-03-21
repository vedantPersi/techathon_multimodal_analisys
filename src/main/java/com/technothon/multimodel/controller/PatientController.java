package com.technothon.multimodel.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.technothon.multimodel.entity.Patient;
import com.technothon.multimodel.entity.PatientDashboard;
import com.technothon.multimodel.helper.ExcelConversion;
import com.technothon.multimodel.services.PatientServiceImpl;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

	@Autowired
	PatientServiceImpl patientServiceImpl;
	@Autowired
	ExcelConversion excelConversion;
	 @PostMapping(value = "/upload")
	  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
	    String message = "";

//	    if (Helper.hasExcelFormat(file)) {
	      
	    		excelConversion.excelToDb(file);
	        message= "Uploaded the file successfully: " + file.getOriginalFilename();
	        return ResponseEntity.status(HttpStatus.OK).body("new ResponseMessage(message)");
//	      }
//	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
	     
	  }
	 @PostMapping(value = "/create")
	 public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
	 patientServiceImpl.save(patient);
	 return ResponseEntity.status(HttpStatus.OK).body("Success");
	 }
	 
	 
	 
	 @GetMapping(value = "/get")
	 public ResponseEntity<List<PatientDashboard>> getRecords() {
		 List<Patient> patientList = patientServiceImpl.findAll();
	 List<PatientDashboard> patientDashboardList = new ArrayList<>();
	 
	  for(Patient p : patientList) 
		  patientDashboardList.add(new PatientDashboard(p.getCase_id(), p.getAge(), p.getWeight(), p.getSurvivalstatus(), p.getPatientName(), p.getGender()));
		  
	 
	  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(patientDashboardList);
	 
	 }
	
}
